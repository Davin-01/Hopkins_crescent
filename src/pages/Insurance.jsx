import React from "react";
import { useState } from "react";

const partners = [
  { name: "NHIF / SHA", short: "NHIF", description: "National Health Insurance Fund", color: "#006B3C", bg: "#E6F4ED", domain: "nhif.or.ke" },
  { name: "Jubilee Insurance", short: "JUB", description: "Jubilee Health Insurance", color: "#CC2229", bg: "#FDECEA", domain: "jubileeinsurance.com" },
  { name: "CIC Group", short: "CIC", description: "CIC Insurance Group", color: "#E87722", bg: "#FEF3E7", domain: "cic.co.ke" },
  { name: "Britam", short: "BRT", description: "Britam Insurance Kenya", color: "#003DA5", bg: "#E6ECFA", domain: "britam.com" },
  { name: "Madison Insurance", short: "MAD", description: "Madison General Insurance", color: "#006B3C", bg: "#E6F4ED", domain: "madison.co.ke" },
  { name: "Equity Insurance", short: "EQT", description: "Equity Insurance Agency", color: "#CC2229", bg: "#FDECEA", domain: "equitybank.co.ke" },
  { name: "MUA Insurance", short: "MUA", description: "MUA Insurance (Kenya)", color: "#CC2229", bg: "#FDECEA", domain: "muakenya.com" },
  { name: "Heritage Insurance", short: "HER", description: "Heritage Insurance Company", color: "#003DA5", bg: "#E6ECFA", domain: "heritage.co.ke" },
  { name: "PACIS Insurance", short: "PAC", description: "PACIS Insurance Company", color: "#003DA5", bg: "#E6ECFA", domain: "pacisinsurance.com" },
  { name: "AAR Insurance", short: "AAR", description: "AAR Insurance Kenya", color: "#CC2229", bg: "#FDECEA", domain: "aar.co.ke" },
  { name: "GA Insurance", short: "GA", description: "GA Insurance Limited", color: "#CC2229", bg: "#FDECEA", domain: "gainsurance.co.ke" },
  { name: "APA Insurance", short: "APA", description: "APA Insurance Limited", color: "#003DA5", bg: "#E6ECFA", domain: "apainsurance.org" },
  { name: "Kenbright", short: "KBR", description: "Kenbright Insurance", color: "#003DA5", bg: "#E6ECFA", domain: "kenbright.co.ke" },
  { name: "First Assurance", short: "FA", description: "First Assurance Kenya", color: "#6B4C11", bg: "#F5EFE6", domain: "firstassurance.co.ke" },
  { name: "UAP Insurance", short: "UAP", description: "UAP Insurance Company", color: "#CC2229", bg: "#FDECEA", domain: "uap.co.ke" },
  { name: "Old Mutual", short: "OM", description: "Old Mutual Insurance", color: "#006B3C", bg: "#E6F4ED", domain: "oldmutual.co.ke" },
  { name: "Minet Kenya", short: "MNT", description: "Minet Risk & Insurance", color: "#CC2229", bg: "#FDECEA", domain: "minet.co.ke" },
  { name: "Kenyan Alliance", short: "KA", description: "Kenyan Alliance Insurance Est. 1915", color: "#003DA5", bg: "#E6ECFA", domain: "kenyanalliance.co.ke" },
  { name: "m-tiba", short: "MTB", description: "m-tiba by CarePay", color: "#006B3C", bg: "#E6F4ED", domain: "mtiba.com" },
  { name: "Kenya Defence Forces", short: "KDF", description: "KDF Medical Insurance Scheme", color: "#4A5B2F", bg: "#EEF1E8", domain: "mod.go.ke" },
  { name: "ACK Diocese", short: "ACK", description: "ACK Diocese of Mt. Kenya South", color: "#6B4C11", bg: "#F5EFE6", domain: "ackenya.org" },
  { name: "Nairobi Water", short: "NW", description: "Nairobi Water Company", color: "#003DA5", bg: "#E6ECFA", domain: "nairobiwater.co.ke" },
  { name: "Bata", short: "BAT", description: "Bata Shoe Company", color: "#CC2229", bg: "#FDECEA", domain: "bata.com" },
  { name: "Laser Insurance", short: "LAS", description: "Laser Insurance Limited", color: "#003DA5", bg: "#E6ECFA", domain: "laser.co.ke" },
  { name: "Kenya Revenue Authority", short: "KRA", description: "Kenya Revenue Authority", color: "#006B3C", bg: "#E6F4ED", domain: "kra.go.ke" },
];

