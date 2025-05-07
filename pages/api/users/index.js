import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    try {
        if (req.method === 'GET') {
            const users = await prisma.users.findMany({
                where: { is_deleted: false },
                select: {
                    user_id: true,
                    username: true,
                    email: true,
                    role_id: true,
                    created_at: true,
                    updated_at: true,
                }
            });

            return res.status(200).json(users);
        }

        else if (req.method === 'POST') {
            const { username, email, password_hash, role_id } = req.body;

            if (!username || !email || !password_hash) {
                return res.status(400).json({
                    error: 'Missing required fields',
                    details: 'Username, email, and password are required'
                });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password_hash, saltRounds);

            const newUser = await prisma.users.create({
                data: {
                    username,
                    email,
                    password_hash: hashedPassword,
                    role_id,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });

            const { password_hash: _, ...userWithoutPassword } = newUser;
            return res.status(201).json(userWithoutPassword);
        }

        else {
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
        }
    } catch (error) {
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0] || 'field';
            return res.status(409).json({
                error: `Conflict: ${field} already exists`,
                details: `The ${field} provided is already taken`
            });
        }

        console.error('API Error:', error);
        return res.status(500).json({
            error: 'Server error processing request',
        });
    } finally {
        await prisma.$disconnect();
    }
}