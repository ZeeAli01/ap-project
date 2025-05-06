import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'URL ID is required' });
    }

    switch (method) {
        case 'GET':
            // Get URL by ID
            try {
                const url = await prisma.url.findUnique({
                    where: {
                        url_id: id,
                        is_deleted: false,
                    },
                });

                if (!url) {
                    return res.status(404).json({ error: 'URL not found' });
                }

                return res.status(200).json(url);
            } catch (error) {
                console.error('Error fetching URL:', error);
                return res.status(500).json({ error: 'Failed to fetch URL' });
            }

        case 'PUT':
        case 'PATCH':
            // Update URL by ID
            try {
                const { userId, originalUrl, tagId, logoId, urlType, expirationDate, status } = req.body;

                // Check if URL exists
                const existingUrl = await prisma.url.findUnique({
                    where: {
                        url_id: id,
                        is_deleted: false,
                    },
                });

                if (!existingUrl) {
                    return res.status(404).json({ error: 'URL not found' });
                }

                // Update URL
                const updatedUrl = await prisma.url.update({
                    where: {
                        url_id: id,
                    },
                    data: {
                        original_url: originalUrl !== undefined ? originalUrl : undefined,
                        tag_id: tagId !== undefined ? tagId : undefined,
                        logo_id: logoId !== undefined ? logoId : undefined,
                        url_type: urlType !== undefined ? urlType : undefined,
                        expiration_date: expirationDate !== undefined ? new Date(expirationDate) : undefined,
                        status: status !== undefined ? status : undefined,
                        updated_at: new Date(),
                    },
                });

                // Add audit log entry if userId is provided
                if (userId) {
                    await prisma.auditlog.create({
                        data: {
                            url_id: id,
                            action: 'UPDATE',
                            changed_by: userId,
                            details: 'URL updated',
                        },
                    });
                }

                return res.status(200).json(updatedUrl);
            } catch (error) {
                console.error('Error updating URL:', error);
                return res.status(500).json({ error: 'Failed to update URL' });
            }

        case 'DELETE':
            // Delete URL by ID (soft delete)
            try {
                const { userId } = req.body;

                // Check if URL exists
                const existingUrl = await prisma.url.findUnique({
                    where: {
                        url_id: id,
                        is_deleted: false,
                    },
                });

                if (!existingUrl) {
                    return res.status(404).json({ error: 'URL not found' });
                }

                // Soft delete URL
                const deletedUrl = await prisma.url.update({
                    where: {
                        url_id: id,
                    },
                    data: {
                        is_deleted: true,
                        deleted_at: new Date(),
                        status: 'inactive',
                    },
                });

                // Add audit log entry if userId is provided
                if (userId) {
                    await prisma.auditlog.create({
                        data: {
                            url_id: id,
                            action: 'DELETE',
                            changed_by: userId,
                            details: 'URL deleted',
                        },
                    });
                }

                return res.status(200).json({ success: true, message: 'URL deleted successfully' });
            } catch (error) {
                console.error('Error deleting URL:', error);
                return res.status(500).json({ error: 'Failed to delete URL' });
            }

        default:
            return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
}