function PartnerCard({ partner }) {
  const [imgSrc, setImgSrc] = useState(`https://logo.clearbit.com/${partner.domain}`);
  const [fallbackStage, setFallbackStage] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleImageError = () => {
    if (fallbackStage === 0) {
      setImgSrc(`https://icons.duckduckgo.com/ip3/${partner.domain}.ico`);
      setFallbackStage(1);
    } else {
      setImgSrc(null);
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "rgba(255,255,255,0.75)",
        border: hovered ? `1.5px solid ${partner.color}35` : "1.5px solid rgba(0,0,0,0.06)",
        borderRadius: 18,
        padding: "20px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 16px 36px ${partner.color}15, 0 4px 12px rgba(0,0,0,0.07)`
          : "0 2px 8px rgba(0,0,0,0.04)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: 62,
          height: 62,
          borderRadius: 14,
          background: partner.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
          padding: 8,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.12) rotate(-3deg)" : "scale(1)",
          border: `1px solid ${partner.color}20`,
          overflow: "hidden",
        }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${partner.name} logo`}
            onError={handleImageError}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        ) : (
          <span style={{ fontSize: partner.short.length > 3 ? 10 : 13, fontWeight: 800, color: partner.color, letterSpacing: "0.04em" }}>
            {partner.short}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: 12, fontWeight: 700, color: "#1A2744", margin: "0 0 3px", lineHeight: 1.3 }}>
        {partner.name}
      </h3>
      <p style={{ fontSize: 10, color: "#94A3B8", margin: "0 0 10px", lineHeight: 1.4 }}>
        {partner.description}
      </p>
      <span style={{ fontSize: 9, fontWeight: 700, background: "#E6F4ED", color: "#006B3C", padding: "3px 9px", borderRadius: 100, letterSpacing: "0.04em" }}>
        ✓ ACCEPTED
      </span>
    </div>
  );
}

export default function Insurance() {
  return (
    <section style={{
      fontFamily: "Georgia, 'Times New Roman', serif",
      background: "linear-gradient(160deg, #F0F4FF 0%, #FFFFFF 50%, #F0FAF5 100%)",
      minHeight: "100vh",
      padding: "60px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(0,61,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,61,165,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,61,165,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,107,60,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,61,165,0.08)", border: "1px solid rgba(0,61,165,0.15)", borderRadius: 100, padding: "6px 20px", marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#003DA5" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#003DA5" }}>
              Accepted Insurance Providers
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#0A1628", margin: "0 0 14px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Our Trusted{" "}
            <span style={{ background: "linear-gradient(135deg, #003DA5 0%, #006B3C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Insurance Partners
            </span>
          </h2>

          <p style={{ color: "#64748B", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            We work with Kenya's leading insurers so you can focus on your health, not the paperwork.
          </p>
        </div>

        {/* Partner Grid */}
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14, marginBottom: 48, listStyle: "none", padding: 0, margin: "0 0 48px" }}>
          {partners.map((p, i) => (
            <li key={i}>
              <PartnerCard partner={p} />
            </li>
          ))}
        </ul>

        {/* CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, #003DA5 0%, #0052CC 100%)",
          borderRadius: 24,
          padding: "36px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          boxShadow: "0 20px 50px rgba(0,61,165,0.28)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 5px" }}>
              Not sure if your insurance is accepted?
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, margin: 0 }}>
              Our billing team can verify your coverage instantly — no wait, no hassle.
            </p>
          </div>
          <a href="tel:+254748206580" style={{
            background: "#fff", color: "#003DA5", fontWeight: 800, fontSize: 14,
            padding: "13px 28px", borderRadius: 12, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(0,0,0,0.14)", flexShrink: 0,
          }}>
            📞 Call Us Now
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: 28, color: "#94A3B8", fontSize: 12, letterSpacing: "0.05em" }}>
          <strong style={{ color: "#1A2744" }}>{partners.length} insurance providers</strong> accepted · More being added regularly
        </p>
      </div>
    </section>
  );
}