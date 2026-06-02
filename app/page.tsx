import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Typewriter from "./components/typewriter";
import styles from "./index.module.scss";

const timelineItems = [
  {
    year: "1982",
    description:
      "Fundada em 1982, a RETEC nasceu com o objetivo de ser referência em climatização para construções de médio e grande porte.",
    image: "/about/about1.jpeg",
    alt: "Primeira sede do Grupo RETEC",
  },
  {
    year: "2000",
    description:
      "Com o crescimento da empresa e a ampliação do portfólio de clientes, demos um passo importante com a mudança para o SAAN.",
    image: "/about/about2.jpg",
    alt: "Momento de expansão da RETEC",
  },
  {
    year: "2021 a 2024",
    description:
      "Em busca de melhores condições de atendimento técnico e comercial, iniciamos a transição estratégica para o SIA.",
    image: "/home/new-facade.webp",
    alt: "Fachada da RETEC no SIA",
  },
  {
    year: "2024",
    description:
      "Inauguramos o showroom no SIA para proporcionar uma experiência mais completa aos nossos clientes e parceiros.",
    image: "/about/empty-office.jpg",
    alt: "Showroom da RETEC",
  },
  {
    year: "Hoje",
    description:
      "Seguimos evoluindo nossa operação com foco em soluções térmicas, atendimento consultivo e suporte técnico de ponta a ponta.",
    image: "/about/office-inside.jpg",
    alt: "Atuação atual do Grupo RETEC",
  },
];

const representativeBrands = [
  { src: "/home/empresas_representantes/armacell.png", alt: "Armacell" },
  { src: "/home/empresas_representantes/armstrong.png", alt: "Armstrong" },
  { src: "/home/empresas_representantes/daikin.png", alt: "Daikin" },
  { src: "/home/empresas_representantes/evapco.png", alt: "Evapco" },
  { src: "/home/empresas_representantes/projelmec.png", alt: "Projelmec" },
  { src: "/home/empresas_representantes/sicflux.png", alt: "Sicflux" },
  { src: "/home/empresas_representantes/trox.png", alt: "TROX" },
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
];

const highlightCards = [
  {
    label: "Empresarial",
    title: "Comércio e Varejo",
    icon: "/icons/comercio.svg",
    description:
      "Ambientes que precisam respirar com eficiência e conforto constante.",
  },
  {
    label: "Saúde",
    title: "Hospitais e Farmacêuticos",
    icon: "/icons/hospital.svg",
    description:
      "Onde a temperatura certa não é detalhe, é condição essencial.",
  },
  {
    label: "Industrias",
    title: "Industrias",
    icon: "/icons/industria.svg",
    description:
      "Operações que não podem parar, sistemas que não podem falhar.",
  },
  {
    label: "Infraestrutura",
    title: "Data Centers",
    icon: "/icons/data_center.svg",
    description:
      "Infraestrutura crítica que depende de controle térmico absoluto.",
  },
];

const testimonials = [
  {
    initials: "DF",
    name: "Equipe de obra em Brasília",
    role: "Cliente corporativo",
    quote:
      "A RETEC entrou no projeto com leitura técnica e agilidade. O atendimento trouxe segurança para toda a execução.",
  },
  {
    initials: "GO",
    name: "Parceiro instalador",
    role: "Canal técnico",
    quote:
      "O diferencial foi o suporte consultivo. Não foi só venda: houve orientação real para escolher a solução certa.",
  },
  {
    initials: "HV",
    name: "Gestão hospitalar",
    role: "Operação crítica",
    quote:
      "Precisávamos de confiabilidade e prazo. A RETEC entregou ambos com uma comunicação muito próxima do início ao fim.",
  },
];

