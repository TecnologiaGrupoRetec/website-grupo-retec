# Guia de Design e Estrutura de Páginas - Grupo RETEC

Este documento define o padrão de design, tipografia, cores, tamanhos e estrutura de componentes do website do Grupo RETEC. Ele serve como referência para manter a consistência visual em todas as páginas do site (Home, Sobre Nós, Obras, Blog, etc.).

---

## 1. Cores e Variáveis de Estilo

Os estilos do site utilizam variáveis Sass (`variables.scss`), variáveis CSS nativas (definidas nos módulos `.module.scss` sob a classe `.page`) e cores utilitárias/funcionais específicas para manter a identidade visual do Grupo RETEC de forma consistente.

### 1.1. Paleta Principal (Sass Variables - `variables.scss`)
| Variável | Valor Hex | Nome Visual | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `$primary` | `#002D5D` | Azul Institucional RETEC | Azul escuro principal da marca (títulos e elementos em páginas claras) |
| `$secondary` | `#3AA0DB` | Azul Sky / Cyan Destaque | Azul claro de destaque (eyebrows, links, números em cards escuros, botões) |
| `$detail` | `#74B88E` | Verde Detalhe | Verde suave para badges, checkmarks e destaques secundários |
| `$neutral` | `#999999` | Cinza Neutro | Cinza intermediário para elementos secundários e placeholders |
| `$neutral-light` | `#D9D9D9` | Cinza Claro | Linhas de divisão, bordas suaves e separadores |
| `$surface` | `#F2F3FA` | Superfície Cinza-Azulada | Fundo suave para seções secundárias, cards e contêineres |
| `$text-neutral` | `#6F6F6F` | Cinza Texto Legibilidade | Cinza focado em legibilidade para descrições e subtextos |
| `$white` | `#FFFFFF` | Branco Puro | Fundos claros de páginas, cards e textos sobre fundos escuros |
| `$black` | `#000000` | Sombras / Contrastes | Sombras, sobreposições (overlays) e contrastes máximos |

### 1.2. Variáveis CSS Globais Nativas (Definidas em `.page`)
| Variável | Valor / Código | Nome Visual / Papel | Uso no Layout |
| :--- | :--- | :--- | :--- |
| `--navy` | `#0f2854` | RETEC Dark Navy | Fundo de seções escuras (`.sectionDark`), Navbar, Hero e botões primários |
| `--blue` | `#1c4d8d` | RETEC Royal Blue | Cor de realce azul royal para botões de CTA, links e estados hover |
| `--soft` | `#f3f6fb` | Soft Background | Cor de fundo suave de cards claros e seções alternadas |
| `--text` | `#1f2937` | Dark Charcoal / Slate | Cor padrão do texto principal do corpo da página |
| `--muted` | `#5d6677` | Muted Gray-Blue | Textos secundários, subtítulos e descrições em cards |
| `--border` | `rgba(0, 0, 0, 0.18)` | Dark Border Subtle | Borda sutil para contêineres e shells navegáveis |
| `--page-max` | `1280px` | Page Max Width | Largura máxima do contêiner de conteúdo principal |

### 1.3. Cores Específicas, Funcionais e Gradientes
Além das variáveis de sistema, o site utiliza cores específicas para contextos operacionais, gradientes corporativos e componentes interativos:

| Categoria | Código / Valor | Descrição e Aplicação no Site |
| :--- | :--- | :--- |
| **Dark Hero Background** | `#071226` / `#0c1a30` | Fundo ultra-escuro para banners Hero com carrossel e seções de alta profundidade visual |
| **Hero Overlay** | `linear-gradient(90deg, rgba(7, 18, 38, 0.82) 0%, rgba(7, 18, 38, 0.52) 38%, rgba(7, 18, 38, 0.14) 100%)` | Overlay gradiente para garantir leitura e contraste ideal sobre as fotos do carrossel Hero |
| **Gradiente Corporativo CTA** | `linear-gradient(118deg, #0f2854 0%, #123665 58%, #1c4d8d 100%)` | Gradiente azul institucional utilizado nas seções de CTA final (Blog, Obras, Soluções) |
| **Verde WhatsApp** | `#25d366` / `#67C15E` | Cor oficial para botões flutuantes, ícones e CTAs do WhatsApp comercial |
| **Verde Presença (Mapa)** | `#10b981` | Verde esmeralda para pins de localização no componente do Mapa do Brasil |
| **Bordas & Divisores Suaves** | `#dce2ec` / `#d8deea` | Bordas finas para timelines, cards de marcas representadas e divisores do rodapé |
| **Fundo Nichos & Specs** | `#f7f9fc` / `#f0f4fa` | Fundo suave com tom levemente azulado para tabelas técnicas e especificações em nichos |
| **Badge Subcategoria (Pílula)** | `rgba(58, 160, 219, 0.08)` (fundo) / `#1c4d8d` (texto) | Pílulas de tags discretas no rodapé de cards com texto azul de realce |

