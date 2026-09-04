import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroCarousel from "./components/heroCarousel";
import Link from "next/link";
import styles from "./index.module.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BrandMarquee from "./components/brandMarquee";
import ScrollReveal from "./components/scrollReveal";
import BrazilMap from "./components/brazilMap";
import ProductSlider from "./components/productSlider";

const representativeBrands = [
  { src: "/home/empresas_representantes/armacell.png", alt: "Armacell" },
  { src: "/home/empresas_representantes/armstrong.png", alt: "Armstrong" },
  { src: "/home/empresas_representantes/daikin.png", alt: "Daikin" },
  { src: "/home/empresas_representantes/evapco.png", alt: "Evapco" },
  { src: "/home/empresas_representantes/projelmec.png", alt: "Projelmec" },
  { src: "/home/empresas_representantes/sicflux.png", alt: "Sicflux" },
  { src: "/home/empresas_representantes/trox.png", alt: "TROX" },
];

const suppliedCompanies = [
  { src: "/home/empresas_fornecidas/logo_ache.webp", alt: "Aché" },
  { src: "/home/empresas_fornecidas/logo_anchieta.webp", alt: "Anchieta" },
  { src: "/home/empresas_fornecidas/logo_brasal.webp", alt: "Brasal" },
  { src: "/home/empresas_fornecidas/logo_cifarma.webp", alt: "Cifarma" },
  { src: "/home/empresas_fornecidas/logo_cimed.webp", alt: "Cimed" },
  { src: "/home/empresas_fornecidas/logo_ecap.webp", alt: "ECAP" },
  { src: "/home/empresas_fornecidas/logo_ebm.webp", alt: "EBM" },
  { src: "/home/empresas_fornecidas/logo_ems.webp", alt: "EMS" },
  { src: "/home/empresas_fornecidas/logo_fio-cruz.png", alt: "Fiocruz" },
  { src: "/home/empresas_fornecidas/logo_grupo-acelerador.png", alt: "Grupo Acelerador" },
  { src: "/home/empresas_fornecidas/logo_hospital-albert-einsten.webp", alt: "Hospital Albert Einstein" },
  { src: "/home/empresas_fornecidas/logo_paulooctavio.webp", alt: "Paulo Octávio" },
  { src: "/home/empresas_fornecidas/logo_sabin.webp", alt: "Sabin" },
  { src: "/home/empresas_fornecidas/logo_terral.webp", alt: "Terral" },
  { src: "/home/empresas_fornecidas/logo_villela-carvalho.webp", alt: "Villela Carvalho" },
  { src: "/home/empresas_fornecidas/logo_saint-gobain.webp", alt: "Saint-Gobain" },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    icon: "/icons/diagnostico.svg",
    description:
      "Entendemos as necessidades térmicas do projeto, as restrições da obra e os objetivos da operação.",
  },
  {
    number: "02",
    title: "Orçamento",
    icon: "/icons/engenharia.svg",
    description:
      "Selecionamos equipamentos, acessórios e soluções com compatibilização para cada contexto de uso.",
  },
  {
    number: "03",
    title: "Proposta justa e detalhada",
    icon: "/icons/proposta.svg",
    description:
      "Coordenamos o envio com previsibilidade, suporte comercial e atenção às etapas do cronograma.",
  },
  {
    number: "04",
    title: "Entrega assistida",
    icon: "/icons/obra.svg",
    description:
      "Seguimos presentes no pós-venda com orientação, garantia e atendimento técnico especializado.",
  },
  {
    number: "05",
    title: "Serviços Autorizados",
    icon: "/icons/acessorios.svg",
    description:
      "Ativações, start-up e manutenções realizadas por técnicos credenciados diretamente pelos principais fabricantes.",
  },
  {
    number: "06",
    title: "Partes & Peças",
    icon: "/icons/pecas.svg",
    description:
      "Fornecimento de peças de reposição originais e componentes homologados para garantir a longevidade dos equipamentos.",
  },
];

