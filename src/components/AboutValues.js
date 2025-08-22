"use client"

export default function AboutValues() {
  const values = [
    {
      title: "Trust Over Tactics",
      description:
        "We believe sustainable B2B growth comes from earning trust, not exploiting loopholes or gaming algorithms.",
      icon: "🤝",
    },
    {
      title: "Quality Over Quantity",
      description:
        "We'd rather have 10 highly qualified prospects than 1000 unqualified leads. Every interaction should matter.",
      icon: "⭐",
    },
    {
      title: "Research Over Assumptions",
      description:
        "Every strategy, every campaign, every piece of content is backed by deep research into your market and buyers.",
      icon: "🔍",
    },
    {
      title: "Results Over Reports",
      description: "We measure success by meetings booked, deals closed, and revenue generated—not vanity metrics.",
      icon: "📈",
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
            Our Core Values
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
            These principles guide every decision we make and every campaign we execute.
          </p>
        </div>

        {/* Values Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="md:grid-cols-2"
        >
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                border: "1px solid #E5E7EB",
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
                  fontSize: "48px",
                  marginBottom: "20px",
                }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1F2937",
                  marginBottom: "16px",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
