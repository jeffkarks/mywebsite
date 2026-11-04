const products = [
  { name: "Beaded Necklace", price: 1500, color: "#c1121f" },
  { name: "Shuka Blanket", price: 2500, color: "#1d4e9e" },
  { name: "Beaded Sandals", price: 1200, color: "#e9a820" },
  { name: "Wooden Mask", price: 3000, color: "#2b2b2b" },
];

export default function Home() {
  return (
    <div style={{ background: "#fff8ec", color: "#2b2b2b", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <header style={{ background: "#c1121f", color: "white", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "6px solid #1d4e9e" }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Soko ya Maasai</h1>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="/" style={{ color: "white" }}>Home</a>
          <a href="/login" style={{ color: "white" }}>Login</a>
        </nav>
      </header>

      <section style={{ textAlign: "center", padding: "56px 24px", background: "#1d4e9e", color: "white" }}>
        <h2 style={{ fontSize: 34, margin: 0 }}>Authentic Maasai Crafts</h2>
        <p style={{ maxWidth: 480, margin: "12px auto 0" }}>
          Handmade beadwork, shukas and carvings, straight from the market to you.
        </p>
      </section>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <h2>Featured Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "white", border: "2px solid #e9a820", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ height: 120, background: p.color }} />
              <div style={{ padding: 12 }}>
                <h3 style={{ margin: "0 0 4px" }}>{p.name}</h3>
                <p style={{ margin: 0 }}>KSh {p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: 24, background: "#2b2b2b", color: "#e9a820" }}>
        © Soko ya Maasai
      </footer>
    </div>
  );
}