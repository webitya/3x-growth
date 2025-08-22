"use client"
import { useState } from "react"
import NavbarDrawer from "./NavbarDrawer"

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #E4EFFE",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1447E6",
              textDecoration: "none",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              3xGrowth
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              gap: "32px",
              alignItems: "center",
            }}
            className="md:flex"
          >
            <a
              href="/"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#374151")}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#374151")}
            >
              About
            </a>
            <a
              href="/services"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#374151")}
            >
              Services
            </a>
            <a
              href="/projects"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#374151")}
            >
              Projects
            </a>
            <a
              href="/blogs"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1447E6")}
              onMouseOut={(e) => (e.target.style.color = "#374151")}
            >
              Blogs
            </a>
            <a
              href="/contact"
              style={{
                backgroundColor: "#1447E6",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0F3BD4")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1447E6")}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            style={{
              display: "block",
              padding: "8px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            className="md:hidden"
          >
            <div
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#1447E6",
                margin: "3px 0",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#1447E6",
                margin: "3px 0",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                width: "24px",
                height: "3px",
                backgroundColor: "#1447E6",
                margin: "3px 0",
                borderRadius: "2px",
              }}
            ></div>
          </button>
        </div>
      </nav>

      <NavbarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
