"use client"

export default function TrustSection() {
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
            We Earn Trust Before We Generate Demand.
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
            In B2B, the race isn't to see who gets to the prospect first — it's to see who earns their trust first.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Content */}
          <div>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4B5563",
                marginBottom: "24px",
              }}
            >
              Too many vendors see lead generation as a numbers game. We see it as a reputation game. Because in complex
              B2B deals, decisions aren't made in inboxes — they're made in boardrooms, often after months of quiet
              research, peer recommendations, and reputation checks.
            </p>

            <div
              style={{
                backgroundColor: "#DFD7F9",
                padding: "24px",
                borderRadius: "12px",
                borderLeft: "4px solid #1447E6",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1F2937",
                  margin: 0,
                }}
              >
                This is where we lead.
              </p>
            </div>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4B5563",
              }}
            >
              Over the last 15+ years, we've delivered 1,000+ campaigns for some of the most ambitious B2B brands in
              India and overseas — not by flooding pipelines with unqualified names, but by strategically building
              awareness, influence, and demand within the accounts that matter most.
            </p>
          </div>

          {/* Right Content - Stats Card */}
          <div
            style={{
              backgroundColor: "rgba(228, 239, 254, 0.5)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid #E4EFFE",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Strategy Session Benefits
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#1447E6",
                    borderRadius: "50%",
                  }}
                ></div>
                <span style={{ color: "#4B5563", fontSize: "16px" }}>ABM Playbooks</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#1447E6",
                    borderRadius: "50%",
                  }}
                ></div>
                <span style={{ color: "#4B5563", fontSize: "16px" }}>ICP Alignment</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#1447E6",
                    borderRadius: "50%",
                  }}
                ></div>
                <span style={{ color: "#4B5563", fontSize: "16px" }}>Reputation Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
