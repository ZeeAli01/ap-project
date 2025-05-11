import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  const parseForm = (req) =>
    new Promise((resolve, reject) => {
      const form = formidable({
        multiples: false,
        keepExtensions: true,
        uploadDir: os.tmpdir(),
      });

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

  try {
    if (method === 'GET') {
      const userId = req.query.userId;

      if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
      }

      const logos = await prisma.logo.findMany({
        where: { user_id: userId, is_deleted: false },
        orderBy: { created_at: 'desc' },
      });

      return res.status(200).json({ success: true, data: logos });
    }

    if (method === 'POST') {
      const { fields, files } = await parseForm(req);
      const userId = fields.userId?.toString();

      console.log("fields:", fields);
      console.log("files:", files);

      if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
      }

      if (!files.logo) {
        return res.status(400).json({ success: false, message: 'No logo file uploaded' });
      }

      const logoFile = Array.isArray(files.logo) ? files.logo[0] : files.logo;

      if (!logoFile || !logoFile.filepath) {
        return res.status(400).json({ success: false, message: 'Invalid logo file' });
      }

      if (!fs.existsSync(logoFile.filepath)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Temporary file not found',
          filepath: logoFile.filepath
        });
      }

      const uploadResult = await cloudinary.uploader.upload(logoFile.filepath, {
        folder: 'logos',
      });

      const logo = await prisma.logo.create({
        data: {
          user_id: userId,
          logo_path: uploadResult.secure_url,
          created_at: new Date(),
          updated_at: new Date(),
          is_deleted: false,
        },
      });

      try {
        fs.unlinkSync(logoFile.filepath);
      } catch (unlinkError) {
        console.warn('Failed to delete temporary file:', unlinkError);
      }

      return res.status(201).json({ success: true, data: logo });
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
}