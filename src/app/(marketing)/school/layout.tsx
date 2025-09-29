export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>School Marketing Site</h1>
        {/* Marketing-specific nav */}
      </header>
      <main>{children}</main>
      <footer>© School Marketing</footer>
    </>
  );
}
