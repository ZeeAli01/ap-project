import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;
    const userId = id;


    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) {
        return res.status(400).json({ error: 'Invalid user ID format. Expected UUID.' });
    }

    try {
        if (req.method === 'GET') {
            const user = await prisma.users.findUnique({
                where: {
                    user_id: userId,
                    is_deleted: false
                }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { password_hash, ...userWithoutPassword } = user;
            return res.status(200).json(userWithoutPassword);
        }

        else if (req.method === 'PUT') {
            const {
                username,
                email,
                role_id,
            } = req.body;

            const existingUser = await prisma.users.findUnique({
                where: {
                    user_id: userId,
                    is_deleted: false
                }
            });

            if (!existingUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedUser = await prisma.users.update({
                where: { user_id: userId },
                data: {
                    username,
                    email,
                    role_id,
                    updated_at: new Date(),
                }
            });

            const { password_hash, ...userWithoutPassword } = updatedUser;
            return res.status(200).json(userWithoutPassword);
        }

        else if (req.method === 'DELETE') {
            const existingUser = await prisma.users.findUnique({
                where: {
                    user_id: userId,
                    is_deleted: false
                }
            });

            if (!existingUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            const now = new Date();

            const result = await prisma.$transaction(async (tx) => {
                const updatedUrls = await tx.url.updateMany({
                    where: { user_id: userId, is_deleted: false },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                const updatedAuditlogs = await tx.auditlog.updateMany({
                    where: { changed_by: userId, is_deleted: false },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                const updatedApikeys = await tx.apikey.updateMany({
                    where: { user_id: userId, is_deleted: false },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                const updatedLogos = await tx.logo.updateMany({
                    where: { user_id: userId, is_deleted: false },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                const updatedUrltags = await tx.urltag.updateMany({
                    where: { user_id: userId, is_deleted: false },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                const deletedUser = await tx.users.update({
                    where: { user_id: userId },
                    data: {
                        is_deleted: true,
                        deleted_at: now
                    }
                });

                return {
                    user: deletedUser,
                    relatedData: {
                        urls: updatedUrls.count,
                        auditlogs: updatedAuditlogs.count,
                        apikeys: updatedApikeys.count,
                        logos: updatedLogos.count,
                        urltags: updatedUrltags.count
                    }
                };
            });

            return res.status(200).json({
                message: 'User and related data deleted successfully',
                user_id: result.user.user_id,
                deleted_related_records: result.relatedData
            });
        }

        else {
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
        }
    } catch (error) {
        console.error('Request error:', error);
        res.status(500).json({ error: 'Error processing your request', details: error.message });
    } finally {
        await prisma.$disconnect();
    }
}