import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
const privateRoutes = [
    "/private",
    "/dashboard",
    "/secret"
]
 
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
    const token = await getToken({req});
    const isLogin = Boolean(token);
    const isUser = token.role === "user";
    console.log({isLogin});
//   return NextResponse.redirect(new URL('/home', req.url))
return NextResponse.next();
}


// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/private/:path*',
}