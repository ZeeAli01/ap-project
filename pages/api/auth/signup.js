import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    try {
        const { username, email, password, role_id = 2 } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Username, email, and password are required'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (password.length < 5) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long' });
        }

        const existingUser = await prisma.users.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ],
                is_deleted: false
            }
        });

        if (existingUser) {
            return res.status(409).json({
                error: 'Account already exists',
                details: existingUser.email === email ? 'Email already in use' : 'Username already taken'
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password_hash: hashedPassword,
                role_id,
                created_at: new Date(),
                updated_at: new Date(),
            },
            include: {
                userrole: {
                    select: {
                        role_name: true
                    }
                }
            }
        });

        const token = jwt.sign(
            {
                userId: newUser.user_id,
                email: newUser.email,
                username: newUser.username,
                role: newUser.userrole?.role_name || 'user',
                roleId: newUser.role_id || null
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        const { password_hash, ...userWithoutPassword } = newUser;

        return res.status(201).json({
            message: 'User created successfully',
            token,
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Sign-up error:', error);

        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0] || 'field';
            return res.status(409).json({
                error: `Conflict: ${field} already exists`,
                details: `The ${field} provided is already taken`
            });
        }

        return res.status(500).json({
            error: 'Registration failed',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        await prisma.$disconnect();
    }
}