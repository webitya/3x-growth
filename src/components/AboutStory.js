"use client"

export default function AboutStory() {
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
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Content */}
          <div>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
              className="text-3xl md:text-4xl"
            >
              Our Story: From Lead Chasers to Market Creators
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4B5563",
                marginBottom: "24px",
              }}
            >
              When we started 3xGrowth over 15 years ago, the B2B marketing landscape was dominated by spray-and-pray
              tactics. Everyone was chasing leads, flooding inboxes, and competing on volume rather than value.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#4B5563",
                marginBottom: "24px",
              }}
            >
              We saw a different path. Instead of chasing prospects, we focused on earning their trust. Instead of
              interrupting their day, we became part of their research process. Instead of selling to everyone, we
              specialized in winning the accounts that matter most.
            </p>

            <div
              style={{
                backgroundColor: "#DFD7F9",
                padding: "24px",
                borderRadius: "12px",
                borderLeft: "4px solid #1447E6",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1F2937",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "The best B2B marketing doesn't feel like marketing at all. It feels like valuable insight delivered at
                exactly the right moment."
              </p>
            </div>
          </div>

          {/* Right Content - Mission Card */}
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
                marginBottom: "20px",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#4B5563",
                marginBottom: "24px",
              }}
            >
              To transform how B2B companies approach their most valuable prospects by building trust, reputation, and
              strategic relationships that drive sustainable growth.
            </p>

            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1F2937",
                marginBottom: "16px",
              }}
            >
              What Sets Us Apart:
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                <span style={{ color: "#4B5563", fontSize: "14px" }}>Deep industry specialization in B2B ABM</span>
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
                <span style={{ color: "#4B5563", fontSize: "14px" }}>Research-driven approach to every campaign</span>
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
                <span style={{ color: "#4B5563", fontSize: "14px" }}>Global perspective with local market nuance</span>
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
                <span style={{ color: "#4B5563", fontSize: "14px" }}>Revenue-focused metrics and accountability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
