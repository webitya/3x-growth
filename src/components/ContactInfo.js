"use client"

export default function ContactInfo() {
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
            Get In Touch
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
            Multiple ways to connect with our team and start your B2B marketing transformation.
          </p>
        </div>

        {/* Contact Methods */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            marginBottom: "80px",
          }}
          className="md:grid-cols-3"
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid #E5E7EB",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
              e.currentTarget.style.borderColor = "#1447E6"
              e.currentTarget.style.transform = "translateY(-8px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "#E5E7EB"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
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
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#1447E6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "12px",
              }}
            >
              Enterprise Email
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                marginBottom: "16px",
              }}
            >
              Get a detailed response within 24 hours
            </p>
            <a
              href="mailto:contact@3xgrowth.in"
              style={{
                color: "#1447E6",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              contact@3xgrowth.in
            </a>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid #E5E7EB",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
              e.currentTarget.style.borderColor = "#1447E6"
              e.currentTarget.style.transform = "translateY(-8px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "#E5E7EB"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
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
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#8B5CF6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "12px",
              }}
            >
              Business Line
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                marginBottom: "16px",
              }}
            >
              Speak directly with our strategy team
            </p>
            <a
              href="tel:+916200207379"
              style={{
                color: "#1447E6",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              +91 6200207379
            </a>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid #E5E7EB",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
              e.currentTarget.style.borderColor = "#1447E6"
              e.currentTarget.style.transform = "translateY(-8px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "#E5E7EB"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
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
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#3B82F6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "12px",
              }}
            >
              Connect on LinkedIn
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                marginBottom: "16px",
              }}
            >
              Follow our latest insights and updates
            </p>
            <a
              href="#"
              style={{
                color: "#1447E6",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              @3xgrowth
            </a>
          </div>
        </div>

        {/* Office Locations */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid #E5E7EB",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "24px",
            }}
            className="text-2xl md:text-3xl"
          >
            Our Location
          </h3>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6B7280",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Strategically located in the heart of India, serving clients globally with local expertise.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "300px" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "8px",
                }}
              >
                India Headquarters
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: "1.5",
                }}
              >
                D Block, Jayshree Green City
                <br />
                Argora, Ranchi
                <br />
                Jharkhand, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
