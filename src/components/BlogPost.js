"use client"

export default function BlogPost({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <article>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #E4EFFE 0%, #DBEAFE 100%)",
          padding: "80px 0",
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
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              marginBottom: "32px",
              fontSize: "14px",
              color: "#6B7280",
            }}
          >
            <a
              href="/blogs"
              style={{
                color: "#1447E6",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Blog
            </a>
            <span style={{ margin: "0 8px" }}>→</span>
            <span>{post.category}</span>
          </nav>

          {/* Category Badge */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#1447E6",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "24px",
            }}
          >
            {post.category}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              lineHeight: "1.1",
              color: "#1F2937",
              marginBottom: "24px",
            }}
            className="text-3xl md:text-4xl lg:text-5xl"
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "32px",
              fontSize: "16px",
              color: "#6B7280",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1447E6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                3x
              </div>
              <span style={{ fontWeight: "500" }}>{post.author}</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#4B5563",
              fontWeight: "500",
            }}
            className="text-lg md:text-xl"
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          backgroundColor: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Featured Image */}
          <div
            style={{
              marginBottom: "60px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Article Content */}
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#374151",
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div
            style={{
              marginTop: "80px",
              padding: "40px",
              backgroundColor: "#F9FAFB",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "16px",
              }}
            >
              Found this helpful?
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                marginBottom: "24px",
              }}
            >
              Share this article with your network and help others discover proven B2B marketing strategies.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  backgroundColor: "#1447E6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0F3BD4")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1447E6")}
              >
                Share on LinkedIn
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#1447E6",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "2px solid #1447E6",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#1447E6"
                  e.target.style.color = "white"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white"
                  e.target.style.color = "#1447E6"
                }}
              >
                Share on Twitter
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div
            style={{
              marginTop: "60px",
              padding: "60px 40px",
              background: "linear-gradient(135deg, #1447E6 0%, #0F3BD4 100%)",
              borderRadius: "20px",
              textAlign: "center",
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
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
              }}
            ></div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "16px",
                }}
                className="text-2xl md:text-3xl"
              >
                Ready to Transform Your B2B Marketing?
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "32px",
                  maxWidth: "500px",
                  margin: "0 auto 32px",
                }}
              >
                Let's discuss how our proven strategies can help you achieve 3x-5x higher performance.
              </p>
              <a
                href="/contact"
                style={{
                  backgroundColor: "white",
                  color: "#1447E6",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#F3F4F6"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                Start Your Strategy Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
