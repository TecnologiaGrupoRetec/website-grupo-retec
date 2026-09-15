import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const sessionCookie = cookies().get("admin_session");

  if (!sessionCookie || !sessionCookie.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const expectedUsernamesEnv = process.env.ADMIN_USERNAME;
  const sessionSecret = process.env.SESSION_SECRET;
  
  if (process.env.NODE_ENV === "production" && (!expectedUsernamesEnv || !sessionSecret)) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }

  const allowedUsernames = expectedUsernamesEnv 
    ? expectedUsernamesEnv.split(",").map((u) => u.trim()) 
    : ["admin"];

  const finalSecret = sessionSecret || "segredo-super-secreto-retec-2026";

  try {
    // Decodifica o token do cookie (formato base64 "usuario:segredo")
    const decodedToken = Buffer.from(sessionCookie.value, "base64").toString("utf-8");
    const [username, secret] = decodedToken.split(":");

    // Valida se o usuário está na lista permitida e se o segredo confere
    const isValidUser = allowedUsernames.includes(username);
    const isValidSecret = secret === finalSecret;

    if (isValidUser && isValidSecret) {
      return NextResponse.json({ authenticated: true });
    }
  } catch {
    // Se der erro ao decodificar o base64, token é inválido
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}