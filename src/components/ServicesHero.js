"use client"

export default function ServicesHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #E4EFFE 0%, #DBEAFE 100%)",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(20, 71, 230, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(223, 215, 249, 0.3) 0%, transparent 50%)`,
        }}
      ></div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            lineHeight: "1.1",
            color: "#1F2937",
            marginBottom: "24px",
          }}
          className="text-4xl md:text-5xl lg:text-6xl"
        >
          Strategic B2B Marketing <span style={{ color: "#1447E6" }}>That Delivers Results</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#6B7280",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
          className="text-lg md:text-xl"
        >
          Our comprehensive suite of Account-Based Marketing services is designed to help you win your most valuable
          accounts and achieve sustainable growth.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact"
            style={{
              backgroundColor: "#1447E6",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(20, 71, 230, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0F3BD4"
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 30px rgba(20, 71, 230, 0.4)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#1447E6"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 20px rgba(20, 71, 230, 0.3)"
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
