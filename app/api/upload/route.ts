import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { put } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";

function isAuthenticated() {
  const sessionCookie = cookies().get("admin_session");
  if (!sessionCookie || !sessionCookie.value) return false;

  const expectedUsername = process.env.ADMIN_USERNAME;
  const sessionSecret = process.env.SESSION_SECRET;

  // Em produção, se não estiver configurado, invalida a sessão
  if (process.env.NODE_ENV === "production" && (!expectedUsername || !sessionSecret)) {
    return false;
  }

  const finalUsername = expectedUsername || "admin";
  const finalSecret = sessionSecret || "segredo-super-secreto-retec-2026";
  const expectedToken = Buffer.from(`${finalUsername}:${finalSecret}`).toString("base64");

  return sessionCookie.value === expectedToken;
}

export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Acesso não autorizado." },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Nenhum arquivo de imagem foi enviado." },
        { status: 400 }
      );
    }

    // FALLBACK LOCAL: Se estiver em desenvolvimento e não possuir o token da Vercel configurado, salva localmente.
    // Isso garante que o projeto continue rodando perfeitamente offline / localmente.
    if (process.env.NODE_ENV !== "production" && !process.env.BLOB_READ_WRITE_TOKEN) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileExt = path.extname(file.name);
      const fileNameWithoutExt = path.basename(file.name, fileExt)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-");
        
      const uniqueFileName = `${Date.now()}-${fileNameWithoutExt}${fileExt}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      await fs.mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, uniqueFileName);
      await fs.writeFile(filePath, new Uint8Array(buffer));

      const fileUrl = `/uploads/${uniqueFileName}`;
      return NextResponse.json({ success: true, url: fileUrl });
    }

    // FLUXO DE PRODUÇÃO (Vercel Blob): Envia a imagem diretamente para a nuvem da Vercel
    const blob = await put(file.name, file, {
      access: "public",
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    console.error("Erro no processamento do upload:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao processar o upload da imagem." },
      { status: 500 }
    );
  }
}
