import { NextResponse } from 'next/server';
import * as jose from 'jose';

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

    const token = authHeader.split(" ")[1];
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const { payload } = await jose.jwtVerify(token, secret);
        console.log("decoded", payload);

        const requiredRoles = Object.entries(roleProtectedPaths)
            .find(([path]) => pathname.startsWith(path))?.[1];

        if (requiredRoles) {
            const userRole = payload.role;

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
        requestHeaders.set('x-user-id', payload.userId);
        requestHeaders.set('x-user-role', payload.role);
        requestHeaders.set('x-user-email', payload.email);
        requestHeaders.set('x-user-username', payload.username);
        requestHeaders.set('x-user-role-id', payload.roleId || '');

        const userObject = {
            userId: payload.userId,
            email: payload.email,
            username: payload.username,
            role: payload.role || 'User',
            roleId: payload.roleId || null
        };
        requestHeaders.set('x-user', JSON.stringify(userObject));

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

    } catch (error) {
        console.error("Token verification error:", error);
        if (pathname.startsWith('/api/')) {
            return NextResponse.json(
                {
                    error: error.name === 'JWTExpired' ? 'Token expired' : 'Invalid token'
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