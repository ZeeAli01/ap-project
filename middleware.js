import { NextResponse } from 'next/server';
import * as jose from 'jose';

const protectedPaths = [
    '/dashboard',
  '/my-links',
  '/pre-generate',
  '/tags',
  '/logos',
  '/analytics'
];

const roleProtectedPaths = {
     '/pre-generate': ['Admin'],
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

  // Check for token in cookies first
  let token;
  const cookies = request.cookies;
  const authCookie = cookies.get('auth_token');
  
  if (authCookie?.value) {
    token = authCookie.value;
  } else {
    // Fall back to authorization header if cookie isn't present
    const authHeader = request.headers.get('authorization');
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(" ")[1];
    }
  }

  // No token found in either cookie or header
  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    
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
     '/dashboard/:path*',
    '/my-links/:path*',
    '/pre-generate/:path*',
    '/tags/:path*',
    '/logos/:path*',
    '/analytics/:path*',
  ],
};