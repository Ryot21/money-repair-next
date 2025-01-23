import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ミドルウェア関数
export function middleware(request: NextRequest) {
    // リクエストの URL を取得
    const pathname = request.nextUrl.pathname;

    // パスに基づいてページタイプを判定
    let pageType = 'top';

    if (pathname.startsWith('/information')) {
    pageType = 'single';
    } else if (pathname.startsWith('/contact')) {
    pageType = 'contact';
    } else if (pathname === '/') {
    pageType = 'top';
    }

    // リスポンスのヘッダーにフラグを追加
    const response = NextResponse.next();
    response.headers.set('x-page-type', pageType);

    return response;
}

// ミドルウェアがどのパスに適用されるか設定
export const config = {
    matcher: '/:path*', // すべてのパスに適用
};

