// File: frontend/src/app/(dashboard)/school/[tenantSlug]/features/timetable/page.tsx

// app/(dashboard)/school/[tenantSlug]/features/timetable/page.tsx

'use client';

import { useParams } from 'next/navigation';

export default function TimetablePage() {
  const { tenantSlug } = useParams();

  return (
    <div className="p-6">
      <h1>frontend/src/app/(dashboard)/school/[tenantSlug]/dashboard/          features/          timetable/page.tsx </h1>
      <h1 className="text-2xl font-bold mb-4">
        Timetable for tenant: <span className="text-blue-600">{tenantSlug}</span>
      </h1>
      {/* Your timetable UI goes here */}
    </div>
  );
}
