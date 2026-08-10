export type SolucaoPorNicho = {
  slug: string;
  segmento: string;
  grupo: string;
  imageUrl: string;
  ctaImageUrl?: string;
  hero: {
    titulo: string;
    textoCurto: string;
    textoApoio?: string[];
  };
  principaisDores: string[];
  solucoesIndicadas: string[];
  produtosAplicaveis: string[] | { grupo: string; produtos: string[] }[];
  marcas: string[];
  cta: string;
  whatsappMessage: string;
};

export const solucoesPorNicho: Record<string, SolucaoPorNicho> = {
  "industrias-farmaceuticas-processos-industriais": {
    slug: "industrias-farmaceuticas-processos-industriais",
    segmento: "Indústrias farmacêuticas e processos industriais",
    grupo: "Ambientes Críticos e Técnicos",
    imageUrl: "/projects/brainfarma.jpg",
    ctaImageUrl: "/produtos/unidade-tratamento-ar/uta_tkz.webp",
    hero: {
      titulo: "Soluções HVAC para indústrias farmacêuticas e processos industriais",
      textoCurto: "Soluções para ambientes críticos, salas limpas, processos produtivos e controle rigoroso de temperatura, umidade, pressão e qualidade do ar.",
      textoApoio: [
        "Ambientes industriais exigem precisão, confiabilidade e controle. Fornecemos soluções completas para climatização de processos, salas limpas, áreas produtivas e sistemas HVAC industriais, integrando geração de frio, tratamento de ar, filtragem, distribuição, hidráulica e isolamento técnico."
      ]
    },
    principaisDores: [
      "Controle de contaminação.",
      "Estabilidade térmica do processo.",
      "Filtragem fina, HEPA ou absoluta.",
      "Pressurização e cascata de pressão.",
      "Redundância operacional.",
      "Redução de parada de produção.",
      "Eficiência energética em operação contínua.",
      "Conformidade técnica e documentação."
    ],
    solucoesIndicadas: [
      "Sistemas de água gelada.",
      "Unidades de tratamento de ar.",
      "Salas limpas e áreas classificadas.",
      "Filtragem HEPA/ULPA.",
      "Exaustão e renovação de ar.",
      "Dutos pré-isolados ou metálicos.",
      "Balanceamento hidráulico e de ar.",
      "Isolamento térmico para tubulações e equipamentos.",
      "Torres, chillers, bombas e válvulas."
    ],
    produtosAplicaveis: [
      "Chiller à água",
      "Chiller à ar",
      "Torres de resfriamento",
      "Condensadores evaporativos",
      "Fan coils",
      "UTAs",
      "Filtros G4, M5, F7, F8, F9, H13 e H14",
      "Módulos HEPA",
      "Difusores especiais",
      "Dampers",
      "Dutos PIR",
      "Dutos em chapa",
      "Ventiladores industriais",
      "Exaustores",
      "Bombas",
      "Válvulas de controle",
      "Válvulas de balanceamento",
      "Espuma elastomérica",
      "Alumínio liso/corrugado",
      "Lã de rocha",
      "Fibra cerâmica"
    ],
    marcas: ["TROX", "EVAPCO", "Daikin", "Armstrong", "Rocktec", "Armacell", "Projelmec"],
    cta: "Solicitar orçamento para indústrias farmacêuticas e processos industriais",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Indústrias Farmacêuticas e Processos Industriais."
  },
  "hospitais-clinicas": {
    slug: "hospitais-clinicas",
    segmento: "Hospitais, centros clínicos e clínicas",
    grupo: "Ambientes Críticos e Técnicos",
    imageUrl: "/projects/df-star.jpg",
    ctaImageUrl: "/produtos/torre_de_resfriamento.webp",
    hero: {
      titulo: "Soluções HVAC para hospitais, centros clínicos e clínicas",
      textoCurto: "Soluções para climatização hospitalar, conforto de pacientes, controle de qualidade do ar e ambientes de saúde com exigência técnica elevada.",
      textoApoio: [
        "Atendemos hospitais, clínicas e centros médicos com soluções HVAC voltadas à segurança, conforto, qualidade do ar e operação contínua, desde a central de água gelada até a filtragem terminal e a distribuição de ar nos ambientes críticos."
      ]
    },
    principaisDores: [
      "Controle de infecção.",
      "Conforto térmico para pacientes e equipes.",
      "Pressão positiva ou negativa conforme ambiente.",
      "Filtragem adequada.",
      "Renovação de ar.",
      "Operação contínua.",
      "Manutenção e PMOC.",
      "Baixo ruído.",
      "Confiabilidade do sistema."
    ],
    solucoesIndicadas: [
      "Água gelada hospitalar.",
      "VRV/VRF para clínicas e áreas administrativas.",
      "Fan coils hospitalares.",
      "UTAs com múltiplos estágios de filtragem.",
      "Filtragem absoluta HEPA.",
      "Exaustão de áreas contaminadas.",
      "Renovação de ar.",
      "Difusão hospitalar.",
      "Dutos e dampers.",
      "Balanceamento hidráulico.",
      "Isolamento térmico e acústico."
    ],
    produtosAplicaveis: [
      "Chillers",
      "Torres de resfriamento",
      "Fan coils",
      "Fancoletes",
      "VRV/VRF",
      "Mini-splits para áreas administrativas",
      "Filtros grossos, médios, finos e absolutos",
      "Filtros antimicrobianos",
      "Caixas de filtragem",
      "Difusores",
      "Grelhas",
      "Venezianas",
      "Dampers",
      "Dutos pré-isolados",
      "Dutos metálicos",
      "Bombas",
      "Válvulas",
      "Isolamento elastomérico",
      "Lã de vidro",
      "Lã de rocha"
    ],
    marcas: ["TROX", "Daikin", "EVAPCO", "Armstrong", "Rocktec", "Armacell"],
    cta: "Solicitar orçamento para hospitais, centros clínicos e clínicas",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Hospitais e Clínicas."
  },
  "shopping-centers": {
    slug: "shopping-centers",
    segmento: "Shopping Centers",
    grupo: "Grandes Edificações Comerciais",
    imageUrl: "/projects/orion-complex.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/vrv-inova.webp",
    hero: {
      titulo: "Soluções HVAC para shopping centers",
      textoCurto: "Soluções para grandes áreas comerciais com alta circulação de pessoas, consumo energético elevado e necessidade de operação contínua.",
      textoApoio: [
        "Para shopping centers, entregamos soluções de climatização, ventilação e distribuição de ar pensadas para conforto, eficiência energética, operação contínua e facilidade de manutenção em grandes áreas de circulação."
      ]
    },
    principaisDores: [
      "Alto consumo de energia.",
      "Conforto térmico em grandes áreas.",
      "Setorização por lojas e áreas comuns.",
      "Renovação de ar.",
      "Exaustão de garagens, sanitários e praças de alimentação.",
      "Manutenção sem interromper operação.",
      "Retrofit de sistemas antigos.",
      "Controle de vazão e balanceamento."
    ],
    solucoesIndicadas: [
      "Centrais de água gelada.",
      "Torres de resfriamento.",
      "Fan coils.",
      "Sistemas VRV/VRF para lojas.",
      "Difusão de ar para grandes vãos.",
      "Dutos metálicos ou pré-isolados.",
      "Ventilação e exaustão.",
      "Filtragem.",
      "Bombas e válvulas.",
      "Isolamento térmico.",
      "Pressurização de escadas."
    ],
    produtosAplicaveis: [
      "Chiller à água",
      "Chiller à ar",
      "Torres de resfriamento",
      "Fan coils",
      "VRV/VRF",
      "Split de alta capacidade",
      "Grelhas",
      "Difusores lineares e de longo alcance",
      "Venezianas",
      "Dampers",
      "VAV/CAV",
      "Dutos",
      "Exaustores",
      "Ventiladores",
      "Filtros",
      "Bombas",
      "Válvulas de balanceamento",
      "Isolamento para água gelada e dutos"
    ],
    marcas: ["Daikin", "EVAPCO", "TROX", "Armstrong", "Rocktec", "Armacell", "Sicflux", "Projelmec"],
    cta: "Solicitar orçamento para shopping centers",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Shopping Centers."
  },
  "hoteis": {
    slug: "hoteis",
    segmento: "Hotéis",
    grupo: "Grandes Edificações Comerciais",
    imageUrl: "/projects/castros-hotel.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/cassete.webp",
    hero: {
      titulo: "Soluções HVAC para hotéis",
      textoCurto: "Soluções para conforto térmico, baixo ruído, eficiência energética e controle individual por ambiente.",
      textoApoio: [
        "Soluções HVAC para hotéis, resorts e empreendimentos de hospedagem, com foco em conforto, silêncio, controle individual, eficiência energética e integração estética aos ambientes."
      ]
    },
    principaisDores: [
      "Conforto dos hóspedes.",
      "Baixo nível de ruído.",
      "Controle individual por quarto.",
      "Eficiência energética.",
      "Manutenção rápida.",
      "Estética dos ambientes.",
      "Renovação de ar.",
      "Operação 24 horas."
    ],
    solucoesIndicadas: [
      "VRV/VRF para quartos e áreas comuns.",
      "Água gelada para hotéis maiores.",
      "Fancoletes.",
      "Mini-splits e multi-splits.",
      "Renovação de ar.",
      "Exaustão de banheiros.",
      "Exaustão de cozinhas.",
      "Difusão de ar discreta.",
      "Dutos e isolamento acústico/térmico.",
      "Bombas e válvulas."
    ],
    produtosAplicaveis: [
      "VRV/VRF",
      "Multi-split",
      "Mini-split hi-wall",
      "Cassete",
      "Dutado",
      "Piso-teto",
      "Fancoletes",
      "Fan coils",
      "Chillers",
      "Grelhas",
      "Difusores lineares e quadrados",
      "Dutos flexíveis",
      "Dutos PIR",
      "Exaustores",
      "Ventiladores",
      "Filtros",
      "Isolamento elastomérico",
      "Suportes",
      "Bombas de dreno",
      "Controles"
    ],
    marcas: ["Daikin", "TROX", "Sicflux", "Rocktec", "Armacell", "Armstrong"],
    cta: "Solicitar orçamento para hotéis",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Hotéis."
  },
  "predios-comerciais": {
    slug: "predios-comerciais",
    segmento: "Prédios comerciais",
    grupo: "Grandes Edificações Comerciais",
    imageUrl: "/projects/po-700.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/vrv6_1.webp",
    hero: {
      titulo: "Soluções HVAC para prédios comerciais",
      textoCurto: "Soluções para edifícios corporativos, lajes comerciais, escritórios, sedes administrativas e retrofit de sistemas existentes.",
      textoApoio: [
        "Oferecemos soluções para edifícios comerciais com foco em conforto, economia de energia, flexibilidade de ocupação e integração entre climatização, ventilação, difusão, filtragem e controle hidráulico."
      ]
    },
    principaisDores: [
      "Eficiência energética.",
      "Flexibilidade de ocupação.",
      "Controle por zonas.",
      "Conforto térmico.",
      "Qualidade do ar.",
      "Redução de custo operacional.",
      "Retrofit com menor interferência na operação.",
      "Medição e balanceamento."
    ],
    solucoesIndicadas: [
      "VRV/VRF.",
      "Água gelada.",
      "Chillers.",
      "Fan coils.",
      "Fancoletes.",
      "VAV/CAV.",
      "Difusão de ar.",
      "Dutos.",
      "Filtragem.",
      "Renovação de ar.",
      "Bombas e válvulas.",
      "Isolamento térmico."
    ],
    produtosAplicaveis: [
      "VRV/VRF",
      "Chiller à ar",
      "Chiller à água",
      "Mini chiller",
      "Fan coils",
      "Fancoletes",
      "Grelhas",
      "Difusores",
      "VAV",
      "Dampers",
      "Venezianas",
      "Filtros",
      "Dutos pré-isolados",
      "Dutos metálicos",
      "Bombas",
      "Válvulas PICV",
      "Válvulas de controle",
      "Espuma elastomérica",
      "Suportes e acessórios"
    ],
    marcas: ["Daikin", "TROX", "Armstrong", "Rocktec", "Armacell", "Sicflux"],
    cta: "Solicitar orçamento para prédios comerciais",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Prédios Comerciais."
  },
  "instaladoras-construtoras": {
    slug: "instaladoras-construtoras",
    segmento: "Instaladoras e construtoras",
    grupo: "Obras, Instalações e Construção",
    imageUrl: "/about/about1.jpeg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/hi-wall.webp",
    hero: {
      titulo: "Soluções HVAC para instaladoras e construtoras",
      textoCurto: "Fornecimento técnico e comercial para empresas de instalação, obras e construtoras que precisam de equipamentos, materiais e acessórios confiáveis para execução HVAC.",
      textoApoio: [
        "Não se compra só a solução final, compra-se portfólio, disponibilidade, prazo, suporte técnico e preço competitivo.",
        "Atendemos instaladoras e construtoras com portfólio completo para execução de sistemas HVAC, oferecendo equipamentos, acessórios, suporte técnico e materiais complementares para reduzir compras fragmentadas e aumentar a produtividade em obra."
      ]
    },
    principaisDores: [
      "Prazo de entrega.",
      "Falta de material em obra.",
      "Compatibilidade entre produtos.",
      "Suporte técnico para seleção.",
      "Preço competitivo.",
      "Padronização de fornecedores.",
      "Compra de kits completos.",
      "Redução de retrabalho."
    ],
    solucoesIndicadas: [
      "Kits para instalação VRV/VRF.",
      "Kits para mini-split.",
      "Kits de dutos e difusão.",
      "Kits para água gelada.",
      "Kits de isolamento.",
      "Kits de ventilação.",
      "Fornecimento de equipamentos principais.",
      "Fornecimento de acessórios e consumíveis."
    ],
    produtosAplicaveis: [
      "VRV/VRF",
      "Mini-splits",
      "Multi-splits",
      "Splitão",
      "Chillers",
      "Fancoils",
      "Fancoletes",
      "Tubo de cobre",
      "Isolamento elastomérico",
      "Dutos PIR e flexíveis",
      "Grelhas e difusores",
      "Venezianas e dampers",
      "Filtros",
      "Bombas e válvulas",
      "Suportes e fitas",
      "Adesivos, selantes e consumíveis"
    ],
    marcas: ["Daikin", "Rocktec", "Armacell", "TROX", "Armstrong", "Sicflux", "Projelmec"],
    cta: "Solicitar orçamento para instaladoras e construtoras",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Instaladoras e Construtoras."
  },
  "governamental-institucional": {
    slug: "governamental-institucional",
    segmento: "Governamental e institucional",
    grupo: "Grandes Edificações Comerciais",
    imageUrl: "/projects/senado.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/vrv-fit.webp",
    hero: {
      titulo: "Soluções HVAC para ambientes governamentais e institucionais",
      textoCurto: "Soluções robustas para prédios públicos, autarquias, universidades, centros administrativos, tribunais, escolas técnicas e instituições.",
      textoApoio: [
        "Soluções HVAC para instituições públicas e privadas que demandam confiabilidade, documentação técnica, eficiência energética, facilidade de manutenção e atendimento a diferentes perfis de edificação."
      ]
    },
    principaisDores: [
      "Conformidade técnica.",
      "Robustez dos equipamentos.",
      "Padronização de sistemas.",
      "Exigência de documentação.",
      "Eficiência energética.",
      "Manutenção facilitada.",
      "Compra por licitação.",
      "Longa vida útil.",
      "Assistência técnica dedicada."
    ],
    solucoesIndicadas: [
      "Sistemas de água gelada.",
      "VRV/VRF.",
      "Mini-splits.",
      "Ventilação e renovação de ar.",
      "Filtragem.",
      "Difusão de ar.",
      "Exaustão.",
      "Dutos.",
      "Bombas e válvulas.",
      "Isolamento.",
      "Retrofit de sistemas antigos."
    ],
    produtosAplicaveis: [
      "Chillers",
      "Torres de resfriamento",
      "VRV/VRF",
      "Mini-splits",
      "Fan coils",
      "Fancoletes",
      "Ventiladores e exaustores",
      "Filtros de ar",
      "Difusores e grelhas",
      "Dampers",
      "Dutos de distribuição",
      "Bombas e válvulas",
      "Isolamento térmico",
      "Suportes e acessórios de instalação"
    ],
    marcas: ["Daikin", "EVAPCO", "TROX", "Armstrong", "Sicflux", "Projelmec", "Rocktec", "Armacell"],
    cta: "Solicitar orçamento para governamental e institucional",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Ambientes Governamentais e Institucionais."
  },
  "residencial-alto-padrao": {
    slug: "residencial-alto-padrao",
    segmento: "Residencial de alto padrão",
    grupo: "Ambientes de Conforto e Experiência",
    imageUrl: "/projects/casa-alto-padrao.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/vrv-s.webp",
    hero: {
      titulo: "Soluções HVAC para residências de alto padrão",
      textoCurto: "Soluções premium de climatização, conforto térmico, renovação de ar e integração arquitetônica para residências de alto padrão.",
      textoApoio: [
        "Projetos residenciais de alto padrão exigem climatização silenciosa, eficiente e integrada à arquitetura. Oferecemos soluções completas para conforto térmico, renovação de ar, qualidade do ar e acabamento premium."
      ]
    },
    principaisDores: [
      "Estética do projeto.",
      "Baixo nível de ruído.",
      "Conforto térmico por ambiente.",
      "Automação integrada.",
      "Ocultação de equipamentos.",
      "Renovação de ar.",
      "Qualidade do ar interno.",
      "Eficiência energética.",
      "Baixa manutenção.",
      "Compatibilização com arquitetura e design de interiores."
    ],
    solucoesIndicadas: [
      "VRV/VRF.",
      "Multi-split.",
      "Mini-split premium.",
      "Unidades dutadas.",
      "Difusores lineares.",
      "Grelhas discretas.",
      "Dutos pré-isolados.",
      "Renovação de ar filtrada.",
      "Exaustão de banheiros, cozinhas e áreas técnicas.",
      "Isolamento térmico e acústico.",
      "Automação e controles.",
      "Suportes e drenagem."
    ],
    produtosAplicaveis: [
      "VRV/VRF",
      "Multi-split",
      "Hi-wall",
      "Cassete",
      "Dutado",
      "Piso-teto",
      "Dutos PIR e flexíveis",
      "Difusores lineares",
      "Grelhas de retorno e venezianas",
      "Filtros e purificadores",
      "Exaustores e ventiladores",
      "Espuma elastomérica",
      "Bombas de dreno",
      "Suportes e controles"
    ],
    marcas: ["Daikin", "TROX", "Rocktec", "Armacell", "Sicflux"],
    cta: "Solicitar orçamento para residencial de alto padrão",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Residências de Alto Padrão."
  },
  "escolas-centros-ensino": {
    slug: "escolas-centros-ensino",
    segmento: "Escolas e centros de ensino",
    grupo: "Ambientes de Conforto e Experiência",
    imageUrl: "/projects/academia-pf.jpg",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/cassete-round-flow.webp",
    hero: {
      titulo: "Soluções HVAC para escolas e centros de ensino",
      textoCurto: "Soluções para conforto térmico, renovação de ar, qualidade do ar e eficiência operacional em ambientes educacionais.",
      textoApoio: [
        "Ambientes educacionais precisam de climatização eficiente, renovação de ar e baixo ruído para promover conforto e produtividade. Fornecemos soluções para salas de aula, auditórios, bibliotecas, laboratórios e áreas administrativas."
      ]
    },
    principaisDores: [
      "Ambientes cheios e abafados.",
      "Renovação de ar insuficiente.",
      "Poluição sonora e ruídos.",
      "Alto consumo de energia.",
      "Manutenção simples e rápida.",
      "Conforto de alunos e professores.",
      "Salas com uso intermitente.",
      "Auditórios e laboratórios com demandas térmicas diferentes."
    ],
    solucoesIndicadas: [
      "Mini-splits.",
      "VRV/VRF.",
      "Água gelada para campus maiores.",
      "Renovação de ar.",
      "Filtragem.",
      "Exaustão de sanitários.",
      "Difusão de ar.",
      "Dutos.",
      "Ventiladores.",
      "Controles por ambiente."
    ],
    produtosAplicaveis: [
      "Mini-split hi-wall",
      "Cassete e piso-teto",
      "VRV/VRF",
      "Fan coils e fancoletes",
      "Filtros e purificadores",
      "Grelhas e difusores",
      "Dutos flexíveis e PIR",
      "Exaustores e ventiladores",
      "Venezianas e dampers",
      "Isolamento e suportes"
    ],
    marcas: ["Daikin", "TROX", "Sicflux", "Rocktec", "Armacell"],
    cta: "Solicitar orçamento para escolas e centros de ensino",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Escolas e Centros de Ensino."
  },
  "academias-centros-fitness": {
    slug: "academias-centros-fitness",
    segmento: "Academias e centros fitness",
    grupo: "Ambientes de Conforto e Experiência",
    imageUrl: "/projects/canpack.jpg",
    ctaImageUrl: "/produtos/split-inverter.webp",
    hero: {
      titulo: "Soluções HVAC para academias e centros fitness",
      textoCurto: "Soluções para ambientes com alta carga térmica, grande ocupação, odor, umidade e necessidade intensa de renovação de ar.",
      textoApoio: [
        "Academias exigem climatização potente, renovação de ar eficiente e controle de odores e umidade. Fornecemos soluções para áreas de musculação, salas coletivas, recepção, vestiários e ambientes de alta ocupação."
      ]
    },
    principaisDores: [
      "Alta ocupação de alunos.",
      "Carga térmica muito elevada.",
      "Odor corporal e de suor.",
      "Umidade elevada no ar.",
      "Necessidade de alta renovação de ar.",
      "Exaustão de vestiários e sanitários.",
      "Conforto sem jato de ar direto.",
      "Consumo de energia expressivo.",
      "Operação em horários prolongados."
    ],
    solucoesIndicadas: [
      "VRV/VRF.",
      "Split de alta capacidade.",
      "Chiller para grandes academias.",
      "Renovação de ar.",
      "Exaustão de vestiários e sanitários.",
      "Filtragem.",
      "Difusão de ar de alta indução.",
      "Dutos.",
      "Ventilação complementar.",
      "Isolamento acústico/térmico."
    ],
    produtosAplicaveis: [
      "VRV/VRF",
      "Splitão",
      "Mini-split piso-teto",
      "Cassete e dutado",
      "Chiller à ar",
      "Fan coils",
      "Filtros e purificadores",
      "Difusores de alta indução",
      "Difusores lineares e grelhas",
      "Venezianas",
      "Exaustores e ventiladores",
      "Dutos e dampers",
      "Isolamento e suportes"
    ],
    marcas: ["Daikin", "TROX", "Sicflux", "Projelmec", "Rocktec", "Armacell"],
    cta: "Solicitar orçamento para academias e centros fitness",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Academias e Centros Fitness."
  },
  "restaurantes": {
    slug: "restaurantes",
    segmento: "Restaurantes",
    grupo: "Ambientes de Conforto e Experiência",
    imageUrl: "/about/office-inside.webp",
    ctaImageUrl: "/produtos/climatizacao-equipamentos/vrv-w.webp",
    hero: {
      titulo: "Soluções HVAC para restaurantes",
      textoCurto: "Soluções para climatização de salões, exaustão de cozinhas, renovação de ar e conforto dos clientes.",
      textoApoio: [
        "Restaurantes precisam equilibrar conforto no salão, exaustão eficiente na cozinha e renovação de ar adequada. Fornecemos soluções para climatização, ventilação, filtragem, dutos, difusão e controle de odores."
      ]
    },
    principaisDores: [
      "Calor intenso vindo da cozinha.",
      "Gordura em suspensão e odores.",
      "Exaustão ineficiente.",
      "Falta de reposição de ar externo.",
      "Falta de conforto térmico no salão.",
      "Poluição sonora e ruído de ventiladores.",
      "Estética do ambiente.",
      "Portas de entrada abrindo constantemente.",
      "Alto consumo energético.",
      "Necessidade de manutenção frequente."
    ],
    solucoesIndicadas: [
      "Climatização do salão.",
      "Renovação de ar.",
      "Exaustão de cozinha com captação de gordura.",
      "Reposição de ar externo.",
      "Filtragem avançada.",
      "Difusão de ar discreta.",
      "Dutos e dampers.",
      "Ventilação de áreas técnicas.",
      "Isolamento térmico.",
      "Suportes e acessórios."
    ],
    produtosAplicaveis: [
      "Mini-splits",
      "Cassete e piso-teto",
      "Dutado",
      "VRV/VRF",
      "Splitão",
      "Exaustores e ventiladores",
      "Gabinetes de ventilação",
      "Filtros de ar e de carvão ativado",
      "Grelhas e difusores",
      "Venezianas e dampers",
      "Dutos metálicos e flexíveis",
      "Isolamento térmico",
      "Suportes e bombas de dreno"
    ],
    marcas: ["Daikin", "TROX", "Sicflux", "Projelmec", "Rocktec", "Armacell"],
    cta: "Solicitar orçamento para restaurantes",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Restaurantes."
  },
  "data-centers-missao-critica": {
    slug: "data-centers-missao-critica",
    segmento: "Data Centers e Ambientes de Missão Crítica",
    grupo: "Ambientes Críticos e Técnicos",
    imageUrl: "/projects/multibrasil.jpg",
    ctaImageUrl: "/produtos/refrigeracao-alta-perfomace/chiller-ual.webp",
    hero: {
      titulo: "Soluções HVAC para data centers e ambientes de missão crítica",
      textoCurto: "Soluções para climatização de precisão, continuidade operacional, eficiência energética e controle térmico em data centers, salas de TI, edge data centers, NOC e salas de servidores.",
      textoApoio: [
        "A ASHRAE mantém uma série técnica específica para data centers e publicou o ANSI/ASHRAE Standard 90.4-2025 — Energy Standard for Data Centers, além de materiais sobre diretrizes térmicas, edge computing e expansão de liquid cooling em data centers.",
        "Data centers exigem climatização de precisão, alta disponibilidade e eficiência energética. Fornecemos soluções completas para ambientes de missão crítica, integrando geração de frio, rejeição de calor, unidades de precisão, hidráulica, filtragem, distribuição de ar, dutos, isolamento e acessórios técnicos."
      ]
    },
    principaisDores: [
      "Controle preciso de temperatura.",
      "Controle fino de umidade.",
      "Evitar hotspots em racks de servidores.",
      "Operação contínua 24/7 sem interrupções.",
      "Redundância do sistema N+1, N+2 ou 2N.",
      "Eficiência energética elevada (redução de PUE).",
      "Alta carga térmica por metro quadrado.",
      "Crescimento de cargas de IA, GPU e HPC (alta densidade).",
      "Filtragem para proteção contra partículas e poeira.",
      "Rejeição de calor externa confiável.",
      "Manutenção preventiva sem paradas no sistema.",
      "Monitoramento e controle integrado das condições.",
      "Compatibilidade com expansão futura de capacidade."
    ],
    solucoesIndicadas: [
      "Sistemas de água gelada para data center.",
      "Chillers de alta eficiência.",
      "Chillers com free cooling inteligente.",
      "CRAH/CRAC dedicados.",
      "Fan walls e unidades de precisão.",
      "Torres de resfriamento e dry coolers.",
      "Fluid coolers industriais.",
      "Bombas de água gelada com inversor.",
      "Válvulas de controle e balanceamento PICV.",
      "Filtragem de ar para salas técnicas.",
      "Contenção de corredor frio / corredor quente.",
      "Difusão e retorno de ar eficientes.",
      "Isolamento térmico de tubulações com barreira de vapor.",
      "Detecção e controle de vazamentos.",
      "Infraestrutura preparada para expansão de capacidade térmica."
    ],
    produtosAplicaveis: [
      {
        grupo: "Geração e rejeição de calor",
        produtos: [
          "Chiller à água",
          "Chiller à ar",
          "Chiller modular",
          "Chiller com free cooling",
          "Torres de resfriamento",
          "Dry coolers",
          "Fluid coolers",
          "Condensadores evaporativos",
          "Trocadores de calor"
        ]
      },
      {
        grupo: "Unidades de precisão e tratamento de ar",
        produtos: [
          "CRAH — Computer Room Air Handler",
          "CRAC — Computer Room Air Conditioner",
          "Fan coils de alta capacidade",
          "Unidades de tratamento de ar (UTAs)",
          "Fan walls",
          "Serpentinas",
          "Gabinetes de ventilação",
          "Plenums",
          "Sistemas de insuflamento e retorno"
        ]
      },
      {
        grupo: "Hidráulica e controle",
        produtos: [
          "Bombas centrífugas e inline",
          "Bombas com inversor de frequência",
          "Bombas redundantes",
          "Válvulas de balanceamento",
          "Válvulas PICV (pressão independente)",
          "Válvulas de controle modulante",
          "Válvulas de bloqueio e retenção",
          "Filtros Y",
          "Manômetros e termômetros",
          "Medidores de vazão e sensores diferenciais"
        ]
      },
      {
        grupo: "Filtragem e qualidade do ar",
        produtos: [
          "Pré-filtros e filtros plissados",
          "Filtros bolsa e filtros finos",
          "Filtros compactos e V-bank",
          "Filtros HEPA absolutos",
          "Filtros de carvão ativado / fase gasosa",
          "Caixas e módulos de filtragem"
        ]
      },
      {
        grupo: "Distribuição de ar, dutos e difusão",
        produtos: [
          "Dutos metálicos",
          "Dutos pré-isolados",
          "Dutos de retorno",
          "Dampers de regulagem e motorizados",
          "Venezianas, grelhas e difusores",
          "Acessórios de vedação e portas de inspeção",
          "Suportes para dutos"
        ]
      },
      {
        grupo: "Isolamento térmico e infraestrutura",
        produtos: [
          "Espuma elastomérica para água gelada",
          "Isolamento para tubulação de condensação e válvulas",
          "Lã de vidro e lã de rocha",
          "Revestimento em alumínio",
          "Barreira de vapor e suportes isolados",
          "Juntas flexíveis e coxins antivibração",
          "Bandejas de drenagem"
        ]
      }
    ],
    marcas: ["Daikin", "EVAPCO", "TROX", "Armstrong", "AAF", "Rocktec", "Armacell", "Projelmec", "Sicflux"],
    cta: "Solicitar orçamento para data centers e ambientes de missão crítica",
    whatsappMessage: "Olá! Gostaria de falar com um especialista sobre soluções de HVAC para Data Centers e Ambientes de Missão Crítica."
  }
};
