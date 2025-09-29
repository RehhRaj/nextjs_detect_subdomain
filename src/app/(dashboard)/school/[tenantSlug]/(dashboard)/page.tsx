//frontend/src/app/(dashboard)/school/[tenantSlug]/dashboard/page.tsx

/*
'use client'
import { useParams } from 'next/navigation'

export default async function TenantDashboardPage(params: { tenantSlug: any; }) {

  console.log(params,  "      this is p params  params params")
  const { tenantSlug } = params; // No need to await params

  // Example: fetch tenant-specific data if needed
  // const data = await fetchTenantData(tenantSlug);

  return (
    <>
      <h1>
        Dashboard for tenant: frontend/src/app/(dashboard)/school/[tenantSlug]/dashboard/page.tsx — {tenantSlug}
      </h1>
      <p>Show tenant-specific data here.</p>
    </>
  );
}

*/

// 'use client'

// app/(dashboard)/school/[tenantSlug]/dashboard/page.tsx

export default async function TenantDashboardPage() {
 

  return (
    <>
      <h1>
        Dashboard for tenant: 
      </h1>
      <p>Show tenant-specific data here.   file path app/(dashboard)/school/[tenantSlug]/dashboard/page.tsx</p>
    </>
  );
}
