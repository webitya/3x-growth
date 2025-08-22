"use client"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1F2937",
        color: "white",
        padding: "60px 0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Company Info */}
          <div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#1447E6",
                marginBottom: "16px",
              }}
            >
              3xGrowth
            </div>
            <p
              style={{
                color: "#D1D5DB",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              We Don't Chase Leads. We Create Markets. 15+ years of proven B2B Account-Based Marketing expertise
              delivering 3x-5x higher performance.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#9CA3AF")}
              >
                LinkedIn
              </a>
              <a
                href="#"
                style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#9CA3AF")}
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "white",
              }}
            >
              Quick Links
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="/"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Home
              </a>
              <a
                href="/about"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                About
              </a>
              <a
                href="/services"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Services
              </a>
              <a
                href="/projects"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Projects
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "white",
              }}
            >
              Services
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="/services"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Account-Based Marketing
              </a>
              <a
                href="/services"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Demand Generation
              </a>
              <a
                href="/services"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Content Strategy
              </a>
              <a
                href="/services"
                style={{
                  color: "#D1D5DB",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                onMouseOut={(e) => (e.target.style.color = "#D1D5DB")}
              >
                Strategic Consultation
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "white",
              }}
            >
              Contact
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "#D1D5DB",
              }}
            >
              <p>Email: hello@3xgrowth.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Global + India Coverage</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #374151",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "#9CA3AF",
              margin: 0,
            }}
          >
            © 2024 3xGrowth. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#9CA3AF")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#9CA3AF")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
