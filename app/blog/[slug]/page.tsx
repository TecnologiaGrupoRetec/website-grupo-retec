import { notFound } from "next/navigation";
import styles from "../blog.module.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Cta from "../../components/cta";
import Tag from "../../components/tag";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pannel from "@/app/components/pannel";
import { supabase } from "../../../lib/supabase";

export const dynamic = "force-dynamic";

interface BodyBlock {
  type: "paragraph" | "subtitle";
  text: string;
}

interface Post {
  slug: string;
  titulo: string;
  lead: string;
  tag: string;
  autor: string;
  data: string;
  imagem_principal: string;
  corpo_texto: BodyBlock[];
}

export default async function DynamicArticle({ params }: { params: { slug: string } }) {
  let post: Post | null = null;

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", params.slug)
      .maybeSingle();

    if (error) {
      console.error("Erro retornado pelo Supabase na página DynamicArticle:", error);
    } else if (data) {
      post = {
        slug: data.slug,
        titulo: data.titulo,
        lead: data.lead,
        tag: data.tag,
        autor: data.autor,
        data: data.data,
        imagem_principal: data.imagem_principal,
        corpo_texto: data.corpo_texto,
      };
    }
  } catch (err) {
    console.error("Erro ao carregar artigo na página DynamicArticle:", err);
  }

  if (!post) {
    notFound();
  }

  return (
    <React.Fragment>
      <Pannel />
      <div className={styles.page}>
        <Navbar activeTab="blog" />
        <main className={styles.articleContainer}>
          <section className={styles.article}>
            <Link className={styles.back} href="/blog">
              <Image src="/blog/arrow.png" alt="Voltar" width={60} height={60} />
            </Link>
            <article className={styles.content}>
              <header className={styles.header}>
                <Tag text={post.tag} />
                <h1 className={styles.title}>
                  {post.titulo}
                </h1>
                <div className={styles.articleDetails}>
                  <Image className={styles.authorImg} src="/blog/patrick.png" alt={post.autor} width={28} height={28} />
                  <span className={styles.authorName}>
                    {post.autor}
                  </span>
                  <span className={styles.date}>
                    {post.data}
                  </span>
                </div>
              </header>

              {/* Utiliza a tag img nativa para flexibilidade com caminhos locais de upload (/uploads/...) */}
              <img
                className={styles.img}
                src={post.imagem_principal}
                alt={post.titulo}
                style={{ width: "100%", height: "462", maxWidth: "800px", borderRadius: "8px" }}
              />

              {post.corpo_texto.map((block, index) => {
                if (block.type === "subtitle") {
                  return (
                    <h3 key={index} className={styles.subtitle}>
                      {block.text}
                    </h3>
                  );
                }
                return (
                  <p key={index} className={styles.text}>
                    {block.text}
                  </p>
                );
              })}
            </article>
            <Link className={styles.up} href="#">
              <Image src="/blog/arrow.png" alt="Voltar ao Topo" width={60} height={60} />
            </Link>
          </section>
        </main>
        <Cta />
        <Footer />
      </div>
    </React.Fragment>
  );
}
