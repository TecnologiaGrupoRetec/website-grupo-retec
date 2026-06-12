import styles from "./blog.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import Main from "../components/main";
import Link from "next/link";
import ArticleCard from "../components/articleCard";
import Button from "../components/button";

export default function Blog() {

  return (
    <div className={styles.page}>
      <Navbar activeTab="blog" />
      <Main bgImage="/blog/thumb3.jpg" className={styles.blogHero}>
        <Link className={styles.emphasis} href="/blog/3">
          Como as queimadas afetam a sua saúde, mesmo a quilômetros de distância.
        </Link>
        <div className={styles.articleDetails}>
          <Image className={styles.authorImg} src="/blog/patrick.png" alt="Patrick Galletti" width="36" height="36" />
          <span className={styles.authorName}>
            Patrick Galletti
          </span>
          <span className={styles.date}>
            26/09/2024
          </span>
        </div>
        <a href="/blog/queimadas-afetam-saude-a-distancia" className={styles.cta}>
          <Button>Leia mais</Button>
        </a>
      </Main>

      <section className={styles.articles}>
        <div className={styles.content}>
          <ArticleCard
            imgSrc="/blog/climatizacao-escola.webp"
            imgAlt="Sala de Aula"
            title="Climatização nas escolas."
            lead="Qualidade do ar afeta até a sonolência, mas ambientes bem projetados podem ajudar a contornar isso."
            author="Patrick Galletti"
            path="climatizao-nas-escolas"
          />
          <ArticleCard
            imgSrc="/blog/climatizao-trabalho.webp"
            imgAlt="Ambiente de Trabalho"
            title="Climatização no ambiente de trabalho."
            lead="Como a qualidade do ar influencia na performance das equipes e na produtividade no trabalho."
            author="Patrick Galletti"
            path="climatizacao-dentro-do-ambiente-trabalho"
          />
          <ArticleCard
            imgSrc="/blog/queimadas-saude.webp"
            imgAlt="Queimadas"
            title="Queimadas e Saúde."
            lead="As queimadas afetam a sua saúde mesmo a quilômetros de distância, aprenda a se proteger."
            author="Patrick Galletti"
            path="queimadas-afetam-saude-a-distancia"
          />
          <ArticleCard
            imgSrc="/blog/foto-periodo-queimadas.webp"
            imgAlt="Queimadas"
            title="Filtragem e renovação de ar em períodos de queimadas: o que muda nos ambientes internos."
            lead="Em períodos de queimadas, a fumaça concentra material particulado fino que atinge ambientes internos mesmo em cidades distantes dos focos. Entenda o papel da filtragem e da renovação de ar."
            author="Patrick Galletti"
            path="filtragem-renovacao-ar-queimadas"
          />
          <ArticleCard
            imgSrc="/blog/fumaca-ambientes-internos.webp"
            imgAlt="Queimadas"
            title="Fumaça das queimadas longe dos focos: como conter o impacto em ambientes internos"
            lead="Material particulado das queimadas viaja milhares de quilômetros e atinge cidades distantes dos focos. Veja o que precisa estar em ordem nos sistemas de ventilação e filtragem para preservar a qualidade do ar interno."
            author="Patrick Galletti"
            path="fumaca-queimadas-longe-focos-ambientes-internos"
          />
          <ArticleCard
            imgSrc="/blog/sistema-climatizacao-vrv.webp"
            imgAlt="Sistema de Climatização VRV"
            title="Climatização para calor extremo e ar seco: o que precisa estar correto em projetos no Centro-Oeste"
            lead="Brasília e o Centro-Oeste convivem com baixa umidade e ondas de calor recorrentes. Entenda o que considerar na escolha do sistema de climatização para esses cenários."
            author="Patrick Galletti"
            path="climatizacao-calor-extremo-ar-seco-centro-oeste"
          />
          <ArticleCard
            imgSrc="/blog/quarto.webp"
            imgAlt="Quarto Climatizado"
            title="Temperatura, umidade e qualidade do ar: o que define um quarto bem climatizado para dormir"
            lead="Faixa térmica, umidade relativa e renovação do ar interferem diretamente no sono. Veja o que considerar na climatização de ambientes destinados ao descanso."
            author="Patrick Galletti"
            path="temperatura-umidade-qualidade-ar-sono"
          />
          <ArticleCard
            imgSrc="/blog/sistema-climatizacao-daikin.webp"
            imgAlt="Sistema de climatização Daikin"
            title="Climatização sustentável: o que muda com novos refrigerantes, automação e eficiência energética"
            lead="A transição de gases refrigerantes, a automação e o controle preciso de operação reduzem o impacto ambiental dos sistemas de climatização. Entenda o que considerar nas decisões técnicas."
            author="Patrick Galletti"
            path="climatizacao-calor-extremo-ar-seco-centro-oeste"
          />
          <ArticleCard
            imgSrc="/blog/sistema-respiratorio.webp"
            imgAlt="Sistema respiratório"
            title="Clima seco e climatização: como preservar a saúde respiratória"
            lead="Em estações de baixa umidade, a saúde respiratória depende do ar que se respira dentro de casa e no trabalho. Entenda o que a climatização precisa entregar para reduzir os efeitos do clima seco."
            author="Patrick Galletti"
            path="clima-seco-climatizacao-saude-respiratoria"
          />
          <ArticleCard
            imgSrc="/blog/trabalho-produtividade.webp"
            imgAlt="Trabalho e produtividade"
            title="Climatização e produtividade: o que muda quando o ambiente de trabalho funciona bem"
            lead="Conforto térmico no ambiente de trabalho influencia produtividade, absenteísmo e consumo de energia. Veja o que considerar na climatização de espaços corporativos."
            author="Patrick Galletti"
            path="climatizacao-produtividade-ambiente-trabalho"
          />
          <ArticleCard
            imgSrc="/blog/doencas-respiratorias.webp"
            imgAlt="Doenças respiratórias"
            title="Doenças respiratórias no DF e o papel da climatização inteligente nos ambientes internos"
            lead="O Distrito Federal registra aumento de doenças respiratórias em períodos de baixa umidade e queimadas. Entenda o que a climatização inteligente entrega no controle da qualidade do ar interno."
            author="Patrick Galletti"
            path="doencas-respiratorias-df-climatizacao-inteligente"
          />
          <ArticleCard
            imgSrc="/blog/venda-casa.webp"
            imgAlt="Queimadas"
            title="Climatização inteligente valoriza imóveis em até 30% e acelera a velocidade de venda"
            lead="Imóveis com sistemas inteligentes de climatização alcançam valorização de até 30% e reduzem o tempo de venda. Entenda o que entra na conta do comprador e do investidor."
            author="Patrick Galletti"
            path="climatizacao-inteligente-valoriza-imoveis-velocidade-venda"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
