"use client"
import { useState, useEffect } from "react"

export default function BlogEditor({ blog, isCreating, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "3xGrowth Team",
    image: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (blog && !isCreating) {
      setFormData({
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        category: blog.category || "",
        author: blog.author || "3xGrowth Team",
        image: blog.image || "",
      })
    }
  }, [blog, isCreating])

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim("-")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate slug from title
    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.slug.trim()) newErrors.slug = "Slug is required"
    if (!formData.excerpt.trim()) newErrors.excerpt = "Excerpt is required"
    if (!formData.content.trim()) newErrors.content = "Content is required"
    if (!formData.category.trim()) newErrors.category = "Category is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const url = isCreating ? "/api/blogs" : `/api/blogs/${blog.id}`
      const method = isCreating ? "POST" : "PUT"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: isCreating ? new Date().toISOString().split("T")[0] : blog.date,
        }),
      })

      if (response.ok) {
        onSave()
      } else {
        const errorData = await response.json()
        alert(errorData.error || "Failed to save blog post")
      }
    } catch (error) {
      console.error("Error saving blog:", error)
      alert("Error saving blog post")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      style={{
        backgroundColor: "#F9FAFB",
        minHeight: "calc(100vh - 80px)",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "8px",
              }}
              className="text-2xl md:text-3xl"
            >
              {isCreating ? "Create New Blog Post" : "Edit Blog Post"}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
              }}
            >
              {isCreating ? "Create a new blog post for your website" : "Edit the selected blog post"}
            </p>
          </div>
          <button
            onClick={onCancel}
            style={{
              backgroundColor: "#6B7280",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4B5563")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6B7280")}
          >
            ← Back to List
          </button>
        </div>

        {/* Form */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
            padding: "40px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "24px",
              }}
              className="lg:grid-cols-2"
            >
              {/* Title */}
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
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: errors.title ? "1px solid #EF4444" : "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                  onBlur={(e) => (e.target.style.borderColor = errors.title ? "#EF4444" : "#D1D5DB")}
                />
                {errors.title && <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.title}</p>}
              </div>

              {/* Slug */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Slug *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: errors.slug ? "1px solid #EF4444" : "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                  onBlur={(e) => (e.target.style.borderColor = errors.slug ? "#EF4444" : "#D1D5DB")}
                />
                {errors.slug && <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.slug}</p>}
              </div>

              {/* Category */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: errors.category ? "1px solid #EF4444" : "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                  onBlur={(e) => (e.target.style.borderColor = errors.category ? "#EF4444" : "#D1D5DB")}
                >
                  <option value="">Select category</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Case Study">Case Study</option>
                </select>
                {errors.category && (
                  <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.category}</p>
                )}
              </div>

              {/* Author */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
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

              {/* Image URL */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Featured Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
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

              {/* Excerpt */}
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
                  Excerpt *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Brief description of the blog post..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: errors.excerpt ? "1px solid #EF4444" : "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                  onBlur={(e) => (e.target.style.borderColor = errors.excerpt ? "#EF4444" : "#D1D5DB")}
                />
                {errors.excerpt && (
                  <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.excerpt}</p>
                )}
              </div>

              {/* Content */}
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
                  Content * (HTML supported)
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={15}
                  placeholder="Write your blog post content here. You can use HTML tags for formatting..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: errors.content ? "1px solid #EF4444" : "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    resize: "vertical",
                    fontFamily: "monospace",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1447E6")}
                  onBlur={(e) => (e.target.style.borderColor = errors.content ? "#EF4444" : "#D1D5DB")}
                />
                {errors.content && (
                  <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.content}</p>
                )}
              </div>

              {/* Actions */}
              <div
                style={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  gap: "16px",
                  justifyContent: "flex-end",
                  paddingTop: "24px",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <button
                  type="button"
                  onClick={onCancel}
                  style={{
                    backgroundColor: "white",
                    color: "#6B7280",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#F9FAFB"
                    e.target.style.borderColor = "#9CA3AF"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "white"
                    e.target.style.borderColor = "#D1D5DB"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? "#9CA3AF" : "#1447E6",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) e.target.style.backgroundColor = "#0F3BD4"
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) e.target.style.backgroundColor = "#1447E6"
                  }}
                >
                  {isSubmitting ? "Saving..." : isCreating ? "Create Post" : "Update Post"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
