// frontend/src/app/(dashboard)/school/[tenantSlug]/(dashboard)/inputime/page.tsx

import Client_UTR_Inputime from './ClientUTR';

export default function InputimePage() {
  console.log('[Server] InputimePage rendered');

  return (
    <div>
      <h1>Inputime for</h1>
      <Client_UTR_Inputime title="Title from page  rekh rj" />
    </div>
  );
}