const highlightCards = [
  {
    label: "Empresarial",
    title: "Comércio e Varejo",
    icon: "/icons/comercio.svg",
    urlLink: "/solucoes/predios-comerciais",
    description:
      "Ambientes que precisam de ar renovado e conforto constante",
  },
  {
    label: "Saúde",
    title: "Hospitais, centros clínicos e clínicas",
    icon: "/icons/hospital.svg",
    urlLink: "/solucoes/hospitais-clinicas",
    description:
      "Ambientes em que a temperatura correta é condição de operação.",
  },
  {
    label: "Industrias",
    title: "Indústrias farmacêuticas e processos industriais",
    icon: "/icons/industria.svg",
    urlLink: "/solucoes/industrias-farmaceuticas-processos-industriais",
    description:
      "Operações contínuas que dependem de sistemas sem falha.",
  },
  {
    label: "Infraestrutura",
    title: "Data centers e ambientes de missão crítica",
    icon: "/icons/data_center.svg",
    urlLink: "/solucoes/data-centers-missao-critica",
    description:
      "Infraestrutura crítica que depende de controle térmico preciso.",
  },
  {
    label: "Residencial",
    title: "Casas e condomínios de alto padrão",
    icon: "/icons/casa.svg",
    urlLink: "/solucoes/residencia-alto-padrao",
    description:
      "Conforto térmico com inteligência e design.",
  },
  {
    label: "Governamental",
    title: "Órgãos públicos e espaços de convivência",
    icon: "/icons/governo.svg",
    urlLink: "/solucoes/governamental-institucional",
    description:
      "Controle de climatização, ventilação e exaustão para órgãos públicos, templos, escolas e instituições.",
  }
];

const testimonials = [
  {
    image: "/home/avaliacao.png",
    name: "Messias Fernandes",
    quote:
      "Empresa referência em produtos HVAC, conta com os melhores produtos e uma equipe qualificada e sempre disposta a solucionar o problema do cliente na área de climatização.",
  },
  {
    image: "/home/avaliacao2.png",
    name: "Gesiel Meireles",
    quote:
      "Primeira vez que comprei nessa loja, atendimento ótimo,conversa pelo Whatsapp não demorou a responder.",
  },
  {
    image: "/home/avaliacao3.png",
    name: "Maurício Campos",
    quote:
      "Me surpreendi com a quantidade diversidade de material para instalação industrial disponibilizado pela Empresa Retec.",
  },
];

const faqs = [
  {
    question: "Quais tipos de soluções a RETEC fornece?",
    answer:
      "Atendemos sistemas HVAC para aplicações comerciais, residencias de alto padrão, hospitalares, laboratoriais e industriais, com foco em climatização, ventilação, exaustão, isolamento térmicos e componentes especializados.",
  },
  {
    question: "Vocês fazem apenas fornecimento ou também apoio técnico?",
    answer:
      "O fornecimento vem com leitura consultiva e orientação técnica que ajudam na decisão e na compatibilização da solução.",
  },
  {
    question: "A RETEC trabalha com obras fora de Brasília?",
    answer:
      "Sim. Além da matriz em Brasília, contamos com operação em Goiânia e atendemos demandas em diferentes frentes do Centro-Oeste.",
  },
  {
    question: "É possível solicitar orçamento para obras em andamento?",
    answer:
      "Sim. Podemos apoiar desde demandas pontuais até fornecimentos recorrentes para obras em fase de execução ou retrofit.",
  },
  {
    question: "Quais marcas fazem parte do portfólio?",
    answer:
      "Trabalhamos com fabricantes reconhecidos do mercado HVAC-R, com curadoria para diferentes necessidades técnicas e operacionais. Somos representantes e temos como parceiros a Daikin, Trox, Armacell, Sicflux, Armstrong, Evapco, Projelmec, IMI Hydronic e Rocktec.",
  },
  {
    question: "Como funciona o pós-venda?",
    answer:
      "Nosso time segue disponível para suporte e garantia, conforme a solução fornecida e o contexto do projeto.",
  },
  {
    question: "A RETEC trabalha com distribuição?",
    answer:
      "Sim, trabalhamos com atacado e varejo, e a equipe ajuda a encontrar a solução para cada demanda.",
  },
  {
    question: "Consigo comprar online Grupo RETEC?",
    answer:
      "Sim! O Grupo RETEC conta com duas opções de compra online: nosso e-commerce oficial, Artmosfera Brasil, e também nossa loja no Mercado Livre. Assim, você pode escolher o canal que preferir para comprar com praticidade e segurança.",
  },
];

