"use client"

export default function ServicesOffering() {
  const services = [
    {
      title: "Account-Based Marketing",
      description:
        "Strategic ABM campaigns that target your most valuable prospects with personalized, research-driven content and multi-channel engagement.",
      features: ["ICP Development", "Account Research", "Personalized Campaigns", "Multi-channel Orchestration"],
      icon: "🎯",
    },
    {
      title: "Demand Generation",
      description:
        "Build awareness and generate qualified demand through strategic content marketing, thought leadership, and reputation building.",
      features: ["Content Strategy", "Thought Leadership", "Lead Nurturing", "Marketing Automation"],
      icon: "📈",
    },
    {
      title: "Strategic Consultation",
      description:
        "Get expert guidance on your B2B marketing strategy, from market positioning to campaign optimization and growth planning.",
      features: ["Strategy Development", "Market Analysis", "Competitive Intelligence", "Growth Planning"],
      icon: "💡",
    },
    {
      title: "Content & Creative",
      description:
        "Research-backed content that speaks directly to your buyers' challenges and positions your brand as a trusted authority.",
      features: ["Research-Led Content", "Executive Positioning", "Case Studies", "Sales Enablement"],
      icon: "✍️",
    },
  ]

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
            Our Services
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
            Comprehensive B2B marketing solutions designed to drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#F9FAFB",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "white"
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-8px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB"
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1F2937",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#6B7280",
                  marginBottom: "24px",
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#1447E6",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span
                      style={{
                        color: "#4B5563",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
