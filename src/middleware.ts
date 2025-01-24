import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    const section = pathSegments[0]; // 'information' または 'interview'
    
    let pageType = 'top';

    if (['/information', '/interview'].some(path => pathname.startsWith(path))) {
        if (pathSegments[1] === 'category' || pathname.includes('/page/') || 
            (pathname.startsWith('/information/search'))) {
            pageType = 'archive';
        } else if (pathSegments.length === 2) {
            pageType = `single -${section}`;
        } else {
            pageType = 'archive';
        }
    } else if (pathname.startsWith('/contact')) {
        pageType = 'contact';
    } else if (pathname === '/') {
        pageType = 'top';
    }

    const response = NextResponse.next();
    response.headers.set('x-page-type', pageType);
    return response;
}

export const config = {
    matcher: '/:path*',
};