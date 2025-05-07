import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; 

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
      const logo = await prisma.logo.findUnique({
        where: { id: parseInt(id) },
      });

      if (!logo || logo.is_deleted) {
        return res.status(404).json({ success: false, message: 'Logo not found' });
      }

      return res.status(200).json({ success: true, data: logo });
    }

    if (method === 'PUT') {
      const existingLogo = await prisma.logo.findUnique({
        where: { id: parseInt(id) },
      });

      if (!existingLogo || existingLogo.is_deleted) {
        return res.status(404).json({ success: false, message: 'Logo not found' });
      }

      const { fields, files } = await parseForm(req);
      console.log("fields:", fields);
      console.log("files:", files);
      
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

      if (existingLogo.logo_path) {
        try {
          const publicId = existingLogo.logo_path.split('/').slice(-2).join('/').split('.')[0];
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }
        } catch (deleteError) {
          console.warn('Failed to delete old logo from Cloudinary:', deleteError);
        }
      }

      const updatedLogo = await prisma.logo.update({
        where: { id: parseInt(id) },
        data: {
          logo_path: uploadResult.secure_url,
          updated_at: new Date(),
        },
      });

      try {
        fs.unlinkSync(logoFile.filepath);
      } catch (unlinkError) {
        console.warn('Failed to delete temporary file:', unlinkError);
      }

      return res.status(200).json({ success: true, data: updatedLogo });
    }

    if (method === 'DELETE') {
      const existingLogo = await prisma.logo.findUnique({
        where: { id: parseInt(id) },
      });

      if (!existingLogo || existingLogo.is_deleted) {
        return res.status(404).json({ success: false, message: 'Logo not found' });
      }

      if (existingLogo.logo_path) {
        try {
          const publicId = existingLogo.logo_path.split('/').slice(-2).join('/').split('.')[0];
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }
        } catch (deleteError) {
          console.warn('Failed to delete logo from Cloudinary:', deleteError);
        }
      }

      const deletedLogo = await prisma.logo.update({
        where: { id: parseInt(id) },
        data: {
          is_deleted: true,
          updated_at: new Date(),
        },
      });

      return res.status(200).json({ success: true, data: deletedLogo });
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
  } catch (error) {
    console.error(`Error in ${method} /api/logos/[id]:`, error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
}