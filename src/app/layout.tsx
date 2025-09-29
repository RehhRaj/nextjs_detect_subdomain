// //  file frontend/src/app/layout.tsx
// import { headers } from 'next/headers';
// import React from 'react';

// export default async function RootLayout({ children }: { children: React.ReactNode }) {
//   const headersList = await headers();
//   const tenantSlug =  headersList.get('x-tenant-slug');
//   const businessType = headersList.get('x-business-type');

//   return (
//     <html lang="en">
//       <body>
//         <header>
//           <nav>
//             {/* Show different menus based on tenant/business */}
//             {!tenantSlug && !businessType && <p>Main Site Menu</p>}
//             {!tenantSlug && businessType && <p>Marketing Menu for {businessType}</p>}
//             {tenantSlug && businessType && <p>Tenant Dashboard Menu for {tenantSlug}</p>}
//           </nav>
//         </header>

//         <main>{children}</main>

//         <footer>
//           <p>© Your SaaS Company</p>
//         </footer>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx

// import React from 'react';
// import Navigation from './components/Navigation';


// // app/layout.tsx
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gray-50 text-gray-900`}>
//         <header>
//           <Navigation />
//         </header>

//         <main>{children}</main>

//         <footer>
//           <p>© Your SaaS Company</p>
//         </footer>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx

import './globals.css'; // Make sure global CSS is loaded here
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation'; // ← make sure this file exists

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your App',
  description: 'Multi-tenant SaaS app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header>
          <Navigation />
        </header>
        <h1>// app/layout.tsx</h1>
        <h1>"                             "</h1>
        <h1>Welcome to the Main Site   --- file :- src/app/page.tsx</h1>
        <main>{children}</main>
        <footer>
          <p>© Your SaaS Company</p>
        </footer>
      </body>
    </html>
  );
}
