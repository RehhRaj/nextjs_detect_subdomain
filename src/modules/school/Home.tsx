// file src/modules/school/school/Home.tsx
// code of src/modules/school/Home.tsx
 'use client';

import { useParams } from 'next/navigation';

export default function SchoolHome() {
  const params = useParams();
  const tenantSlug = params.tenantSlug as string;

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold text-blue-600">
        Welcome to {tenantSlug}'s School Dashboard!
      </h2>

      <p className="mt-2 text-gray-700">
        This is the  component, rendered inside:
      </p>

      <pre className="mt-4 bg-gray-100 p-3 rounded-md text-sm">
{`src/app/(dashboard)/school/[tenantSlug]/page.tsx`}
      </pre>
    </div>
  );
}
