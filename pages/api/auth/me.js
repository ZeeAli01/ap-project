import { PrismaClient } from '@prisma/client';
import * as jose from 'jose';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Check for Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization header missing or invalid format' });
    }

    const token = authHeader.split(' ')[1];
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    let payload;
    try {
      const verified = await jose.jwtVerify(token, secret);
      payload = verified.payload;
    } catch (error) {
      return res.status(401).json({ 
        error: error.name === 'JWTExpired' ? 'Token expired' : 'Invalid token'
      });
    }

    // Get fresh user data from the database
    const user = await prisma.users.findUnique({
      where: {
        user_id: payload.userId,
        is_deleted: false
      },
      include: {
        userrole: {
          select: {
            role_name: true,
            role_id: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Don't return password hash
    const { password_hash, ...userWithoutPassword } = user;

    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error('Auth verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}