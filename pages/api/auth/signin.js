import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: 'Missing credentials',
                details: 'Email and password are required'
            });
        }

        const user = await prisma.users.findFirst({
            where: {
                email: email,
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
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({
            userId: user.user_id,
            email: user.email,
            username: user.username,
            role: user.userrole?.role_name || 'user',
            roleId: user.role_id || null
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(secret);

        const { password_hash, ...userWithoutPassword } = user;

        return res.status(200).json({
            message: 'Authentication successful',
            token,
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Sign-in error:', error);
        return res.status(500).json({
            error: 'Authentication failed',
        });
    } finally {
        await prisma.$disconnect();
    }
}