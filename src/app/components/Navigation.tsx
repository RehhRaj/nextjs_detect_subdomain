// app/components/Navigation.tsx

import { headers } from 'next/headers';

export default async function Navigation() {
  const headersList = await headers();
  const tenantSlug = headersList.get('x-tenant-slug');
  const businessType = headersList.get('x-business-type');

  return (
    <nav>
      {!tenantSlug && !businessType && <p>Main Site Menu file   app/components/Navigation.tsx </p>}
      {!tenantSlug && businessType && <p>Marketing Menu for file   app/components/Navigation.tsx  {businessType}</p>}
      {tenantSlug && businessType && <p>Tenant Dashboard Menu for   file   app/components/Navigation.tsx {tenantSlug}</p>}
    </nav>
  );
}
