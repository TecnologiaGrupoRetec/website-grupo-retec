# Guia de Design e Estrutura de Páginas - Grupo RETEC

Este documento define o padrão de design, tipografia, cores, tamanhos e estrutura de componentes do website do Grupo RETEC. Ele serve como referência para manter a consistência visual em todas as páginas do site (Home, Sobre Nós, Obras, Blog, etc.).

---

## 1. Cores e Variáveis de Estilo

Os estilos utilizam tanto variáveis Sass (`variables.scss`) quanto variáveis CSS nativas (`index.module.scss`). A tabela abaixo descreve o papel de cada cor:

### Paleta Principal (Sass Variables)
| Variável | Valor Hex | Uso Recomendado |
| :--- | :--- | :--- |
| `$primary` | `#002D5D` | Azul escuro principal da marca (títulos em páginas claras) |
| `$secondary` | `#3AA0DB` | Azul claro de destaque (eyebrows, links, botões) |
| `$detail` | `#74B88E` | Verde detalhe (badges, checkmarks, destaques secundários) |
| `$neutral` | `#999999` | Cinza neutro padrão |
| `$neutral-light` | `#D9D9D9` | Cinza claro para linhas de divisão e bordas suaves |
| `$surface` | `#F2F3FA` | Fundo cinza-azulado suave para seções secundárias |
| `$text-neutral` | `#6F6F6F` | Cinza focado em legibilidade de textos secundários |
| `$white` | `#FFFFFF` | Fundos claros de páginas e textos em seções escuras |
| `$black` | `#000000` | Sombras, sobreposições e contrastes máximos |

### Variáveis CSS Globais (Definidas em `.page`)
*   `--navy`: `#0f2854` (Fundo de seções escuras `.sectionDark` e Navbar)
*   `--blue`: `#1c4d8d` (Cor de realce azul royal)
*   `--soft`: `#f3f6fb` (Cor de fundo suave de cards e seções)
*   `--text`: `#1f2937` (Cor padrão do texto principal do corpo da página)
*   `--muted`: `#5d6677` (Cor para textos secundários e descrições)
*   `--page-max`: `1280px` (Largura máxima do container de conteúdo)

---

## 2. Tipografia

A fonte primária do projeto é a **Montserrat** (carregada via Google Fonts), mas a folha de estilos principal também herda **Roboto** e fontes genéricas sem serifa.

### Hierarquia de Títulos e Textos
| Elemento / Classe | Tamanho (Font Size) | Peso (Weight) | Uso |
| :--- | :--- | :--- | :--- |
| `.heroTitle` | `clamp(2.75rem, 5vw, 3.5rem)` | 700 (Bold) | Título principal do Hero |
| `.sectionTitle` | `clamp(2.25rem, 4vw, 3rem)` | 700 (Bold) | Títulos principais das seções |
| `.eyebrow` | `16px` | 600 (Semi-Bold) | Subtítulo pequeno acima dos títulos das seções |
| `.heroText` | `18px` | 400 (Regular) | Descrição do Hero |
| `.sectionText` | `18px` | 400 (Regular) | Descrições e parágrafos de seções |
| Títulos de Cards | `22px` a `24px` | 700 (Bold) | Títulos internos dos cards (`.processTitle`, etc.) |
| Texto de Cards | `15px` a `16px` | 400 (Regular) | Descrições menores internas de cards |

*Nota: O uso de `clamp` garante um comportamento de escalabilidade de texto totalmente responsivo (mobile-friendly).*

---

## 3. Estrutura Padrão de uma Página (Layout)

Toda página no App Router do Next.js deve seguir a seguinte estrutura de marcação HTML e classes:

```tsx
import styles from "./suapagina.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PaginaExemplo() {
  return (
    <div className={styles.page}>
      <Navbar activeTab="identificador_aba" />

      <main>
        {/* Bloco Hero (Banner Principal) */}
        <section className={styles.hero}>
          {/* Imagem de Fundo do Banner */}
          <Image
            className={styles.heroImage}
            src="/caminho/imagem.jpg"
            alt="Descrição Visual"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>Título Impactante da Página</h1>
                <p className={styles.heroText}>Texto curto de introdução da página.</p>
              </div>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#conteudo">Ação Principal</a>
                <a className={styles.secondaryButton} href="#contato">Ação Secundária</a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Padrão (Exemplo: Seção Clara) */}
        <section className={styles.section} id="conteudo">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Categoria</p>
              <h2 className={styles.sectionTitle}>Título da Seção Clara</h2>
              <p className={styles.sectionText}>Explicação ou descrição da seção.</p>
            </div>
            
            {/* Conteúdo em Grid (Cards) */}
            <div className={styles.gridExemplo}>
              {/* Cards vão aqui */}
            </div>
          </div>
        </section>

        {/* Seção Escura (Exemplo: Seção Dark) */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.onDark}`}>
              <p className={styles.eyebrow}>Destaque</p>
              <h2 className={styles.sectionTitle}>Título da Seção Escura</h2>
              <p className={styles.sectionText}>Explicação sobre fundo escuro navy.</p>
            </div>
            
            {/* Conteúdo da Seção Escura */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 4. Cards e Efeitos Interativos

Para manter os padrões de qualidade visual e as micro-interações do site, utilize os seguintes efeitos CSS nos cards:

### Efeito de Flutuação e Sombra (Hover State)
Os cards devem flutuar e revelar sombras dinâmicas ao passar o mouse. Abaixo está a implementação ideal:

```scss
// Card Claro sobre Fundo Escuro (exemplo: Cards de Processo)
.processCard {
  background: $white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: 
    transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 400ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--blue);
  }
}

// Card com borda superior destaque (exemplo: Cards de Destaque)
.highlightCard {
  background: var(--soft);
  border-top: 4px solid var(--navy);
  box-shadow: 0 4px 12px rgba(15, 40, 84, 0.04);
  transition: 
    transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1),
    border-top-color 400ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 36px rgba(15, 40, 84, 0.12);
    border-top-color: var(--blue);
  }
}
```

---

## 5. Diretrizes de Responsividade

O site segue regras fluidas de adaptação a dispositivos móveis. Respeite as seguintes quebras de mídia (`media queries`):

*   **Até 1180px**: Layouts de timeline mudam de horizontal para vertical. Ajustes gerais de padding.
*   **Até 980px**: A Navbar colapsa no menu hambúrguer para mobile.
*   **Até 900px**: Ajuste de alturas mínimas do Hero (`min-height: 560px` com `padding-top: 176px`) e redimensionamento de colunas de grid de 4 para 1 coluna nas tabelas principais.
*   **Até 640px**: Fontes principais reduzem proporcionalmente (ex: `.heroTitle` vai para `2.3rem` e `.sectionTitle` para `2rem`) para evitar quebras de linhas indesejadas em telas de celulares pequenos.
