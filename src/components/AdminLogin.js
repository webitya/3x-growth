"use client"
import { useState } from "react"

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("adminAuth", "true")
        onLogin(true)
      } else {
        setError(data.error || "Invalid credentials")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #E4EFFE 0%, #DBEAFE 100%)",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "48px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1447E6",
              marginBottom: "8px",
            }}
          >
            3xGrowth
          </h1>
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
            }}
          >
            Admin Panel Access
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #E5E7EB",
                borderRadius: "12px",
                fontSize: "16px",
                transition: "all 0.2s",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
              onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              required
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #E5E7EB",
                borderRadius: "12px",
                fontSize: "16px",
                transition: "all 0.2s",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
              onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              required
            />
          </div>

          {error && (
            <div
              style={{
                background: "#FEE2E2",
                border: "1px solid #FECACA",
                color: "#DC2626",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#9CA3AF" : "#1447E6",
              color: "white",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => !loading && (e.target.style.background = "#1E40AF")}
            onMouseOut={(e) => !loading && (e.target.style.background = "#1447E6")}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
