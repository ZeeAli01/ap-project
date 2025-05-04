import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const protectedPaths = [
    // '/dashboard',
    // '/admin',
    // '/api/protected',
    // '/api/admin',
    '/api/users'
];

const roleProtectedPaths = {
    // '/admin': ['Admin'],
    // '/api/admin': ['Admin'],
    // '/api/users': ['Admin']
};

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    const isProtectedPath = protectedPaths.some(path =>
        pathname.startsWith(path)
    );

    if (!isProtectedPath) {
        return NextResponse.next();
    }
    console.log("req.header", request.headers);

    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json(
                { error: 'Authorization header missing or invalid format' },
                { status: 401 }
            );
        }

        return NextResponse.redirect(new URL('/login', request.url));
    }

    const token = authHeader.substring(7);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    console.log("token is :", token);

    try {
        console.log("MIDDLEWARE TRY")
        const decoded = jwt.verify(token, "thisistopsecret");
        console.log("decoded", decoded);
        const requiredRoles = Object.entries(roleProtectedPaths)
            .find(([path]) => pathname.startsWith(path))?.[1];

        if (requiredRoles) {
            const userRole = decoded.role;

            if (!userRole || !requiredRoles.includes(userRole)) {
                if (pathname.startsWith('/api/')) {
                    return NextResponse.json(
                        { error: 'Insufficient permissions' },
                        { status: 403 }
                    );
                }

                return NextResponse.redirect(new URL('/login', request.url));
            }
        }

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', decoded.userId);
        requestHeaders.set('x-user-role', decoded.role);
        requestHeaders.set('x-user-email', decoded.email);
        requestHeaders.set('x-user-username', decoded.username);
        requestHeaders.set('x-user-role-id', decoded.roleId || '');

        const userObject = {
            userId: decoded.userId,
            email: decoded.email,
            username: decoded.username,
            role: decoded.role || 'User',
            roleId: decoded.roleId || null
        };
        requestHeaders.set('x-user', JSON.stringify(userObject));

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

    } catch (error) {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json(
                {
                    error: error.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token'
                },
                { status: 401 }
            );
        }

        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: [
        // Protected pages
        '/dashboard/:path*',
        '/admin/:path*',
        // Protected API routes
        '/api/users/:path*',

    ],
};