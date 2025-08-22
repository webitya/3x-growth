import { NextResponse } from "next/server"
import { blogData } from "../../../../data/blogData"

// GET single blog
export async function GET(request, { params }) {
  try {
    const blog = blogData.find((blog) => blog.id === Number.parseInt(params.id))

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}

// PUT update blog
export async function PUT(request, { params }) {
  try {
    const body = await request.json()
    const blogIndex = blogData.findIndex((blog) => blog.id === Number.parseInt(params.id))

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Update the blog
    blogData[blogIndex] = {
      ...blogData[blogIndex],
      ...body,
      id: Number.parseInt(params.id), // Ensure ID doesn't change
    }

    return NextResponse.json(blogData[blogIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}

// DELETE blog
export async function DELETE(request, { params }) {
  try {
    const blogIndex = blogData.findIndex((blog) => blog.id === Number.parseInt(params.id))

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Remove the blog
    const deletedBlog = blogData.splice(blogIndex, 1)[0]

    return NextResponse.json({ message: "Blog deleted successfully", blog: deletedBlog })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
  }
}
