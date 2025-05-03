import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    if (req.method !== 'POST') return res.status(405).end();

    const { username, email, password_hash, role_id } = req.body;

    if (!username || !email || !password_hash) return res.status(400).json({ message: 'Missing fields' });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password_hash, saltRounds);

    try {
        const user = await prisma.users.create({
            data: {
                username,
                email,
                password_hash: hashedPassword,
                role_id,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'User creation failed', details: error.message });
    }
}
