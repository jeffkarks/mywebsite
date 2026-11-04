const WA = "https://wa.me/254712025981?text=Hello%20Lumo%20Traders%2C%20I%27m%20interested%20in%20your%20products";

const categories = [
  { name: "Paintings", c: "#b3121f", c2: "#7d0c16" },
  { name: "Bronze Sculptures", c: "#a8742f", c2: "#5e3c14" },
  { name: "Beaded Items", c: "#1b3a8c", c2: "#0f2257" },
  { name: "Metal Sculptures", c: "#4a4a4a", c2: "#1c1c1c" },
  { name: "Jewelry Boxes", c: "#d99a1e", c2: "#9a6a0c" },
  { name: "Candle Holders", c: "#b3121f", c2: "#d99a1e" },
  { name: "Wine Holders", c: "#1b3a8c", c2: "#7d0c16" },
  { name: "Maasai Shukas", c: "#b3121f", c2: "#1b3a8c" },
  { name: "Fridge Magnets", c: "#d99a1e", c2: "#b3121f" },
  { name: "Brass Bracelets & Necklaces", c: "#a8742f", c2: "#d99a1e" },
];

export default function Home() {
  return (
    <>
      <div className="bead" />
      <nav className="nav">
        <div className="nav-in">
          <a href="/" className="logo">Lumo Traders</a>
          <div className="links">
            <a href="#shop" className="hide-sm">Shop</a>
            <a href="#contact" className="hide-sm">Contact</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="eyebrow">Authentic Maasai Market Crafts</div>
        <h1>Art, beadwork and treasures from the heart of Kenya</h1>
        <p>Paintings, sculptures, shukas and gifts, handmade and chosen with care.</p>
        <div className="cta">
          <a href="#shop" className="btn btn-gold">Shop the Collection</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Chat on WhatsApp</a>
        </div>
      </header>
      <div className="bead" />

      <section className="section" id="shop">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-sub">Every piece tells a story of craft and culture.</p>
        <div className="grid">
          {categories.map((cat) => (
            <a href={WA} target="_blank" rel="noopener noreferrer" key={cat.name} className="card">
              <div className="card-art" style={{ ["--c" as string]: cat.c, ["--c2" as string]: cat.c2 }} />
              <div className="card-body">
                <h3>{cat.name}</h3>
                <span>Enquire →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section">
          <div>
            <h3>Handcrafted</h3>
            <p>Made by skilled artisans, so no two pieces are exactly alike.</p>
          </div>
          <div>
            <h3>Gifts and Décor</h3>
            <p>From fridge magnets to bronze sculptures, there is something for every home.</p>
          </div>
          <div>
            <h3>Easy Ordering</h3>
            <p>Message us on WhatsApp any time and we will help you choose.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Let's find your perfect piece</h2>
        <p>Send us a message with what you are looking for and we will reply with options and prices.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wa">Chat on WhatsApp</a>
      </section>

      <div className="bead" />
      <footer className="footer">© Lumo Traders. All rights reserved.</footer>

      <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wa wa-float">WhatsApp</a>
    </>
  );
}