import styles from "./blog.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import Main from "../components/main";
import Link from "next/link";
import ArticleCard from "../components/articleCard";
import Button from "../components/button";
import ScrollReveal from "../components/scrollReveal";
import { supabase } from "../../lib/supabase";
import CtaButton from "../components/ctaButton";

export const dynamic = "force-dynamic";

interface Post {
  slug: string;
  titulo: string;
  lead: string;
  tag: string;
  autor: string;
  data: string;
  imagem_principal: string;
  corpo_texto: { type: string; text: string }[];
}

export default async function Blog({
  searchParams
}: {
  searchParams: { tag?: string }
}) {
  // Tenta capturar a tag da url, se não existir retorna 'Todos'.
  const selectedTag = searchParams.tag || "Todos";
  let dynamicPosts: Post[] = [];
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order('criado_em', { ascending: false });

    if (error) {
      console.error("Erro retornado pelo Supabase na página Blog:", error);
    } else if (posts) {
      dynamicPosts = posts.map((post: {
        slug: string;
        titulo: string;
        lead: string;
        tag: string;
        autor: string;
        data: string;
        imagem_principal: string;
        corpo_texto: unknown;
      }) => ({
        slug: post.slug,
        titulo: post.titulo,
        lead: post.lead,
        tag: post.tag,
        autor: post.autor,
        data: post.data,
        imagem_principal: post.imagem_principal,
        corpo_texto: post.corpo_texto as { type: string; text: string }[],
      }));
    }
  } catch (err) {
    console.error("Erro ao buscar posts do Supabase na página Blog:", err);
  }
  // Se houver algum post dentro do banco de dados, retorna o mais recente para ser a capa da pagina.
  const coverPost = dynamicPosts.length > 0 ? dynamicPosts[0] : null;
  //Post estaticos do blog
  const staticPosts = [
    {
      imgSrc: "/blog/climatizacao-escola.webp",
      imgAlt: "Sala de Aula",
      tag: "Saúde",
      title: "Climatização nas escolas.",
      lead: "Qualidade do ar afeta até a sonolência, mas ambientes bem projetados podem ajudar a contornar isso.",
      author: "Patrick Galletti",
      path: "climatizao-nas-escolas",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/climatizao-trabalho.webp",
      imgAlt: "Ambiente de Trabalho",
      tag: "Corporativo",
      title: "Climatização no ambiente de trabalho.",
      lead: "Como a qualidade do ar influencia na performance das equipes e na produtividade no trabalho.",
      author: "Patrick Galletti",
      path: "climatizacao-dentro-do-ambiente-trabalho",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/queimadas-saude.webp",
      imgAlt: "Queimadas",
      tag: "Saúde",
      title: "Queimadas e Saúde.",
      lead: "As queimadas afetam a sua saúde mesmo a quilômetros de distância, aprenda a se proteger.",
      author: "Patrick Galletti",
      path: "queimadas-afetam-saude-a-distancia",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/foto-periodo-queimadas.webp",
      imgAlt: "Queimadas",
      tag: "Saúde",
      title: "Filtragem e renovação de ar em períodos de queimadas: o que muda nos ambientes internos.",
      lead: "Em períodos de queimadas, a fumaça concentra material particulado fino que atinge ambientes internos mesmo em cidades distantes dos focos. Entenda o papel da filtragem e da renovação de ar.",
      author: "Patrick Galletti",
      path: "filtragem-renovacao-ar-queimadas",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/fumaca-ambientes-internos.webp",
      imgAlt: "Queimadas",
      tag: "Saúde",
      title: "Fumaça das queimadas longe dos focos: como conter o impacto em ambientes internos",
      lead: "Material particulado das queimadas viaja milhares de quilômetros e atinge cidades distantes dos focos. Veja o que precisa estar em ordem nos sistemas de ventilação e filtragem para preservar a qualidade do ar interno.",
      author: "Patrick Galletti",
      path: "fumaca-queimadas-longe-focos-ambientes-internos",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/sistema-climatizacao-vrv.webp",
      imgAlt: "Sistema de Climatização VRV",
      tag: "Eficiencia",
      title: "Climatização para calor extremo e ar seco: o que precisa estar correto em projetos no Centro-Oeste",
      lead: "Brasília e o Centro-Oeste convivem com baixa umidade e ondas de calor recorrentes. Entenda o que considerar na escolha do sistema de climatização para esses cenários.",
      author: "Patrick Galletti",
      path: "climatizacao-calor-extremo-ar-seco-centro-oeste",
      data: "20/06/2024"
    },
    {
      imgSrc: "/blog/quarto.webp",
      imgAlt: "Quarto Climatizado",
      tag: "Saúde",
      title: "Temperatura, umidade e qualidade do ar: o que define um quarto bem climatizado para dormir",
      lead: "Faixa térmica, umidade relativa e renovação do ar interferem diretamente no sono. Veja o que considerar na climatização de ambientes destinados ao descanso.",
      author: "Patrick Galletti",
      path: "temperatura-umidade-qualidade-ar-sono",
      data: "20/06/2024",
    },
    {
      imgSrc: "/blog/sistema-climatizacao-daikin.webp",
      imgAlt: "Sistema de climatização Daikin",
      tag: "Sustentabilidade",
      title: "Climatização sustentável: o que muda com novos refrigerantes, automação e eficiência energética",
      lead: "A transição de gases refrigerantes, a automação e o controle preciso de operação reduzem o impacto ambiental dos sistemas de climatização. Entenda o que considerar nas decisões técnicas.",
      author: "Patrick Galletti",
      path: "climatizacao-calor-extremo-ar-seco-centro-oeste",
      data: "20/06/2024",
    },
    {
      imgSrc: "/blog/sistema-respiratorio.webp",
      imgAlt: "Sistema respiratório",
      tag: "Saúde",
      title: "Clima seco e climatização: como preservar a saúde respiratória",
      lead: "Em estações de baixa umidade, a saúde respiratória depende do ar que se respira dentro de casa e no trabalho. Entenda o que a climatização precisa entregar para reduzir os efeitos do clima seco.",
      author: "Patrick Galletti",
      path: "clima-seco-climatizacao-saude-respiratoria",
      data: "20/06/2024",
    },
    {
      imgSrc: "/blog/trabalho-produtividade.webp",
      imgAlt: "Trabalho e produtividade",
      tag: "Corporativo",
      title: "Climatização e produtividade: o que muda quando o ambiente de trabalho funciona bem",
      lead: "Conforto térmico no ambiente de trabalho influencia produtividade, absenteísmo e consumo de energia. Veja o que considerar na climatização de espaços corporativos.",
      author: "Patrick Galletti",
      path: "climatizacao-produtividade-ambiente-trabalho",
      data: "20/06/2024",
    },
    {
      imgSrc: "/blog/doencas-respiratorias.webp",
      imgAlt: "Doenças respiratórias",
      tag: "Saúde",
      title: "Doenças respiratórias no DF e o papel da climatização inteligente nos ambientes internos",
      lead: "O Distrito Federal registra aumento de doenças respiratórias em períodos de baixa umidade e queimadas. Entenda o que a climatização inteligente entrega no controle da qualidade do ar interno.",
      author: "Patrick Galletti",
      path: "doencas-respiratorias-df-climatizacao-inteligente",
      data: "20/06/2024",
    },
    {
      imgSrc: "/blog/venda-casa.webp",
      imgAlt: "Queimadas",
      tag: "Corporativo",
      title: "Climatização inteligente valoriza imóveis em até 30% e acelera a velocidade de venda",
      lead: "Imóveis com sistemas inteligentes de climatização alcançam valorização de até 30% e reduzem o tempo de venda. Entenda o que entra na conta do comprador e do investidor.",
      author: "Patrick Galletti",
      path: "climatizacao-inteligente-valoriza-imoveis-velocidade-venda",
      data: "20/06/2024",
    },
  ];

  const filteredPosts = selectedTag === "Todos" ? dynamicPosts.slice(1)//pulando a capa da pagina /blog
    : dynamicPosts.slice(1).filter(post => post.tag === selectedTag);
  return (
    <div className={styles.page}>
      <Navbar activeTab="blog" />
      <Main
        bgImage={coverPost ? coverPost.imagem_principal : "/blog/foto-periodo-queimadas.webp"}
        className={styles.blogHero}
      >
        <Link
          className={styles.emphasis}
          href={coverPost ? `/blog/${coverPost.slug}` : '/blog/queimadas-afetam-saude-a-distancia'}>
          {coverPost ? coverPost.titulo : "Como as queimadas afetam a sua saúde, mesmo a quilômetros de distância."}
        </Link>
        <div className={styles.articleDetails}>
          <Image
            className={styles.authorImg}
            src="/blog/patrick.png"
            alt={coverPost ? coverPost.autor : "Patrick Galletti"}
            width="36"
            height="36"
          />
          <span className={styles.authorNameInicial}>
            {coverPost ? coverPost.autor : "Patrick Galletti"}
          </span>
          <span className={styles.dataInicial}>
            {coverPost ? coverPost.data : "20/06/2024"}
          </span>
        </div>
        <a
          href={coverPost ? `/blog/${coverPost.slug}` : "/blog/queimadas-afetam-saude-a-distancia"}
          className={styles.cta}
        >
          <Button>Leia mais</Button>
        </a>
      </Main>
      <section className={styles.articles}>
        <div className={styles.content}>
          <div className={styles.categories}>
            {["Todos", "Saúde", "Tecnologia", "Eficiencia", "Sustentabilidade", "Corporativo"].map((tag) => (
              <Link
                key={tag}
                href={tag === "Todos" ? "/blog" : `/blog?tag=${tag}`}
                className={selectedTag === tag ? styles.active : ""}
              > {tag}
              </Link>
            ))}
          </div>
          {/* Posts dinamicos vindo diretamente do supabase */}
          {filteredPosts
            .filter(post => selectedTag === "Todos" || post.tag === selectedTag).map((post) => (
              <ArticleCard
                key={post.slug}
                imgSrc={post.imagem_principal}
                imgAlt={post.titulo}
                title={post.titulo}
                lead={post.lead}
                author={post.autor}
                path={post.slug}
                data={post.data}
                tag={post.tag}
              />
            ))}

          {/* Posts estaticos vindos do arquivo local (staticPosts) e filtrados por tag */}
          {staticPosts
            .filter(post => selectedTag === "Todos" || post.tag === selectedTag).map((post) => (
              <ArticleCard
                key={post.path}
                imgSrc={post.imgSrc}
                imgAlt={post.imgAlt}
                title={post.title}
                lead={post.lead}
                author={post.author}
                path={post.path}
                data={post.data}
                tag={post.tag}
              />
            ))}
        </div>
      </section>
      <ScrollReveal direction="up" className={styles.representativesCta}>
        <div className={styles.representativesCtaGlow} aria-hidden="true" />
        <div className={styles.representativesCtaContent}>
          <p className={styles.representativesCtaEyebrow}>Atendimento especializado</p>
          <h2 className={styles.representativesCtaTitle}>
            Encontre os equipamentos certos para sua obra
          </h2>
          <p className={styles.representativesCtaText}>
            Fale com a RETEC e receba apoio especializado para escolher equipamentos, validar disponibilidade e agilizar o atendimento da sua obra.
          </p>
        </div>

        <CtaButton className={styles.representativesCtaButton} />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
