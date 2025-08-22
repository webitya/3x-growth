"use client"

export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We start with deep-dive research into your market, competitors, and ideal customer profile to build a foundation for success.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Based on our research, we develop a comprehensive ABM strategy tailored to your specific goals and market dynamics.",
    },
    {
      number: "03",
      title: "Campaign Execution",
      description:
        "We execute multi-channel campaigns with precision, ensuring every touchpoint is optimized for maximum impact.",
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description:
        "We continuously monitor, analyze, and optimize performance to drive better results and scale successful initiatives.",
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
            Our Process
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#6B7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
            className="text-lg md:text-xl"
          >
            A proven methodology that delivers consistent results across industries and markets.
          </p>
        </div>

        {/* Process Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="md:grid-cols-2"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                border: "1px solid #E5E7EB",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-8px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.05)"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "40px",
                  backgroundColor: "#1447E6",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1F2937",
                  marginBottom: "16px",
                  marginTop: "20px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
