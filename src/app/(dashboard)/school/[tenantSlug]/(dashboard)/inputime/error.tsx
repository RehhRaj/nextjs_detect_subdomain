// frontend/src/app/(dashboard)/school/[tenantSlug]/(dashboard)/inputime/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Inputime error:', error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong while loading the Inputime page.</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
