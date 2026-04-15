export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "900px",
      margin: "auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Innerflight Production Cargo
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Reliable, efficient, and global cargo solutions tailored to your needs.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Our Services</h2>
      <ul>
        <li>✈️ Air Freight Logistics</li>
        <li>🌍 International Cargo Handling</li>
        <li>📦 Customs & Documentation Support</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h2>Contact</h2>
      <p>Email: info@innerflightproductioncargo.com</p>

      <footer style={{ marginTop: "40px", fontSize: "14px", color: "#777" }}>
        © {new Date().getFullYear()} Innerflight Production Cargo
      </footer>
    </main>
  );
}
