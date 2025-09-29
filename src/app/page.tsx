// file :- src/app/page.tsx
// import Image from "next/image";

// frontend/src/app/page.tsx
import { headers } from 'next/headers';

export default async function HomePage() {
  const headersList = await  headers();
  const tenantSlug =  headersList.get('x-tenant-slug');
  const businessType = headersList.get('x-business-type');

  if (!tenantSlug && !businessType) {
    return (
      <>
        <h1>--- file :- src/app/page.tsx</h1>
        <h1>Welcome to the Main Site   --- file :- src/app/page.tsx</h1>
        <p>This is the landing page at <code>lvh.me</code>.</p>
      </>
    );
  }

  if (!tenantSlug && businessType) {
    return (
      <>
        <h1>Welcome to the {businessType} Marketing Page</h1>
        <p>This is the public marketing page for <strong>{businessType}</strong> business type.</p>
      </>
    );
  }

  if (tenantSlug && businessType) {
    return (
      <>
        <h1>Welcome, Tenant "{tenantSlug}"!</h1>
        <h2>Your {businessType} Dashboard</h2>
        <p>This is your tenant-specific dashboard home page.</p>
      </>
    );
  }

  return (
    <>
      <h1>Unknown Access</h1>
      <p>Unable to determine your site context.</p>
    </>
  );
}
