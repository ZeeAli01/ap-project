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

        // Note: JWT tokens are stateless, so we can't actually invalidate them server-side
        // In a real-world implementation, you might want to:
        // 1. Use a token blacklist in Redis or similar
        // 2. Track tokens in the database
        // 3. Use short expiration times

        // For now, we'll just return a success message
        // The client should remove the token from local storage/cookies

        return res.status(200).json({
            message: 'Logged out successfully'
        });

        /* 
        // An example of token blacklisting would look like this:
        const { token } = req.body;
        
        // Add token to blacklist with expiry time matching the token's expiration
        await redis.set(`blacklist:${token}`, true, 'EX', 86400); // 24 hours
        */

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