### 1.4. Diretrizes de Aplicação de Temas (Light vs Dark)
*   **Seções Claras (Light Mode)**: Fundos `$white` e `--soft` (`#f3f6fb`), texto do corpo em `--text` (`#1f2937`), títulos em `$primary` (`#002D5D`) ou `--navy` (`#0f2854`).
*   **Seções Escuras (Dark Mode - `.sectionDark` / Hero)**: Fundos `--navy` (`#0f2854`) ou `#071226`, textos em `$white` (`#ffffff`) com descrições em opacidade `0.9` ou `rgba(255, 255, 255, 0.7)`, eyebrows e números em `$secondary` (`#3AA0DB`).

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

---

## 6. Padrões Avançados de Layout e Conversão

Para garantir uma interface sofisticada e focada em conversão de leads B2B, siga estas diretrizes adicionais:

### 6.1. Hero Assimétrico (Equilíbrio Visual com Grafismos)
Ao desenhar seções Hero que usem grafismos ou ilustrações no lado direito (como o overlay de círculos concêntricos em `/solucoes`), o bloco de texto deve ser deslocado para o centro do viewport para evitar peso excessivo à esquerda:
*   **Margem do Bloco (`.heroContent`)**: Aplique `padding-left: 96px` no desktop para balancear o layout (ajuste para `48px` em resoluções médias e `0` em dispositivos móveis).
*   **Parágrafo com Borda Decorativa (`.heroText`)**: Adicione recuo à esquerda (`margin-left: 48px`, `padding-left: 24px`) e uma borda de destaque com a cor `$secondary` (`border-left: 3px solid $secondary`).

### 6.2. Alinhamento Vertical em Cards com Tags (Header & Footer)
Para manter o alinhamento visual de cards em linha no grid mesmo quando as descrições tenham tamanhos variados, separe o conteúdo e o rodapé:
*   **Estrutura de Marcação**: Agrupe o conteúdo principal (ícone, título, descrição) em uma classe `.cardHeader` e os metadados e ações em um `.cardFooter`.
*   **Empurre ao Bottom**: Aplique `margin-top: auto` no `.cardFooter` do card configurado com `display: flex; flex-direction: column;`. Isso garante que divisores horizontais, badges e botões alinhem perfeitamente na mesma altura em todos os cards.

### 6.3. Pílulas de Tags/Badges Discretas
As tags de identificação de marcas ou subcategorias no rodapé do card devem ser visualmente harmônicas:
*   **Estilo**: Formato pílula (`border-radius: 12px`), tipografia reduzida (`font-size: 11px`), peso semibold (`font-weight: 600`) e cores de fundo suaves (`rgba(58, 160, 219, 0.08)`) com texto na cor azul de realce (`#1c4d8d`).

### 6.4. Ações de Conversão Contextuais (CTAs de WhatsApp)
Todos os botões de orçamento rápido em cards devem direcionar para o canal comercial via WhatsApp parametrizados com mensagens contextuais para facilitar a automação e triagem de leads:
*   **Mensagem Contextual**: A URL deve conter uma mensagem pré-definida codificada dinamicamente (`encodeURIComponent`) que especifique qual produto ou família o cliente está orçando.
*   **Estilo do Botão (`.cardQuoteButton`)**: Botão compacto arredondado (`border-radius: 20px`), fundo azul e transição no hover que eleva o botão (`transform: translateY(-2px)`) e desloca sutilmente o ícone de seta para a direita (`transform: translateX(2px)`).

