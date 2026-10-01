import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  // Fake check, replace later with a real database lookup
  if (password !== "123456") {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 },
    );
  }

  return NextResponse.json({ ok: true });
}