import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password, course } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  //  this is mock testisting, replace with a real database insert later.
  console.log("New signup:", { email, course });

  return NextResponse.json({ ok: true }, { status: 201 });
}