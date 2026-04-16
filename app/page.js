export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111",
        backgroundColor: "#f7f7f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "14px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src="/logo.png"
            alt="Innerflight Logo"
            style={{
              height: "52px",
              objectFit: "contain",
            }}
          />

          <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <a href="#services" style={{ color: "#111", textDecoration: "none" }}>
              Services
            </a>
            <a href="#contact" style={{ color: "#111", textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1f2937 100%)",
          color: "white",
          padding: "90px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "999px",
              fontSize: "14px",
              marginBottom: "24px",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            Global freight support for production, events, and time-sensitive cargo
          </div>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.05",
              margin: "0 0 20px",
              maxWidth: "800px",
            }}
          >
            Innerflight Production Cargo
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.5",
              maxWidth: "760px",
              color: "rgba(255,255,255,0.88)",
              margin: "0 0 32px",
            }}
          >
            Reliable international cargo coordination for productions, touring,
            live events, and complex logistics deadlines.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#services"
              style={{
                backgroundColor: "#ffffff",
                color: "#111",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              Explore Services
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              ["Fast Response", "Support for urgent and time-critical cargo moves."],
              ["Global Reach", "International coordination across major freight lanes."],
              ["Production Focused", "Built around events, media, touring, and show logistics."],
              ["Trusted Handling", "Clear communication, documentation, and shipment visibility."],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "10px", fontSize: "20px" }}>
                  {title}
                </h3>
                <p style={{ margin: 0, color: "#555", lineHeight: "1.6" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: "40px 24px 70px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ maxWidth: "720px", marginBottom: "28px" }}>
            <p
              style={{
                color: "#8a6b2d",
                fontWeight: "bold",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "13px",
                marginBottom: "12px",
              }}
            >
              Services
            </p>
            <h2 style={{ fontSize: "40px", margin: "0 0 14px" }}>
              Cargo support built for demanding schedules
            </h2>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.7", margin: 0 }}>
              We help move important shipments with precision, speed, and dependable
              communication from booking through final delivery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              {
                title: "Air Freight Logistics",
                text: "Priority air cargo solutions for urgent and high-value shipments.",
              },
              {
                title: "International Cargo Handling",
                text: "Cross-border coordination with a focus on timing, routing, and accuracy.",
              },
              {
                title: "Customs & Documentation",
                text: "Support for paperwork, shipment details, and compliance-sensitive moves.",
              },
              {
                title: "Production & Event Logistics",
                text: "Freight planning for touring, events, activations, and production deadlines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#fff",
                  padding: "28px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  border: "1px solid #ececec",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "22px" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: "#555", lineHeight: "1.7" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "70px 24px",
          backgroundColor: "#111827",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#c9a96e",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "13px",
                marginBottom: "12px",
              }}
            >
              Why Innerflight
            </p>
            <h2 style={{ fontSize: "38px", margin: "0 0 14px" }}>
              Logistics support with clarity and control
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.7", margin: 0 }}>
              We focus on responsive coordination, practical problem-solving, and dependable
              execution for clients who cannot afford delays.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "26px",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "2" }}>
              <li>Time-sensitive shipment planning</li>
              <li>Global route coordination</li>
              <li>Clear client communication</li>
              <li>Support for complex cargo requirements</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "70px 24px 90px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "22px",
            padding: "38px",
            boxShadow: "0 12px 34px rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              color: "#8a6b2d",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            Contact
          </p>
          <h2 style={{ fontSize: "36px", margin: "0 0 14px" }}>
            Let’s talk about your next shipment
          </h2>
          <p style={{ color: "#555", fontSize: "18px", lineHeight: "1.7", marginBottom: "24px" }}>
            For booking inquiries, production logistics support, or freight coordination,
            reach out directly.
          </p>

          <div style={{ fontSize: "18px" }}>
            <strong>Email:</strong> info@innerflightproductioncargo.com
          </div>
        </div>
      </section>
    </main>
  );
}
