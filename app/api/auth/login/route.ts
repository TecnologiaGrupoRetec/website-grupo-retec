import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const expectedUsernamesEnv = process.env.ADMIN_USERNAME;
    const expectedPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;

    if (process.env.NODE_ENV === "production" && (!expectedUsernamesEnv || !expectedPassword || !sessionSecret)) {
      console.error("ERRO: Variáveis de ambiente de autenticação ausentes no servidor.");
      return NextResponse.json(
        { success: false, message: "Erro de configuração de segurança no servidor." },
        { status: 500 }
      );
    }

    // Pega os usuários do .env, separa por vírgula e remove espaços extras
    const allowedUsernames = expectedUsernamesEnv 
      ? expectedUsernamesEnv.split(",").map((u) => u.trim()) 
      : ["admin"];

    const finalPassword = expectedPassword || "admin-retec-2026";
    const finalSecret = sessionSecret || "segredo-super-secreto-retec-2026";

    // Verifica se o usuário digitado está na lista e se a senha confere
    const isValidUser = allowedUsernames.includes(username);

    if (isValidUser && password === finalPassword) {
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