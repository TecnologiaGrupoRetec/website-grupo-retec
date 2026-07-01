import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const sessionCookie = cookies().get("admin_session");

  if (!sessionCookie || !sessionCookie.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const expectedUsername = process.env.ADMIN_USERNAME;
  const sessionSecret = process.env.SESSION_SECRET;
  
  if (process.env.NODE_ENV === "production" && (!expectedUsername || !sessionSecret)) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }

  const finalUsername = expectedUsername || "admin";
  const finalSecret = sessionSecret || "segredo-super-secreto-retec-2026";
  const expectedToken = Buffer.from(`${finalUsername}:${finalSecret}`).toString("base64");

  if (sessionCookie.value === expectedToken) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
