import { NextResponse } from "next/server"
import { blogData } from "../../../data/blogData"

// GET all blogs
export async function GET() {
  try {
    return NextResponse.json(blogData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

// POST new blog
export async function POST(request) {
  try {
    const body = await request.json()

    // Generate new ID
    const newId = Math.max(...blogData.map((blog) => blog.id)) + 1

    const newBlog = {
      id: newId,
      ...body,
      date: body.date || new Date().toISOString().split("T")[0],
    }

    // In a real app, you would save to a database
    // For now, we'll just add to the array (this won't persist)
    blogData.push(newBlog)

    return NextResponse.json(newBlog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
