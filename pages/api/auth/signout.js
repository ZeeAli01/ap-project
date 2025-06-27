import { serialize } from 'cookie';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
    };
    
    res.setHeader('Set-Cookie', serialize('auth_token', '', cookieOptions));
    
    return res.status(200).json({ message: 'Logged out successfully' });
}