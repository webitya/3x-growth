"use client"

export default function GrowthModelSection() {
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
            The Awareness-First Growth Model
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
            This approach delivers 3x–5x higher performance than industry averages — because it's not about chasing
            everyone, it's about winning the right ones.
          </p>
        </div>

        {/* Three Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="md:grid-cols-3"
        >
          {/* Awareness */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
              border: "1px solid #E4EFFE",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#E4EFFE",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1447E6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "16px",
              }}
            >
              Awareness
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#6B7280",
              }}
            >
              We craft high-impact, research-led content that speaks directly to your ICP's priorities and challenges.
            </p>
          </div>

          {/* Reputation */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
              border: "1px solid #E4EFFE",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#DFD7F9",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#8B5CF6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "16px",
              }}
            >
              Reputation
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#6B7280",
              }}
            >
              We position your brand as a trusted authority — so sales conversations start on familiar, confident
              ground.
            </p>
          </div>

          {/* Conversion */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
              border: "1px solid #E4EFFE",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#DBEAFE",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#3B82F6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "16px",
              }}
            >
              Conversion
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#6B7280",
              }}
            >
              With trust established, we drive targeted, account-specific engagement that results in meetings with
              decision-makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
