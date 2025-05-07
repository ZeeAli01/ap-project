import { authMiddleware } from '@/lib/middleware/authMiddleware';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    try {
        const auth = await authMiddleware(req, res);

        if (!auth.authenticated) {
            return res.status(401).json({ error: auth.error });
        }


        return res.status(200).json({
            message: 'Logged out successfully'
        });

       

    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({
            error: 'Logout failed',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        await prisma.$disconnect();
    }
}