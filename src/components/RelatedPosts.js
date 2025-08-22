"use client"
import { blogData } from "../data/blogData"

export default function RelatedPosts({ currentSlug }) {
  // Get related posts (excluding current post)
  const relatedPosts = blogData.filter((post) => post.slug !== currentSlug).slice(0, 3)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (relatedPosts.length === 0) {
    return null
  }

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
              fontSize: "42px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
            className="text-3xl md:text-4xl"
          >
            Related Articles
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6B7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Continue exploring our latest insights and strategies in B2B marketing.
          </p>
        </div>

        {/* Related Posts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
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

        {/* View All Posts CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <a
            href="/blogs"
            style={{
              backgroundColor: "#1447E6",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(20, 71, 230, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0F3BD4"
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 30px rgba(20, 71, 230, 0.4)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#1447E6"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 20px rgba(20, 71, 230, 0.3)"
            }}
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
