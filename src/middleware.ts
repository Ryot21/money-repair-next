import { NextResponse, NextRequest } from 'next/server';

// Basic認証のクレデンシャルを環境変数から直接取得
// const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
// const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;

export function middleware(request: NextRequest) {
    // Basic認証のチェック
    // if (process.env.NODE_ENV === 'production') {  // 本番環境のみBasic認証を有効化
    //     const basicAuth = request.headers.get('authorization');
        
    //     if (basicAuth) {
    //         const authValue = basicAuth.split(' ')[1];
    //         const [user, pwd] = atob(authValue).split(':');

    //         if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
    //             // 認証成功：既存の処理を続行
    //             return handleExistingMiddleware(request);
    //         }
    //     }

    //     // 認証失敗時のレスポンス
    //     return new NextResponse('Authentication required', {
    //         status: 401,
    //         headers: {
    //             'WWW-Authenticate': 'Basic realm="Secure Area"',
    //         },
    //     });
    // }

    // 開発環境では既存の処理のみ実行
    return handleExistingMiddleware(request);
}

// 既存のミドルウェア処理を関数として分離
function handleExistingMiddleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    const section = pathSegments[0];
    
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