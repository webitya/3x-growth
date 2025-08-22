import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