const locations = [
  {
    city: "Brasília",
    subtitle: "Showroom e matriz em Brasília",
    image: "/home/showroom.webp",
    alt: "Fachada da unidade Brasília",
    href: "https://www.google.com/maps/search/?api=1&query=Grupo+Retec+SIA+Trecho+17+Rua+17+N%C2%BA+1380+Bras%C3%ADlia",
  },
  {
    city: "Goiânia",
    subtitle: "Filial estratégica para atender o Centro-Oeste",
    image: "/home/goiania_retec.webp",
    alt: "Unidade de Goiânia",
    href: "https://www.google.com/maps/search/?api=1&query=Grupo+Retec+Av.+Caiap%C3%B3,+452+-+St.+Genoveva+Goi%C3%A2nia",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <HeroCarousel />
        <ProductSlider />

        <section className={styles.section} id="marcas">
          <div className={styles.container}>
            <div className={styles.brandSliderSection}>
              <div className={styles.brandSliderIntro}>
                <p className={styles.eyebrow}>Marcas</p>
                <h3 className={styles.brandSliderTitle}>Marcas das quais a RETEC é representante & parceiras</h3>
              </div>

              <BrandMarquee
                items={representativeBrands.map((brand) => ({ name: brand.alt, logoUrl: brand.src }))}
                theme="light"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`} id="processo">
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <div className={`${styles.sectionIntro} ${styles.sectionIntroCentered} ${styles.onDark}`}>
                <p className={styles.eyebrow}>Método</p>
                <h2 className={styles.sectionTitle}>Como fornecemos para cada obra.</h2>
                <p className={styles.sectionText}>
                  Um fluxo de atendimento que dá previsibilidade a cada etapa do fornecimento.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.processGrid}>
              {processSteps.map((step, idx) => (
                <ScrollReveal key={step.number} delay={idx * 100} direction="up">
                  <article className={styles.processCard}>
                    <div className={styles.processCardHead}>
                      <div className={styles.processIcon}>
                        <Image src={step.icon} alt="" width={28} height={28} aria-hidden="true" />
                      </div>
                      <span className={styles.processNumber}>{step.number}</span>
                    </div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processText}>{step.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Atuação */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.highlightsLayout}>
              <div className={styles.highlightsLeftColumn}>
                <ScrollReveal direction="up">
                  <div className={styles.sectionIntro}>
                    <p className={styles.eyebrow}>Atuação</p>
                    <h2 className={styles.sectionTitle}>Onde o Grupo RETEC gera valor</h2>
                    <p className={styles.sectionText}>
                      Portfólio técnico e leitura consultiva <br />
                      para projetos que exigem eficiência energética, desempenho, qualidade e prazos confiáveis.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200} className={styles.atuacaoBannerReveal}>
                  <div className={styles.atuacaoBannerCard}>
                    <Image
                      src="/home/atuacao-banner.png"
                      alt="Engenharia e Distribuição HVAC Grupo RETEC"
                      width={540}
                      height={320}
                      className={styles.atuacaoBannerImg}
                    />
                    <div className={styles.atuacaoBannerOverlay}>
                      <span className={styles.atuacaoBannerTag}>Atendimento Especializado</span>
                      <h3 className={styles.atuacaoBannerTitle}>Distribuição de produtos HVAC</h3>
                      <p className={styles.atuacaoBannerSub}>
                        Soluções de alta performance e suporte técnico especializado para todos os segmentos de mercado.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className={styles.highlightGrid}>
                {highlightCards.map((card, idx) => {
                  const cardElement = (
                    <article className={styles.highlightCard}>
                      <div className={styles.highlightCardHead}>
                        <p className={styles.highlightLabel}>{card.label}</p>
                        <div className={styles.highlightIcon}>
                          <Image src={card.icon} alt="" width={32} height={32} aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className={styles.highlightTitle}>{card.title}</h3>
                      <p className={styles.highlightDescription}>{card.description}</p>
                      <div className={styles.highlightFooter}>
                        <span className={styles.highlightActionBtn}>
                          Conhecer Soluções <span className={styles.actionArrow}>→</span>
                        </span>
                      </div>
                    </article>
                  );

                  return (
                    <ScrollReveal key={card.title} delay={idx * 150} direction="up" className={styles.highlightReveal}>
                      {card.urlLink ? (
                        <Link href={card.urlLink} className={styles.highlightLink}>
                          {cardElement}
                        </Link>
                      ) : (
                        <div className={styles.highlightLink}>
                          {cardElement}
                        </div>
                      )}
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="clientes">
          <div className={styles.container}>
            <div className={styles.brandSliderSection} style={{ marginTop: 0 }}>
              <ScrollReveal direction="up">
                <div className={styles.brandSliderIntro}>
                  <p className={styles.eyebrow}>Clientes</p>
                  <h3 className={styles.brandSliderTitle}>
                    Empresas para as quais a RETEC forneceu soluções de climatização
                  </h3>
                </div>
              </ScrollReveal>

              <BrandMarquee
                items={suppliedCompanies.map((company) => ({ name: company.alt, logoUrl: company.src }))}
                theme="light"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <div className={`${styles.sectionIntro} ${styles.onDark}`}>
                <p className={styles.eyebrow}>Clientes satisfeitos</p>
                <h2 className={styles.sectionTitle}>Confiança construída em campo</h2>
                <p className={styles.sectionText}>
                  Relações duradouras nascem quando a entrega técnica acompanha a expectativa
                  comercial.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, idx) => (
                <ScrollReveal key={testimonial.name} delay={idx * 150} direction="up" className={styles.testimonialReveal}>
                  <article className={styles.testimonialCard}>
                    <div className={styles.testimonialCardContent}>
                      <div className={styles.testimonialStars}>★★★★★</div>
                      <p className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</p>
                    </div>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.testimonialAvatar}>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className={styles.testimonialAvatarImg}
                        />
                      </div>
                      <div>
                        <p className={styles.testimonialName}>{testimonial.name}</p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Liderança & Direção + Nossa Missão */}
        <section className={`${styles.section} ${styles.leadershipSection}`} id="lideranca">
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <div className={styles.missionHeader}>
                <p className={styles.missionEyebrow}>Nossa Missão</p>
                <blockquote className={styles.missionQuote}>
                  “Melhorar a vida das pessoas através da qualidade do ar.”
                </blockquote>
                <div className={styles.missionAccentLine} />
              </div>
            </ScrollReveal>

            <div className={styles.leadershipGrid}>
              <ScrollReveal direction="left">
                <div className={styles.leadershipContent}>
                  <p className={styles.leadershipEyebrow}>Liderança & Direção</p>
                  <h2 className={styles.leadershipName}>Patrick Galletti</h2>
                  <p className={styles.leadershipRole}>CEO do Grupo RETEC</p>
                  <div className={styles.leadershipAccentLine} />
                  <blockquote className={styles.leadershipQuote}>
                    &quot;Acreditamos que o ar que respiramos influencia a forma como vivemos, trabalhamos, aprendemos e cuidamos das pessoas. Por isso, há mais de 45 anos, dedicamos nosso conhecimento para construir ambientes mais saudáveis, eficientes e confortáveis.&quot;
                  </blockquote>

                  <a
                    href="https://www.instagram.com/patrickggalletti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.leadershipSocialLink}
                  >
                    <svg
                      className={styles.leadershipSocialIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>@patrickggalletti</span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className={styles.leadershipImageReveal}>
                <div className={styles.leadershipImageWrapper}>
                  <div className={styles.leadershipGlow} />
                  <Image
                    src="/home/patrick-fundo-transparente.png"
                    alt="Patrick Galletti - CEO Grupo RETEC"
                    width={520}
                    height={600}
                    className={styles.leadershipImg}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <div className={styles.sectionIntro}>
                <p className={styles.eyebrow}>Dúvidas</p>
                <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
                <p className={styles.sectionText}>
                  Um resumo rápido para quem está avaliando a RETEC como parceira técnica e
                  comercial.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.faqGrid}>
              {faqs.map((faq, idx) => (
                <ScrollReveal key={faq.question} delay={(idx % 3) * 100} direction="up">
                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.question}</summary>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`} id="contato">
          <div className={styles.container}>
            <ScrollReveal direction="up">
              <div className={`${styles.sectionIntro} ${styles.onDark}`}>
                <p className={styles.eyebrow}>Presença</p>
                <h2 className={styles.sectionTitle}>Nossa Presença</h2>
                <p className={styles.sectionText}>Atendimento ágil e estrutura qualificada em pontos estratégicos do país.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className={styles.presenceContainer}>
                <div className={styles.mapWrapper}>
                  <BrazilMap />
                </div>
                <div className={styles.presenceInfo}>
                  <h3 className={styles.presenceTitle}>
                    Estamos estrategicamente posicionados para atender com agilidade, eficiência e alto padrão técnico em todo o Brasil.
                  </h3>
                  <p className={styles.presenceText}>
                    O Grupo RETEC une presença regional, expertise de fábrica e soluções especializadas para entregar qualidade, precisão e confiança em cada projeto.
                  </p>
                  <p className={styles.presenceText}>
                    Mais do que fornecer produtos, somos parceiros na construção de soluções inteligentes em HVAC-R.
                  </p>

                  <div className={styles.presenceUnits}>
                    <a
                      className={styles.unitBtn}
                      href={locations[0].href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Showroom Brasília</span>
                      <span className={styles.unitArrow}>→</span>
                    </a>
                    <a
                      className={styles.unitBtn}
                      href={locations[1].href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Filial Goiânia</span>
                      <span className={styles.unitArrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className={styles.locationGrid}>
              {locations.map((location, idx) => (
                <ScrollReveal key={location.city} delay={idx * 200} direction={idx === 0 ? "right" : "left"}>
                  <article className={styles.locationCard}>
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.locationImageLink}
                    >
                      <div className={styles.locationImage}>
                        <Image
                          src={location.image}
                          alt={location.alt}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                        />
                      </div>
                    </a>

                    <div className={styles.locationContent}>
                      <div>
                        <h3 className={styles.locationTitle}>{location.city}</h3>
                        <p className={styles.locationSubtitle}>{location.subtitle}</p>
                      </div>

                      <a
                        className={styles.locationLink}
                        href={location.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver localização <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollReveal direction="up" className={styles.representativesCta}>
          <div className={styles.representativesCtaGlow} aria-hidden="true" />
          <div className={styles.representativesCtaContent}>
            <p className={styles.representativesCtaEyebrow}>Consultores Especializados</p>
            <h2 className={styles.representativesCtaTitle}>
              Você precisa de atendimento rápido, produtos de referência e alta qualidade em climatizacao?
            </h2>
            <p className={styles.representativesCtaText}>
              Conte com quem há mais de 40 anos fornece equipamentos de HVAC e centrais de água gelada para obras, empresas, grandes empreendimentos e residenciais de luxo.
            </p>
          </div>

          <a
            href={`https://wa.me/5561998904494`}
            target="_blank"
            rel="noreferrer"
            className={styles.representativesCtaButton}
          >
            <span>Falar com um consultor</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </ScrollReveal>


      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
