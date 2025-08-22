"use client"

export default function NavbarDrawer({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 60,
        }}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "300px",
          backgroundColor: "white",
          zIndex: 70,
          padding: "24px",
          boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#6B7280",
          }}
        >
          ×
        </button>

        {/* Logo */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#1447E6",
            marginBottom: "40px",
          }}
        >
          3xGrowth
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <a
            href="/"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              padding: "12px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              padding: "12px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
            onClick={onClose}
          >
            About
          </a>
          <a
            href="/services"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              padding: "12px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
            onClick={onClose}
          >
            Services
          </a>
          <a
            href="/projects"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              padding: "12px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
            onClick={onClose}
          >
            Projects
          </a>
          <a
            href="/blogs"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              padding: "12px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
            onClick={onClose}
          >
            Blogs
          </a>
          <a
            href="/contact"
            style={{
              backgroundColor: "#1447E6",
              color: "white",
              padding: "16px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
            onClick={onClose}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  )
}
