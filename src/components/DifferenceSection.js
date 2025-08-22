"use client"

export default function DifferenceSection() {
  const differences = [
    {
      title: "Specialists, Not Generalists",
      description: "B2B ABM is our sole focus — not an add-on service.",
    },
    {
      title: "Research at the Core",
      description: "Every campaign is powered by deep-dive research into your market, competitors, and buyers.",
    },
    {
      title: "Global Perspective, Local Precision",
      description: "US, Europe, or Indian enterprise accounts — strategy tailored to cultural and business nuance.",
    },
    {
      title: "Revenue-Driven Metrics",
      description: "We align with growth goals — meetings and deals, not vanity metrics.",
    },
  ]

  return (
    <section
      style={{
        backgroundColor: "#F9FAFB",
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
            Why We're Different
          </h2>
        </div>

        {/* Differences Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="md:grid-cols-2"
        >
          {differences.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(20, 71, 230, 0.1)"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            padding: "60px 40px",
            backgroundColor: "rgba(20, 71, 230, 0.05)",
            borderRadius: "20px",
            border: "1px solid #E4EFFE",
          }}
        >
          <blockquote
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#1F2937",
              fontStyle: "italic",
              lineHeight: "1.4",
              maxWidth: "800px",
              margin: "0 auto",
            }}
            className="text-xl md:text-2xl lg:text-3xl"
          >
            "We're not here to help you play the game. We're here to help you change the game."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
