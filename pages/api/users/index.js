// import prisma from "../../../lib/prisma";
import { PrismaClient } from '@prisma/client'



export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if (req.method !== 'GET') return res.status(405).end();

    try {
        const users = await prisma.users.findMany({ where: { is_deleted: false } });
        res.status(200).json(users);
        console.log("USERS IS :", users);
    } catch (error) {
        console.log("Error is ", error);
        res.status(500).json({ error: 'Failed to fetch users' });

    }
}
