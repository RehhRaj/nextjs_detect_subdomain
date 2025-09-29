// src/middleware.ts


// // for testing purpose only for file bsed routing


import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest) { 
 return NextResponse.next();
}


//  sub domin bse routing

// import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// // Constants
// const BASE_DOMAIN = 'lvh.me';
// const BASE_PARTS_LENGTH = BASE_DOMAIN.split('.').length;
// const VALID_BUSINESS_TYPES = new Set(['school', 'restaurant', 'salon']);

// export function middleware(request: NextRequest) {
//   const host = request.headers.get('host');
//   if (!host) return NextResponse.next(); // fail-safe

//   const [hostWithoutPort] = host.split(':'); // remove port
//   const hostParts = hostWithoutPort.split('.');
//   const subdomainParts = hostParts.slice(0, hostParts.length - BASE_PARTS_LENGTH);
//   const subLen = subdomainParts.length;

//   // 🟢 Case 1: Admin Panel — admin.test.school.lvh.me
//   if (subLen === 3) {
//     const [role, tenantSlug, businessType] = subdomainParts;

//     if (!VALID_BUSINESS_TYPES.has(businessType)) {
//       return new NextResponse('Invalid business type', { status: 404 });
//     }

//     if (role === 'admin') {
//       const originalPath = request.nextUrl.pathname;
//       const cleanPath = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;

//       const url = request.nextUrl.clone();
//       url.pathname = `/${businessType}/${tenantSlug}/admin/${cleanPath}`;

//       const response = NextResponse.rewrite(url);
//       response.headers.set('x-role', role);
//       response.headers.set('x-tenant-slug', tenantSlug);
//       response.headers.set('x-business-type', businessType);
//       return response;
//     }

//     // Optional: handle other roles like staging, preview, etc.
//   }

//   // 🔵 Case 2: Tenant Dashboard — test.school.lvh.me
//   if (subLen === 2) {
//     const [tenantSlug, businessType] = subdomainParts;

//     if (!VALID_BUSINESS_TYPES.has(businessType)) {
//       return new NextResponse('Invalid business type', { status: 404 });
//     }

//     const originalPath = request.nextUrl.pathname;
//     const cleanPath = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;

//     const url = request.nextUrl.clone();
//     url.pathname = `/${businessType}/${tenantSlug}/dashboard/${cleanPath}`;

//     const response = NextResponse.rewrite(url);
//     response.headers.set('x-tenant-slug', tenantSlug);
//     response.headers.set('x-business-type', businessType);
//     return response;
//   }

//   // 🟡 Case 3: Marketing/Public Page — school.lvh.me
//   if (subLen === 1) {
//     const businessType = subdomainParts[0];

//     if (!VALID_BUSINESS_TYPES.has(businessType)) {
//       return new NextResponse('Invalid business type', { status: 404 });
//     }

//     const url = request.nextUrl.clone();
//     url.pathname = `/${businessType}`;

//     const response = NextResponse.rewrite(url);
//     response.headers.set('x-business-type', businessType);
//     return response;
//   }

//   // ⚪ Case 4: Root domain (lvh.me) or unknown pattern — do nothing
//   return NextResponse.next();
// }

// // Optional: Matcher to ignore static files, etc.
// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt).*)'],
// };