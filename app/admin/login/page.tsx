"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../admin.module.scss";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Verifica se o usuário já possui sessão ativa
  useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => {
        if (res.ok) {
          router.push("/admin");
        }
      })
      .catch(() => { });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
      } else {
        setError(data.message || "Credenciais inválidas.");
      }
    } catch {
      setError("Erro de rede ao se conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>RETEC Admin</h1>
        <p>Acesse o painel para publicar no blog</p>

        {error && <div className={styles.errorMsg}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Colque seu usuário"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className={styles.btnPrimary} disabled={loading}>
            {loading ? "Entrando..." : "Entrar no Painel"}
          </button>
        </form>
      </div>
    </div>
  );
}
