"use client"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          budget: "",
          timeline: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            alignItems: "start",
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
              Start Your Strategic Consultation
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#6B7280",
                marginBottom: "32px",
              }}
            >
              Tell us about your business goals and challenges. We'll provide a customized strategy recommendation and
              discuss how our proven approach can help you achieve 3x-5x higher performance.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#E4EFFE",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#1447E6",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "4px",
                    }}
                  >
                    Free Strategy Session
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    No commitment required - just valuable insights
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#DFD7F9",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#8B5CF6",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "4px",
                    }}
                  >
                    Custom Recommendations
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    Tailored strategies based on your specific needs
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#DBEAFE",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#3B82F6",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "4px",
                    }}
                  >
                    Proven Results
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    15+ years of delivering 3x-5x performance improvements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              backgroundColor: "#F9FAFB",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid #E5E7EB",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "24px",
                }}
                className="sm:grid-cols-2"
              >
                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>

                <div style={{ gridColumn: "1 / -1" }} className="sm:col-span-1">
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Tell us about your goals and challenges *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                    placeholder="Describe your current marketing challenges, target accounts, and what success looks like for your business..."
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      backgroundColor: isSubmitting ? "#9CA3AF" : "#1447E6",
                      color: "white",
                      padding: "16px 32px",
                      borderRadius: "12px",
                      border: "none",
                      fontSize: "18px",
                      fontWeight: "600",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 20px rgba(20, 71, 230, 0.3)",
                    }}
                    onMouseOver={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = "#0F3BD4"
                        e.target.style.transform = "translateY(-2px)"
                        e.target.style.boxShadow = "0 8px 30px rgba(20, 71, 230, 0.4)"
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = "#1447E6"
                        e.target.style.transform = "translateY(0)"
                        e.target.style.boxShadow = "0 4px 20px rgba(20, 71, 230, 0.3)"
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Start My Strategy Session"}
                  </button>
                </div>
              </div>
            </form>

            {submitStatus === "success" && (
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  backgroundColor: "#D1FAE5",
                  border: "1px solid #10B981",
                  borderRadius: "8px",
                  color: "#065F46",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Thank you! We'll get back to you within 24 hours with a customized strategy recommendation.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  backgroundColor: "#FEE2E2",
                  border: "1px solid #EF4444",
                  borderRadius: "8px",
                  color: "#991B1B",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Something went wrong. Please try again or email us directly at hello@3xgrowth.com
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