const faqs = [
  {
    question: "Quais tipos de solução a RETEC atende?",
    answer:
      "Atendemos sistemas HVAC para aplicações comerciais, hospitalares, laboratoriais e industriais, com foco em climatização, ventilação, exaustão e componentes especializados.",
  },
  {
    question: "Vocês fazem apenas fornecimento ou também apoio técnico?",
    answer:
      "O fornecimento vem acompanhado de leitura consultiva, apoio comercial e orientação técnica para ajudar na decisão e na compatibilização da solução.",
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
      "Trabalhamos com fabricantes reconhecidos do mercado HVAC-R, com curadoria para diferentes necessidades técnicas e operacionais. Somos representantes da Daikin, Trox, Armacell e Sicflux.",
  },
  {
    question: "Como funciona o pós-venda?",
    answer:
      "Nosso time segue disponível para suporte, garantia e acompanhamento conforme a solução fornecida e o contexto do projeto.",
  },
  {
    question: "A RETEC trabalha com distribuição?",
    answer:
      "Sim, trabalhamos com atacado e varejo. Nossa equipe está sempre preparada para encontrar a solução para o seu problema!",
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
    subtitle: "Showroom e matriz no coração do Brasil",
    image: "/home/new-facade.webp",
    alt: "Fachada da unidade Brasília",
    href: "https://www.google.com/maps/search/?api=1&query=SIA+Trecho+17+Rua+17+N%C2%BA+1380+Bras%C3%ADlia",
  },
  {
    city: "Goiânia",
    subtitle: "Filial estratégica para atender o Centro-Oeste",
    image: "/about/about1.jpeg",
    alt: "Unidade de Goiânia",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Caiap%C3%B3,+452+-+St.+Genoveva+Goi%C3%A2nia",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src="/home/new-facade.webp"
            alt="Showroom Grupo RETEC"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>
                  Especialistas em qualidade do ar e conforto térmico. Criando soluções de
                  climatização que funcionam | HVAC.
                </h1>
                <p className={styles.heroText}>
                  Climatização inteligente para ambientes que respiram{" "}
                  <Typewriter words={["conforto", "eficiência", "qualidade", "controle"]} />
                </p>
              </div>

              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href="https://wa.me/5561991311283"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contato
                </a>
                <a className={styles.secondaryButton} href="#historia">
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="historia">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Origem</p>
              <h2 className={styles.sectionTitle}>Quatro décadas construindo confiança</h2>
              <p className={styles.sectionText}>
                Desde 1982, o Grupo RETEC trabalha com a mesma determinação de quem
                entende que cada projeto é um compromisso. Evoluímos em estrutura, mas
                preservamos o princípio que nos trouxe até aqui: entregar o que se promete.
              </p>
            </div>

            <div className={styles.timelineGrid}>
              {timelineItems.map((item) => (
                <article className={styles.timelineItem} key={item.year}>
                  <div className={styles.timelineMedia}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1100px) 100vw, 180px"
                    />
                  </div>

                  <div className={styles.progress}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span className={styles.progressLine} aria-hidden="true" />
                  </div>

                  <div className={styles.timelineCopy}>
                    <h3 className={styles.timelineYear}>{item.year}</h3>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </article>
              ))}

              <div className={styles.timelineRail} aria-hidden="true">
                <Image
                  src="/home/progressLine.png"
                  alt=""
                  width={1413}
                  height={15}
                />
              </div>
            </div>

            <div className={styles.brandSliderSection}>
              <div className={styles.brandSliderIntro}>
                <p className={styles.eyebrow}>Marcas</p>
                <h3 className={styles.brandSliderTitle}>Marcas das quais a RETEC é representante & parceiras</h3>
              </div>

              <div className={styles.brandMarquee}>
                <div className={styles.brandTrack}>
                  {[0, 1].map((groupIndex) => (
                    <div
                      key={groupIndex}
                      className={styles.brandRow}
                      aria-hidden={groupIndex === 1}
                    >
                      {representativeBrands.map((brand) => (
                        <div className={styles.brandCard} key={`${groupIndex}-${brand.alt}`}>
                          <Image
                            className={styles.brandLogo}
                            src={brand.src}
                            alt={brand.alt}
                            width={220}
                            height={88}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`} id="processo">
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.sectionIntroCentered} ${styles.onDark}`}>
              <p className={styles.eyebrow}>Método</p>
              <h2 className={styles.sectionTitle}>Do projeto à entrega</h2>
              <p className={styles.sectionText}>
                Um fluxo de atendimento pensado para reduzir atrito e aumentar previsibilidade
                em cada etapa da obra.
              </p>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <article className={styles.processCard} key={step.number}>
                  <div className={styles.processCardHead}>
                    <div className={styles.processIcon}>
                      <Image src={step.icon} alt="" width={28} height={28} aria-hidden="true" />
                    </div>
                    <span className={styles.processNumber}>{step.number}</span>
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processText}>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.highlightsLayout}>
              <div className={styles.sectionIntro}>
                <p className={styles.eyebrow}>Atuação</p>
                <h2 className={styles.sectionTitle}>Onde o Grupo RETEC gera valor</h2>
                <p className={styles.sectionText}>
                  Combinamos portfólio técnico, leitura consultiva e suporte comercial para
                  projetos que exigem desempenho, prazo e segurança operacional.
                </p>
              </div>

              <div className={styles.highlightGrid}>
                {highlightCards.map((card) => (
                  <article className={styles.highlightCard} key={card.title}>
                    <div className={styles.highlightCardHead}>
                      <p className={styles.highlightLabel}>{card.label}</p>
                      <div className={styles.highlightIcon}>
                        <Image src={card.icon} alt="" width={32} height={32} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className={styles.highlightTitle}>{card.title}</h3>
                    <p className={styles.highlightDescription}>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.onDark}`}>
              <p className={styles.eyebrow}>Clientes satisfeitos</p>
              <h2 className={styles.sectionTitle}>Confiança construída em campo</h2>
              <p className={styles.sectionText}>
                Relações duradouras nascem quando a entrega técnica acompanha a expectativa
                comercial.
              </p>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <article className={styles.testimonialCard} key={testimonial.name}>
                  <div className={styles.testimonialStars}>★★★★★</div>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.testimonialAvatar}>{testimonial.initials}</span>
                    <div>
                      <p className={styles.testimonialName}>{testimonial.name}</p>
                      <p className={styles.testimonialRole}>{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Dúvidas</p>
              <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
              <p className={styles.sectionText}>
                Um resumo rápido para quem está avaliando a RETEC como parceira técnica e
                comercial.
              </p>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`} id="contato">
          <div className={styles.container}>
            <div className={`${styles.sectionIntro} ${styles.onDark}`}>
              <p className={styles.eyebrow}>Presença</p>
              <h2 className={styles.sectionTitle}>Onde estamos</h2>
              <p className={styles.sectionText}>Dois pontos de operação, mesma qualidade.</p>
            </div>

            <div className={styles.locationGrid}>
              {locations.map((location) => (
                <article className={styles.locationCard} key={location.city}>
                  <div className={styles.locationImage}>
                    <Image
                      src={location.image}
                      alt={location.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>

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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
