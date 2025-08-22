"use client"
import { blogData } from "../data/blogData"

export default function BlogsList() {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
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
            Latest Articles
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
            Stay ahead with the latest trends and strategies in B2B Account-Based Marketing.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {blogData.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: "#F9FAFB",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "white"
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(20, 71, 230, 0.1)"
                e.currentTarget.style.borderColor = "#1447E6"
                e.currentTarget.style.transform = "translateY(-8px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB"
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.borderColor = "#E5E7EB"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {/* Featured Image */}
              <div
                style={{
                  height: "200px",
                  backgroundColor: "#E4EFFE",
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    backgroundColor: "#1447E6",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "16px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                    fontSize: "14px",
                    color: "#6B7280",
                  }}
                >
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{formatDate(post.date)}</span>
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1F2937",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  <a
                    href={`/blogs/${post.slug}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#1447E6")}
                    onMouseOut={(e) => (e.target.style.color = "#1F2937")}
                  >
                    {post.title}
                  </a>
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#6B7280",
                    marginBottom: "20px",
                  }}
                >
                  {post.excerpt}
                </p>

                <a
                  href={`/blogs/${post.slug}`}
                  style={{
                    color: "#1447E6",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#0F3BD4")}
                  onMouseOut={(e) => (e.target.style.color = "#1447E6")}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            padding: "60px 40px",
            backgroundColor: "rgba(20, 71, 230, 0.05)",
            borderRadius: "20px",
            border: "1px solid #E4EFFE",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "16px",
            }}
            className="text-2xl md:text-3xl"
          >
            Stay Updated
          </h3>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6B7280",
              marginBottom: "32px",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Get the latest B2B marketing insights and strategies delivered directly to your inbox every week.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "12px 16px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                fontSize: "16px",
                backgroundColor: "white",
              }}
            />
            <button
              style={{
                backgroundColor: "#1447E6",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0F3BD4")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1447E6")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
