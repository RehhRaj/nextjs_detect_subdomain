// frontend/src/app/(dashboard)/school/layout.tsx 
// // File: frontend/src/app/(dashboard)/school/layout.tsx

// import React from 'react';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import '../../globals.css'; // adjust path if needed

// // Import your shared layout components
// // import { Sidebar } from '@/components/layout/Sidebar';
// // import { Header } from '@/components/layout/Header';

// const inter = Inter({ subsets: ['latin'] });


// export default function SchoolDashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en"> ← ❌ REMOVE THIS
//       <body className={`${inter.className} bg-gray-50 text-gray-900`}> ← ❌ REMOVE THIS
//         <div className="flex min-h-screen">
//           <main className="flex-1 p-6">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }

// app/(dashboard)/school/layout.tsx

export default function SchoolDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      <h1> menu items rekh rj</h1>
       <div id="app"></div>
      <main className="flex-1 p-6">
        <h1> menu items</h1>
        {children}
      </main>
    </div>
  );
}
