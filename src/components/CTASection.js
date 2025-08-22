"use client"

export default function CTASection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1447E6 0%, #0F3BD4 100%)",
        padding: "100px 0",
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
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
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
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "white",
            marginBottom: "24px",
            lineHeight: "1.2",
          }}
          className="text-3xl md:text-4xl lg:text-5xl"
        >
          Win Your Most Valuable Accounts
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.9)",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
          className="text-lg md:text-xl"
        >
          Ready to transform your B2B marketing approach? Let's discuss how our proven ABM strategies can deliver 3x-5x
          higher performance for your business.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact"
            style={{
              backgroundColor: "white",
              color: "#1447E6",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#F3F4F6"
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            Start Your Strategy Session
          </a>

          <a
            href="/services"
            style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              e.target.style.borderColor = "white"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent"
              e.target.style.borderColor = "rgba(255, 255, 255, 0.3)"
            }}
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
