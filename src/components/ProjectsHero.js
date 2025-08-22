"use client"

export default function ProjectsHero() {
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
          Proven Results Across <span style={{ color: "#1447E6" }}>Industries & Markets</span>
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
          Explore our successful B2B marketing campaigns that have delivered exceptional results for ambitious companies
          across the globe.
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
              1000+
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Successful Campaigns
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
              25+
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Industries Served
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
              15+
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Countries Reached
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
