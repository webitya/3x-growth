"use client"

export default function BlogsHero() {
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
          textAlign: "center",
        }}
      >
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
          B2B Marketing <span style={{ color: "#1447E6" }}>Insights & Strategies</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#6B7280",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
          className="text-lg md:text-xl"
        >
          Discover proven strategies, industry insights, and actionable advice from our 15+ years of B2B marketing
          expertise.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "8px",
              }}
            >
              Weekly
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              New Content
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "8px",
              }}
            >
              Expert
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Insights
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "8px",
              }}
            >
              Actionable
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Strategies
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
