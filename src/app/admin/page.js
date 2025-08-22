"use client"
import { useState, useEffect } from "react"
import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import AdminPanel from "../../components/AdminPanel"
import AdminLogin from "../../components/AdminLogin"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth")
    setIsAuthenticated(authStatus === "true")
    setLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    setIsAuthenticated(false)
  }

  if (loading) {
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
        <div style={{ color: "#1447E6", fontSize: "18px" }}>Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div
          style={{
            padding: "20px",
            textAlign: "right",
            background: "rgba(255, 255, 255, 0.8)",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              background: "#DC2626",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#B91C1C")}
            onMouseOut={(e) => (e.target.style.background = "#DC2626")}
          >
            Logout
          </button>
        </div>
        <AdminPanel />
      </main>
      <Footer />
    </div>
  )
}
