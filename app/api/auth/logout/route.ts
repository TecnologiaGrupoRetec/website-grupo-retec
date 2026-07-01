import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Exclui o cookie definindo maxAge para 0
    cookies().set("admin_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });

    return NextResponse.json({ success: true, message: "Logout bem-sucedido!" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro ao fazer logout." },
      { status: 500 }
    );
  }
}
