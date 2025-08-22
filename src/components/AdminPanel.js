"use client"
import { useState, useEffect } from "react"
import BlogEditor from "./BlogEditor"

export default function AdminPanel() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs")
      if (response.ok) {
        const data = await response.json()
        setBlogs(data)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== id))
      } else {
        alert("Failed to delete blog post")
      }
    } catch (error) {
      console.error("Error deleting blog:", error)
      alert("Error deleting blog post")
    }
  }

  const handleEdit = (blog) => {
    setSelectedBlog(blog)
    setIsEditing(true)
    setIsCreating(false)
  }

  const handleCreate = () => {
    setSelectedBlog(null)
    setIsCreating(true)
    setIsEditing(false)
  }

  const handleSave = () => {
    fetchBlogs()
    setIsEditing(false)
    setIsCreating(false)
    setSelectedBlog(null)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setIsCreating(false)
    setSelectedBlog(null)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          fontSize: "18px",
          color: "#6B7280",
        }}
      >
        Loading...
      </div>
    )
  }

  if (isEditing || isCreating) {
    return <BlogEditor blog={selectedBlog} isCreating={isCreating} onSave={handleSave} onCancel={handleCancel} />
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
          maxWidth: "1200px",
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
              Blog Management
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
              }}
            >
              Manage your blog posts and content
            </p>
          </div>
          <button
            onClick={handleCreate}
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
            + New Blog Post
          </button>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            marginBottom: "40px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#1447E6",
                marginBottom: "8px",
              }}
            >
              {blogs.length}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Total Posts
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#10B981",
                marginBottom: "8px",
              }}
            >
              {blogs.length}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Published
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#F59E0B",
                marginBottom: "8px",
              }}
            >
              0
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Drafts
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#8B5CF6",
                marginBottom: "8px",
              }}
            >
              {new Set(blogs.map((blog) => blog.category)).size}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              Categories
            </div>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "24px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1F2937",
                margin: 0,
              }}
            >
              All Blog Posts
            </h2>
          </div>

          {blogs.length === 0 ? (
            <div
              style={{
                padding: "60px 24px",
                textAlign: "center",
                color: "#6B7280",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                }}
              >
                📝
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                No blog posts yet
              </h3>
              <p style={{ marginBottom: "24px" }}>Create your first blog post to get started.</p>
              <button
                onClick={handleCreate}
                style={{
                  backgroundColor: "#1447E6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Create First Post
              </button>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB" }}>
                    <th
                      style={{
                        padding: "16px 24px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      Title
                    </th>
                    <th
                      style={{
                        padding: "16px 24px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      Category
                    </th>
                    <th
                      style={{
                        padding: "16px 24px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      Date
                    </th>
                    <th
                      style={{
                        padding: "16px 24px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        padding: "16px 24px",
                        textAlign: "right",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      style={{
                        borderBottom: "1px solid #F3F4F6",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <td style={{ padding: "16px 24px" }}>
                        <div>
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#1F2937",
                              marginBottom: "4px",
                            }}
                          >
                            {blog.title}
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: "#6B7280",
                              maxWidth: "300px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {blog.excerpt}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <span
                          style={{
                            backgroundColor: "#E4EFFE",
                            color: "#1447E6",
                            padding: "4px 12px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {blog.category}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "16px 24px",
                          fontSize: "14px",
                          color: "#6B7280",
                        }}
                      >
                        {formatDate(blog.date)}
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <span
                          style={{
                            backgroundColor: "#D1FAE5",
                            color: "#065F46",
                            padding: "4px 12px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Published
                        </span>
                      </td>
                      <td style={{ padding: "16px 24px", textAlign: "right" }}>
                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                          <button
                            onClick={() => window.open(`/blogs/${blog.slug}`, "_blank")}
                            style={{
                              backgroundColor: "#F3F4F6",
                              color: "#6B7280",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              border: "none",
                              fontSize: "12px",
                              fontWeight: "500",
                              cursor: "pointer",
                              transition: "background-color 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#E5E7EB")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#F3F4F6")}
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEdit(blog)}
                            style={{
                              backgroundColor: "#1447E6",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              border: "none",
                              fontSize: "12px",
                              fontWeight: "500",
                              cursor: "pointer",
                              transition: "background-color 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#0F3BD4")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#1447E6")}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            style={{
                              backgroundColor: "#EF4444",
                              color: "white",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              border: "none",
                              fontSize: "12px",
                              fontWeight: "500",
                              cursor: "pointer",
                              transition: "background-color 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#DC2626")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#EF4444")}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
