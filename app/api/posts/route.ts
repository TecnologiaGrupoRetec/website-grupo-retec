import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { supabase } from "../../../lib/supabase";

export const dynamic = "force-dynamic";

function isAuthenticated() {
  const sessionCookie = cookies().get("admin_session");
  if (!sessionCookie || !sessionCookie.value) return false;

  const expectedUsername = process.env.ADMIN_USERNAME || "admin";
  const sessionSecret = process.env.SESSION_SECRET || "segredo-super-secreto-retec-2026";
  const expectedToken = Buffer.from(`${expectedUsername}:${sessionSecret}`).toString("base64");

  return sessionCookie.value === expectedToken;
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^\w\s-]/g, "") // remove caracteres especiais
    .replace(/[\s_]+/g, "-") // substitui espaços/underscores por hífens
    .replace(/^-+|-+$/g, ""); // remove hífens do início/fim
}

// GET: Retorna os posts do Supabase
export async function GET() {
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      throw error;
    }

    const formattedPosts = (posts || []).map((post: {
      slug: string;
      titulo: string;
      lead: string;
      tag: string;
      autor: string;
      data: string;
      imagem_principal: string;
      corpo_texto: unknown;
      criado_em: Date;
    }) => ({
      slug: post.slug,
      titulo: post.titulo,
      lead: post.lead,
      tag: post.tag,
      autor: post.autor,
      data: post.data,
      imagem_principal: post.imagem_principal,
      corpo_texto: post.corpo_texto,
      criado_em: post.criado_em,
    }));

    return NextResponse.json(formattedPosts, {
      headers: {
        "Cache-Control": "no-store, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Erro ao ler os posts do Supabase:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao ler os posts do banco de dados." },
      { status: 500 }
    );
  }
}

// POST: Cria um novo post dinâmico no Supabase
export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Acesso não autorizado." },
      { status: 401 }
    );
  }

  try {
    const { titulo, lead, tag, autor, data, imagem_principal, corpo_texto } = await request.json();

    const camposAusentes: string[] = [];
    if (!titulo) camposAusentes.push("titulo");
    if (!lead) camposAusentes.push("lead");
    if (!tag) camposAusentes.push("tag");
    if (!autor) camposAusentes.push("autor");
    if (!data) camposAusentes.push("data");
    if (!imagem_principal) camposAusentes.push("imagem_principal");
    if (!corpo_texto) camposAusentes.push("corpo_texto");

    if (camposAusentes.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Campos obrigatórios ausentes: ${camposAusentes.join(", ")}.`
        },
        { status: 400 }
      );
    }

    const slug = slugify(titulo);

    // Verificar se já existe slug duplicado no Supabase
    const { data: existingPost, error: checkError } = await supabase
      .from("posts")
      .select("slug")
      .eq("slug", slug)
      .maybeSingle();

    if (checkError) {
      throw checkError;
    }

    if (existingPost) {
      return NextResponse.json(
        { success: false, message: "Já existe uma publicação com este título (slug duplicado)." },
        { status: 409 }
      );
    }

    // Inserir no Supabase
    const { data: newPost, error: insertError } = await supabase
      .from("posts")
      .insert([
        {
          slug,
          titulo,
          lead,
          tag,
          autor,
          data,
          imagem_principal,
          corpo_texto,
        }
      ])
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Invalida o cache do Next.js/Vercel imediatamente
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);

    revalidatePath("/sitemap.xml");
    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Erro ao criar post no Supabase:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao salvar a postagem no banco de dados." },
      { status: 500 }
    );
  }
}

// DELETE: Exclui um post dinâmico do Supabase pelo slug
export async function DELETE(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Acesso não autorizado." },
      { status: 401 }
    );
  }

  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "O slug do post é obrigatório." },
        { status: 400 }
      );
    }

    // Exclui no Supabase
    const { error: deleteError } = await supabase
      .from("posts")
      .delete()
      .eq("slug", slug);

    if (deleteError) {
      throw deleteError;
    }

    // Invalida o cache do Next.js/Vercel imediatamente
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);

    revalidatePath("/sitemap.xml");
    return NextResponse.json({ success: true, message: "Postagem excluída com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar post no Supabase:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao excluir a postagem do banco de dados." },
      { status: 500 }
    );
  }
}
