"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.scss";

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
  criado_em: string;
}

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  // Estados do Formulário
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [tag, setTag] = useState("Saúde");
  const [author, setAuthor] = useState("Patrick Galletti");
  const [date, setDate] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [bodyBlocks, setBodyBlocks] = useState<BodyBlock[]>([
    { type: "paragraph", text: "" }
  ]);

  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Preenche a data de publicação automaticamente com o dia atual formatado
  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("pt-BR"); // Formato DD/MM/YYYY
    setDate(formatted);
  }, []);

  // Verifica permissão ao carregar e busca posts
  useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => {
        if (!res.ok) {
          router.push("/admin/login");
        } else {
          setAuthorized(true);
          fetchPosts();
        }
      })
      .catch(() => {
        router.push("/admin/login");
      });
  }, [router]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (e) {
      console.error("Erro ao carregar posts:", e);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (e) {
      console.error("Erro ao deslogar:", e);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setUploadingImage(true);
    setMessage({ type: "", text: "" });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMainImage(data.url);
      } else {
        setMessage({ type: "error", text: data.message || "Erro ao subir imagem." });
      }
    } catch {
      setMessage({ type: "error", text: "Erro na conexão ao subir imagem." });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleAddBlock = (type: "paragraph" | "subtitle") => {
    setBodyBlocks([...bodyBlocks, { type, text: "" }]);
  };

  const handleRemoveBlock = (index: number) => {
    const updated = [...bodyBlocks];
    updated.splice(index, 1);
    setBodyBlocks(updated);
  };

  const handleBlockChange = (index: number, text: string) => {
    const updated = [...bodyBlocks];
    updated[index].text = text;
    setBodyBlocks(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const filteredBlocks = bodyBlocks.filter((b) => b.text.trim() !== "");
    if (filteredBlocks.length === 0) {
      setMessage({ type: "error", text: "Escreva pelo menos um parágrafo para o seu post." });
      setLoading(false);
      return;
    }

    if (!mainImage) {
      setMessage({ type: "error", text: "Envie uma imagem de capa para o post." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: title,
          lead,
          tag,
          autor: author,
          data: date,
          imagem_principal: mainImage,
          corpo_texto: filteredBlocks,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: "success", text: "Matéria publicada no blog com sucesso!" });
        // Limpa formulário
        setTitle("");
        setLead("");
        setMainImage("");
        setBodyBlocks([{ type: "paragraph", text: "" }]);
        fetchPosts();
      } else {
        setMessage({ type: "error", text: data.message || "Erro ao publicar matéria." });
      }
    } catch {
      setMessage({ type: "error", text: "Erro ao tentar publicar matéria." });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm("Confirmar exclusão desta matéria? Ela desaparecerá do blog.")) return;

    try {
      const res = await fetch("/api/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Matéria excluída com sucesso!" });
        fetchPosts();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.message || "Erro ao excluir." });
      }
    } catch {
      setMessage({ type: "error", text: "Erro na conexão ao excluir." });
    }
  };

  if (!authorized) {
    return <div className={styles.emptyState}>Carregando painel de controle...</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.navbar}>
        <img src="/logo-since-white-no-bg.svg" alt="Logo Retec" className={styles.logo} style={{ width: "150px", height: "auto" }} />
        <div className={styles.userInfo}>
          <span>Logado como: <strong>Administrador</strong></span>
          <button className={styles.btnDanger} onClick={handleLogout} style={{ padding: "6px 12px", fontSize: "12px" }}>
            Sair do Painel
          </button>
        </div>
      </header>

      <main className={styles.content}>
        {/* Esquerda: Formulário de criação */}
        <section className={styles.formCard}>
          <h2 className={styles.sectionTitle}>Cadastrar Post</h2>

          {message.text && (
            <div className={message.type === "error" ? styles.errorMsg : styles.successMsg}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Título do Artigo</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Climatização de alta performance em hospitais"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lead">Resumo da Listagem (Lead)</label>
              <textarea
                id="lead"
                value={lead}
                onChange={(e) => setLead(e.target.value)}
                placeholder="Insira um pequeno resumo explicativo que aparecerá no card inicial"
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className={styles.formGroup}>
                <label htmlFor="tag">Categoria (Tag)</label>
                <select id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
                  <option value="Saúde">Saúde</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Eficiência">Eficiência</option>
                  <option value="Sustentabilidade">Sustentabilidade</option>
                  <option value="Corporativo">Corporativo</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Data de Publicação</label>
                <input
                  type="text"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className={styles.formGroup}>
                <label htmlFor="author">Autor</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Imagem de Destaque</label>
                <div className={styles.fileInputWrapper}>
                  <label htmlFor="image-file" className={styles.fileBtn}>
                    {uploadingImage ? "Enviando arquivo..." : "Selecionar Imagem"}
                  </label>
                  <input
                    type="file"
                    id="image-file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                  />
                  {mainImage && (
                    <div className={styles.imagePreview}>
                      <img src={mainImage} alt="Pré-visualização da imagem de capa" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Editor estruturado de blocos de texto */}
            <div className={styles.bodyBlocksContainer}>
              <label>Conteúdo da Matéria (Adicione parágrafos ou subtítulos)</label>

              {bodyBlocks.map((block, index) => (
                <div key={index} className={styles.blockItem}>
                  <div className={styles.blockHeader}>
                    <span>{block.type === "paragraph" ? "Parágrafo de Texto" : "Subtítulo de Seção"}</span>
                    {bodyBlocks.length > 1 && (
                      <button type="button" onClick={() => handleRemoveBlock(index)}>
                        Remover Bloco
                      </button>
                    )}
                  </div>
                  <textarea
                    value={block.text}
                    onChange={(e) => handleBlockChange(index, e.target.value)}
                    placeholder={
                      block.type === "paragraph"
                        ? "Escreva aqui o conteúdo deste parágrafo..."
                        : "Escreva aqui o texto do subtítulo da seção..."
                    }
                    required
                  />
                </div>
              ))}

              <div className={styles.addBlockButtons}>
                <button type="button" className={styles.btnSecondary} onClick={() => handleAddBlock("paragraph")} style={{ flex: 1 }}>
                  + Adicionar Parágrafo
                </button>
                <button type="button" className={styles.btnSecondary} onClick={() => handleAddBlock("subtitle")} style={{ flex: 1 }}>
                  + Adicionar Subtítulo
                </button>
              </div>
            </div>

            <button type="submit" className={styles.btnPrimary} disabled={loading || uploadingImage}>
              {loading ? "Publicando Artigo..." : "Publicar Matéria"}
            </button>
          </form>
        </section>

        {/* Direita: Lista de publicações dinâmicas existentes */}
        <section className={styles.postsListCard}>
          <h2 className={styles.sectionTitle}>Publicações Ativas (Admin)</h2>

          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              Nenhum post criado pelo admin ainda. Publique um no formulário!
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.slug} className={styles.postItem}>
                <div className={styles.postInfo}>
                  <h3>{post.titulo}</h3>
                  <span>{post.data} | Categoria: {post.tag}</span>
                </div>
                <button className={styles.btnDanger} onClick={() => handleDeletePost(post.slug)}>
                  Excluir
                </button>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
