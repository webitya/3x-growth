"use client"

export default function AboutTeam() {
  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
            className="text-3xl md:text-4xl lg:text-5xl"
          >
            Global Expertise, Local Understanding
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#6B7280",
              maxWidth: "800px",
              margin: "0 auto",
            }}
            className="text-lg md:text-xl"
          >
            Our team combines deep B2B marketing expertise with nuanced understanding of global markets and local
            business cultures.
          </p>
        </div>

        {/* Team Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            marginBottom: "80px",
          }}
          className="md:grid-cols-3"
        >
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "12px",
              }}
            >
              50+
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1F2937",
                marginBottom: "8px",
              }}
            >
              Team Members
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
              }}
            >
              Across strategy, creative, and analytics
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "12px",
              }}
            >
              25+
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1F2937",
                marginBottom: "8px",
              }}
            >
              Industries Served
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
              }}
            >
              From SaaS to manufacturing
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "12px",
              }}
            >
              15+
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1F2937",
                marginBottom: "8px",
              }}
            >
              Countries
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
              }}
            >
              Global reach with local expertise
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            backgroundColor: "rgba(20, 71, 230, 0.05)",
            borderRadius: "20px",
            border: "1px solid #E4EFFE",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "16px",
            }}
            className="text-2xl md:text-3xl"
          >
            Ready to Work Together?
          </h3>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6B7280",
              marginBottom: "32px",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Let's discuss how our proven approach can help you win your most valuable accounts and achieve 3x-5x higher
            performance.
          </p>
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
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
