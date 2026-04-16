<div
  style={{
    backgroundColor: "rgba(255,255,255,0.95)",
    borderBottom: "1px solid #e5e7eb",
    padding: "14px 24px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(8px)",
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
    {/* LEFT SIDE: LOGO + NAME */}
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <img
        src="/logo.png"
        alt="Innerflight Logo"
        style={{
          height: "40px",
          width: "auto",
          objectFit: "contain",
        }}
      />

      <div style={{ lineHeight: "1.1" }}>
        <div style={{ fontWeight: "700", fontSize: "18px" }}>
          Innerflight
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#666",
          }}
        >
          PRODUCTION CARGO
        </div>
      </div>
    </div>

    {/* RIGHT SIDE NAV */}
    <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
      <a href="#services" style={{ color: "#111", textDecoration: "none" }}>
        Services
      </a>
      <a href="#contact" style={{ color: "#111", textDecoration: "none" }}>
        Contact
      </a>
    </div>
  </div>
</div>
