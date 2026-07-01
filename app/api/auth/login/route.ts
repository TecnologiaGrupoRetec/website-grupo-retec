import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const expectedUsername = process.env.ADMIN_USERNAME;
    const expectedPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;

    if (process.env.NODE_ENV === "production" && (!expectedUsername || !expectedPassword || !sessionSecret)) {
      console.error("ERRO: Variáveis de ambiente de autenticação ausentes no servidor.");
      return NextResponse.json(
        { success: false, message: "Erro de configuração de segurança no servidor." },
        { status: 500 }
      );
    }

    const finalUsername = expectedUsername || "admin";
    const finalPassword = expectedPassword || "admin-retec-2026";
    const finalSecret = sessionSecret || "segredo-super-secreto-retec-2026";

    if (username === finalUsername && password === finalPassword) {
      const sessionToken = Buffer.from(`${username}:${finalSecret}`).toString("base64");

      // Define o cookie seguro HTTP-only
      cookies().set("admin_session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 2, // 2 horas
        path: "/",
      });

      return NextResponse.json({ success: true, message: "Login bem-sucedido!" });
    }

    return NextResponse.json(
      { success: false, message: "Usuário ou senha incorretos." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
