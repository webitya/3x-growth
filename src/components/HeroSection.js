"use client"

export default function HeroSection() {
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
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Content */}
          <div>
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
              We Don't Chase Leads. <span style={{ color: "#1447E6" }}>We Create Markets.</span>
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.6",
                color: "#6B7280",
                marginBottom: "40px",
                maxWidth: "600px",
              }}
              className="text-lg md:text-xl"
            >
              For 15+ years, we've redefined how B2B companies win their most valuable accounts — with Account-Based
              Marketing built on insight, reputation, and trust.
            </p>

            <div
              style={{
                display: "flex",
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
                Book a Strategic Consultation
              </a>

              <a
                href="/about"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "#1447E6",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "600",
                  border: "2px solid #1447E6",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#1447E6"
                  e.target.style.color = "white"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
                  e.target.style.color = "#1447E6"
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "400px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(20, 71, 230, 0.1)",
              }}
              className="w-80 h-80 md:w-96 md:h-96"
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "#1447E6",
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                3x-5x
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1F2937",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
                Higher Performance
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                Than industry averages with our awareness-first approach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
