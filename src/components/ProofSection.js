"use client"

export default function ProofSection() {
  const stats = [
    {
      number: "15+",
      label: "Years",
      description: "Proven expertise",
    },
    {
      number: "1,000+",
      label: "Campaigns",
      description: "Executed across industries",
    },
    {
      number: "3x–5x",
      label: "Results",
      description: "Outperforming industry averages",
    },
    {
      number: "Global + India",
      label: "Coverage",
      description: "Enterprise market coverage",
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
            Proof of Expertise
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "40px 20px",
                backgroundColor: "#F9FAFB",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#E4EFFE"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#1447E6",
                  marginBottom: "8px",
                }}
                className="text-2xl md:text-3xl lg:text-4xl"
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: "1.4",
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
