// app/home/page.tsx
'use client';

import { useState } from 'react';

// Header component
function Header({ title }: { title?: string }) {
  return <h1>{title ?? 'Default title'}</h1>;
}

// HomePage component
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
