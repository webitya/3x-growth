"use client"

export default function ProjectsResults() {
  const metrics = [
    {
      number: "3x-5x",
      label: "Performance Improvement",
      description: "Average performance increase across all campaigns",
    },
    {
      number: "85%",
      label: "Meeting Acceptance Rate",
      description: "From targeted prospects and decision-makers",
    },
    {
      number: "40%",
      label: "Shorter Sales Cycles",
      description: "Through strategic trust-building and positioning",
    },
    {
      number: "92%",
      label: "Client Retention Rate",
      description: "Long-term partnerships built on proven results",
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
            Consistent Results Across Industries
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
            Our proven methodology delivers measurable results regardless of industry or market complexity.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "40px 24px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#E4EFFE"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#1447E6",
                  marginBottom: "12px",
                }}
                className="text-2xl md:text-3xl"
              >
                {metric.number}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "8px",
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: "1.4",
                }}
              >
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
