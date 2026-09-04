import { StaticImageData } from "next/image";

// 1. Climatização e Equipamentos
import vrvFitImg from "../../produtos/climatizacao-equipamentos/vrv-fit.webp";
import vrv6Img from "../../produtos/climatizacao-equipamentos/vrv6_1.webp";
import vrvwImg from "../../produtos/climatizacao-equipamentos/vrv-w.webp";
import vrvInovaImg from "../../produtos/climatizacao-equipamentos/vrv-inova.webp";
import vrvSImg from "../../produtos/climatizacao-equipamentos/vrv-s.webp";
import fancoleteImg from "../../produtos/climatizacao-equipamentos/fancolete-duto-fww.webp";
import fancoleteFwcImg from "../../produtos/climatizacao-equipamentos/fancolete-duto-fwc.webp";
import fancoleteFwdhImg from "../../produtos/climatizacao-equipamentos/fancolete-hospitalar-fwdh.webp";
import casseteImg from "../../produtos/climatizacao-equipamentos/cassete.webp";
import cassete1viaImg from "../../produtos/climatizacao-equipamentos/cassete-1via.webp";
import casseteRoundFlowImg from "../../produtos/climatizacao-equipamentos/cassete-round-flow.webp";
import hiWallImg from "../../produtos/climatizacao-equipamentos/hi-wall.webp";

// 2. Refrigeração de Alta Performance
import chillerParafusoImg from "../../produtos/refrigeracao-alta-perfomace/chiller-parafuso.webp";
import chillerUalImg from "../../produtos/refrigeracao-alta-perfomace/chiller-ual.webp";
import miniChillerDaikinImg from "../../produtos/refrigeracao-alta-perfomace/mini-chiller-daikin.webp";
import torreEvapcoImg from "../../produtos/refrigeracao-alta-perfomace/torre-de-resfriamento.webp";

// 3. Exaustão e Ventilação
import exaustorAci250Img from "../../produtos/exaustao-e-ventilacao/exaustor_aci_250_sicflux.webp";
import exaustorSonora18Img from "../../produtos/exaustao-e-ventilacao/exaustor_banheiro_sicflux_sonora_18_silencioso_bivolt.webp";
import exaustorMega34Img from "../../produtos/exaustao-e-ventilacao/exaustor_sicflux_mega_34_bivolt_silencioso_para_banheiro.webp";
import exaustorMaxx100Img from "../../produtos/exaustao-e-ventilacao/exaustor-axial-in-line-maxx_100_sicflux.webp";
import gabineteFh315Img from "../../produtos/exaustao-e-ventilacao/gabinete_de_ventilacao_sicflux_fh_315_com_filtros_g4_m5_220v.webp";

// 4. Difusão e Controle de Ar
import damperRgBImg from "../../produtos/difusao-controle-ar/damper_de_regulagem_leve_com_aletas_convergentes_rg_b.webp";
import grelhaMultivac100Img from "../../produtos/difusao-controle-ar/grelha_com_aletas_fixas_100_multivac_com_tela_anti_inseto.webp";
import grelhaTroxAtAgImg from "../../produtos/difusao-controle-ar/grelha_de_insuflamento_trox_at_ag.webp";
import grelhaTroxVatDgImg from "../../produtos/difusao-controle-ar/grelha_de_insuflamento_trox_vat_dg.webp";
import grelhaTroxArAImg from "../../produtos/difusao-controle-ar/grelha_de_retorno_trox_ar_a.webp";
import grelhaTroxArAgImg from "../../produtos/difusao-controle-ar/grelha_de_retorno_trox_ar_ag.webp";
import grelhaSicfluxGvaf125Img from "../../produtos/difusao-controle-ar/grelha_de_saida_de_ar_auto_fechante_gvaf_125_sicflux.webp";
import grelhaSicfluxGfmT200Img from "../../produtos/difusao-controle-ar/grelha_metalica_fixa_sicflux_gfm_t_200_com_tela_anti_inseto_4_furos.webp";
import grelhaSicfluxGfmC150Img from "../../produtos/difusao-controle-ar/grelha_metalica_sicflux_gfm_c_150_com_colarinho.webp";
import grelhaSicfluxS2525Img from "../../produtos/difusao-controle-ar/grelha_quadrada_de_sobrepor_s2525_sicflux_abs_e_anti_uv_teto_parede.webp";
import grelhaSicfluxRedondaImg from "../../produtos/difusao-controle-ar/grelha_redonda_fixa_com_colarinho_sicflux.webp";
import grelhaTroxAwkImg from "../../produtos/difusao-controle-ar/grelha_veneziana_de_retorno_trox_awk.webp";
import reguladorSicfluxRva200Img from "../../produtos/difusao-controle-ar/regulador_de_vazao_de_ar_rva_200_sicflux_para_instalacao_em_teto_plastico_abs_encaixe_ajustavel.webp";

// 5. Dutos e Conexões
import dutoFlexivelSemIsolamentoImg from "../../produtos/dutos-e-conexoes/duto_flexivel_sem_isolamento_rocktec_ventilacao_e_exaustao.webp";
import dutoFlexivelComIsolamentoImg from "../../produtos/dutos-e-conexoes/duto_flexvel_com_isolamento_rolo.webp";
import dutoIsodec16MultivacImg from "../../produtos/dutos-e-conexoes/duto_flexvel_isodec_16_multivac.webp";
import tuboSemiRigidoTsrImg from "../../produtos/dutos-e-conexoes/tubo_semi_rigido_tsr_sicflux.webp";

// 6. Isolamento e Vedação
import fitaAluminizadaRetecImg from "../../produtos/isolamento-e-vedacao/180_fita_aluminizada_48mm_x_45m_retec.webp";
import fitaAluminioPirImg from "../../produtos/isolamento-e-vedacao/180_fita_de_alumnio_pir_50mm_x_50m.webp";
import fitaArquearAluminioImg from "../../produtos/isolamento-e-vedacao/180_fita_de_arquear_em_alumnio_127_x_100000_x_05_mm.webp";
import fitaArmaflexAfImg from "../../produtos/isolamento-e-vedacao/fita_autoadesiva_armacell_armaflex_af.webp";
import fitaVedacaoPolietilenoImg from "../../produtos/isolamento-e-vedacao/fita_de_vedao_em_polietileno_20x4mm_rolo_10m.webp";
import mantaLaRochaTf32Img from "../../produtos/isolamento-e-vedacao/manta_em_la_de_rocha_tf_32.webp";
import mantaArmaflexAfbrImg from "../../produtos/isolamento-e-vedacao/manta_isolante_elastomrica_armaflex_afbr.webp";
import tuboArmaflexAfImg from "../../produtos/isolamento-e-vedacao/tubo_isolante_elastomerico_armaflex_af_armacell.webp";

// 7. Filtragem e Qualidade do Ar
import caixaFiltroFilboxImg from "../../produtos/filtragem-qualidade-ar/caixa_de_filtro_filbox_red_g4_f8_sicflux.webp";
import filtroPlissadoTroxImg from "../../produtos/filtragem-qualidade-ar/filtro_medio_m5_f754_590x550x48_trox.webp";
import bagInBagOutImg from "../../produtos/filtragem-qualidade-ar/bag_in_bag_out.webp";
import cabineFluxoLamimnarImg from "../../produtos/filtragem-qualidade-ar/cabine_fluxo_laminar.webp";

// 8. Acessórios e Fixação
import manometroGlicerinaImg from "../../produtos/acessorios/manometro_com_glicerina_inox_dn100_0_10_bar_0_150_psi_rosca_1_2_inferior.webp";

export interface Product {
  titulo: string;
  descricao: string;
  excelentePara: string;
  imagem: StaticImageData;
}

export interface TabCategory {
  nome: string;
  produtos: Product[];
}

export interface CategoryProductsData {
  tabs?: TabCategory[];
  produtos?: Product[];
}

export const produtosPorCategoria: Record<string, CategoryProductsData> = {
  "expansao-direta": {
    tabs: [
      {
        nome: "VRV",
        produtos: [
          {
            titulo: "Daikin VRV Fit",
            descricao: "O VRV Fit Daikin representa a sofisticação que você merece, aliada à constante inovação da maior empresa de ar-condicionado do mundo.",
            excelentePara: "Lojas, escritórios e residências de alto padrão",
            imagem: vrvFitImg
          },
          {
            titulo: "Daikin VRV 6",
            descricao: "O VRV 6 Daikin combina alta eficiência, confiabilidade e flexibilidade de instalação, oferecendo uma solução avançada para projetos de climatização comercial e corporativa.",
            excelentePara: "Proprietários, projetistas, instaladores e gestores prediais.",
            imagem: vrv6Img
          },
          {
            titulo: "Daikin VRV W",
            descricao: "O VRV-W Daikin é uma solução de climatização ideal para projetos com pouca ou nenhuma área externa disponível. Seu sistema utiliza água para rejeição de calor, oferecendo maior flexibilidade de instalação, eficiência operacional e adaptação a diferentes tipos de edifícios.",
            excelentePara: "Comércios, hospitais, shoppings e prédios.",
            imagem: vrvwImg
          },
          {
            titulo: "Daikin VRV Nova Geração",
            descricao: "A solução VRV Daikin de nova geração (Inova) da Daikin foi projetada para climatização central com alta eficiência, flexibilidade e controle por zonas.",
            excelentePara: "Casas de alto padrão, edifícios comerciais, hotéis e hospitais.",
            imagem: vrvInovaImg
          },
          {
            titulo: "Daikin VRV S",
            descricao: "O VRV-S Daikin combina alta eficiência energética, conforto e instalação flexível em um sistema compacto para diferentes tipos de projeto.",
            excelentePara: "Lojas, escritórios e casas de alto padrão.",
            imagem: vrvSImg
          }
        ]
      },
      {
        nome: "Fancolete",
        produtos: [
          {
            titulo: "Fancolete de Embutir Daikin FWW",
            descricao: "O Fancolete de Slim FWW (Duto) Daikin oferece climatização extremamente silenciosa e discreta. Projetado para instalação acima do gesso, garante distribuição uniforme de ar e alta durabilidade.",
            excelentePara: "Hotéis, escritórios corporativos, hospitais e salas de reunião.",
            imagem: fancoleteImg
          },
          {
            titulo: "Fancolete Daikin FWC",
            descricao: "Fancolete FWC Daikin dutado com operação padrão ou 100% ar externo, ideal para climatização eficiente em ambientes comerciais, hotéis, hospitais e grandes empreendimentos.",
            excelentePara: "Shoppings, hotéis, hospitais, edifícios comerciais e ambientes com pé-direito alto ou necessidade de distribuição de ar por dutos.",
            imagem: fancoleteFwcImg
          },
          {
            titulo: "Fancolete Hospitalar Daikin FWDH",
            descricao: "Fancolete hospitalar FWDH Daikin desenvolvido para qualidade do ar em ambientes críticos, com dupla ou tripla filtragem e controle preciso para aplicações de saúde.",
            excelentePara: "Hospitais, clínicas, laboratórios, centros cirúrgicos, salas limpas e ambientes que precisam de maior controle de qualidade do ar, filtragem e segurança operacional.",
            imagem: fancoleteFwdhImg
          }
        ]
      },
      {
        nome: "Cassete",
        produtos: [
          {
            titulo: "Cassete Daikin 4 Vias",
            descricao: "O Cassete Daikin de 4 Vias proporciona excelente distribuição de fluxo de ar em quatro direções, ideal para climatizar salas amplas com controle inteligente de aletas.",
            excelentePara: "Escritórios, lojas comerciais, clínicas e salas de reunião.",
            imagem: casseteImg
          },
          {
            titulo: "Cassete Daikin 1 Via",
            descricao: "O Cassete Daikin de 1 Via possui design ultra slim de perfil baixo, perfeito para instalação em gessos com espaço de entreforro reduzido, garantindo sofisticação e funcionamento extremamente silencioso.",
            excelentePara: "Apartamentos residenciais, dormitórios de alto padrão e pequenos escritórios.",
            imagem: cassete1viaImg
          },
          {
            titulo: "Cassete Daikin Round Flow",
            descricao: "O Cassete Daikin Round Flow oferece distribuição de ar em 360° com fluxo de ar circular uniforme para eliminar correntes frias e pontos sem climatização. Conta com sensores inteligentes de presença e de piso.",
            excelentePara: "Lojas de varejo, restaurantes, auditórios, recepções e escritórios corporativos de conceito aberto.",
            imagem: casseteRoundFlowImg
          }
        ]
      },
      {
        nome: "Hi-Wall",
        produtos: [
          {
            titulo: "Hi-Wall Daikin Inverter",
            descricao: "O evaporador Hi-Wall Daikin oferece alto conforto térmico com tecnologia avançada de filtragem de ar, baixo consumo elétrico e funcionamento ultra silencioso.",
            excelentePara: "Quartos, salas de estar residenciais, pequenos escritórios e consultórios.",
            imagem: hiWallImg
          }
        ]
      }
    ]
  },
  "agua-gelada-e-rejeicao-de-calor": {
    produtos: [
      {
        titulo: "Chiller Parafuso Daikin",
        descricao: "Chillers com compressor parafuso Daikin oferecem alta eficiência e confiabilidade no resfriamento de água para sistemas de grande porte. Possuem controle preciso de capacidade e baixo nível de ruído, sendo a solução ideal para processos industriais e grandes edificações.",
        excelentePara: "Indústrias farmacêuticas, químicas, shoppings centers, grandes edifícios comerciais e hospitais.",
        imagem: chillerParafusoImg
      },
      {
        titulo: "Chiller Modular UAL Daikin",
        descricao: "O Chiller Modular UAL Daikin é uma solução flexível e altamente eficiente com condensação a ar. Seu design modular permite o acoplamento de múltiplas unidades para expansão do sistema conforme a necessidade da obra, garantindo facilidade de manutenção e economia.",
        excelentePara: "Hotéis, hospitais, prédios comerciais de médio e grande porte, indústrias e projetos com necessidade de expansão modular.",
        imagem: chillerUalImg
      },
      {
        titulo: "Mini Chiller Inverter Daikin",
        descricao: "O Mini Chiller Inverter Daikin oferece alto desempenho e eficiência térmica em um design extremamente compacto. Ideal para residências e comércios de pequeno a médio porte, utiliza tecnologia inverter para otimizar o consumo de energia de forma silenciosa.",
        excelentePara: "Residências de alto padrão, clínicas, escritórios, consultórios e projetos com restrição de espaço externo.",
        imagem: miniChillerDaikinImg
      },
      {
        titulo: "Torre de Resfriamento Evapco",
        descricao: "A Torre de Resfriamento da Evapco possui design moderno e compacto, conta com sistema de distribuição de água por bicos EvapJet™, que garantem distribuição uniforme de água e excelente transferência de calor. O sistema de ventilação é composto por ventilador axial de alta eficiência, que proporciona baixo nível de ruído e alta vazão de ar.",
        excelentePara: "Hotéis, hospitais, prédios comerciais de médio e grande porte, indústrias e projetos com necessidade de restrições de ruído.",
        imagem: torreEvapcoImg
      }
    ]
  },
  "exaustao-e-ventilacao": {
    tabs: [
      {
        nome: "Exaustor",
        produtos: [
          {
            titulo: "Exaustor Centrífugo ACI 250 Sicflux",
            descricao: "O exaustor centrífugo in-line ACI 250 Sicflux é ideal para instalação em redes de dutos de ventilação de médio porte. Desenvolvido para oferecer alta vazão e pressão com baixo nível de ruído, conta com motor de rolamento e carcaça metálica resistente.",
            excelentePara: "Escritórios, comércios, banheiros públicos, salas de reunião e instalações industriais leves.",
            imagem: exaustorAci250Img
          },
          {
            titulo: "Exaustor de Banheiro Sicflux Sonora 18",
            descricao: "O exaustor de banheiro Sicflux Sonora 18 oferece exaustão eficiente e extremamente silenciosa para banheiros residenciais. Conta com veneziana traseira antirretorno e funcionamento bivolt.",
            excelentePara: "Banheiros residenciais, suítes, lavabos e pequenos ambientes sem ventilação natural.",
            imagem: exaustorSonora18Img
          },
          {
            titulo: "Exaustor Sicflux Mega 34",
            descricao: "O exaustor Sicflux Mega 34 é uma solução robusta e super silenciosa para a exaustão de banheiros maiores ou comerciais. Com vazão otimizada e fácil instalação, garante a eliminação eficaz de odores e umidade.",
            excelentePara: "Banheiros de hotéis, escritórios comerciais, consultórios e vestiários de médio porte.",
            imagem: exaustorMega34Img
          },
          {
            titulo: "Exaustor Axial In-Line Maxx 100 Sicflux",
            descricao: "O exaustor axial in-line Maxx 100 Sicflux é projetado para instalação intermediária em dutos de ventilação, funcionando como reforço de linha. Extremamente compacto e silencioso.",
            excelentePara: "Sistemas de exaustão residenciais, reforço de fluxo em dutos, escritórios de pequeno porte e lavabos.",
            imagem: exaustorMaxx100Img
          }
        ]
      },
      {
        nome: "Gabinete de Ventilação",
        produtos: [
          {
            titulo: "Gabinete de Ventilação Sicflux FH 315",
            descricao: "O Gabinete de Ventilação Sicflux FH 315 com filtros G4+M5 é uma solução de alta performance desenvolvida para insuflamento, renovação e filtragem de ar comercial e corporativo. Sua estrutura robusta garante atenuação acústica e facilidade de manutenção de seus filtros modulares, ideal para garantir a Qualidade do Ar Interno (QAI).",
            excelentePara: "Escritórios, salas de aula, clínicas, consultórios, galpões e edifícios comerciais com foco em renovação de ar limpo.",
            imagem: gabineteFh315Img
          }
        ]
      }
    ]
  },
  "difusao-e-controle-de-ar": {
    tabs: [
      {
        nome: "Grelhas Trox",
        produtos: [
          {
            titulo: "Grelha Trox AT-AG",
            descricao: "A Grelha Trox AT-AG (Insuflamento) é fabricada em perfis de alumínio extrudado, equipada com aletas horizontais e verticais individualmente ajustáveis para controle preciso da direção do fluxo de ar no ambiente.",
            excelentePara: "Escritórios comerciais, salas de reunião, hotéis, residências e ambientes que demandam distribuição uniforme e direcionamento do ar climatizado.",
            imagem: grelhaTroxAtAgImg
          },
          {
            titulo: "Grelha Trox VAT-DG",
            descricao: "A Grelha Trox VAT-DG (Insuflamento Vertical) conta com aletas duplas defletoras ajustáveis, oferecendo excelente controle do jato de ar. Possui registro de regulagem de vazão acoplado para balanceamento perfeito.",
            excelentePara: "Ambientes corporativos, lojas de departamento, auditórios e locais com pé-direito médio a alto que necessitam de distribuição vertical do fluxo.",
            imagem: grelhaTroxVatDgImg
          },
          {
            titulo: "Grelha Trox AR-A",
            descricao: "A Grelha Trox AR-A (Retorno) é produzida em alumínio anodizado com aletas horizontais fixas inclinadas a 45°. Desenvolvida para captação de ar de retorno ou exaustão, proporcionando baixa perda de carga e excelente acabamento estético.",
            excelentePara: "Retorno de sistemas de ar condicionado central, exaustão de ar em escritórios, salas comerciais e áreas comuns.",
            imagem: grelhaTroxArAImg
          },
          {
            titulo: "Grelha Trox AR-AG",
            descricao: "A Grelha Trox AR-AG (Retorno com Registro) é construída em alumínio com aletas fixas defletoras a 45° e registro de regulagem de lâminas opostas integrado, facilitando o balanceamento preciso da vazão do sistema.",
            excelentePara: "Balanceamento de redes de retorno em sistemas HVAC centrais de escritórios, hotéis, hospitais e edifícios comerciais.",
            imagem: grelhaTroxArAgImg
          },
          {
            titulo: "Grelha Veneziana Trox AWK",
            descricao: "A Grelha Veneziana Trox AWK possui aletas fixas horizontais curvas, projetada para captação externa ou interna de ar. Evita a visualização do interior do duto e reduz a entrada de água em captações de ar externo.",
            excelentePara: "Fachadas de edifícios, salas de máquinas, captações externas de ar de renovação e portas de salas técnicas.",
            imagem: grelhaTroxAwkImg
          }
        ]
      },
      {
        nome: "Grelhas de Ventilação",
        produtos: [
          {
            titulo: "Grelha Multivac 100 com Tela",
            descricao: "A Grelha Multivac com Tela Anti-Inseto é uma grelha circular com aletas fixas de 100mm. Produzida em plástico de alta resistência e equipada com tela integrada para impedir o acesso de insetos e pequenos detritos.",
            excelentePara: "Ventilação natural ou mecânica de banheiros, copas, despensas e saídas de ar externas residenciais.",
            imagem: grelhaMultivac100Img
          },
          {
            titulo: "Grelha Auto-fechante Sicflux GVAF 125",
            descricao: "A Grelha Auto-fechante GVAF 125 Sicflux conta com aletas móveis gravidade/auto-fechantes de 125mm. Abrem-se com a pressão da exaustão do ar e fecham-se automaticamente quando o exaustor desliga, impedindo retornos e insetos.",
            excelentePara: "Terminações externas de exaustores de banheiro, cozinhas residenciais e redes de dutos de exaustão em apartamentos.",
            imagem: grelhaSicfluxGvaf125Img
          },
          {
            titulo: "Grelha Metálica Sicflux GFM T-200",
            descricao: "A Grelha Metálica Sicflux GFM T-200 é uma grelha metálica plana com tela integrada e aletas fixas, tamanho 200mm. Conta com furação nos quatro cantos para fixação rápida e durabilidade extrema.",
            excelentePara: "Ambientes que exigem alta resistência mecânica, como indústrias, garagens comerciais, depósitos e áreas técnicas.",
            imagem: grelhaSicfluxGfmT200Img
          },
          {
            titulo: "Grelha Metálica Sicflux GFM C-150 com Colarinho",
            descricao: "A Grelha Metálica Sicflux GFM C-150 com Colarinho possui design redondo de 150mm com acabamento premium e colarinho traseiro integrado para encaixe direto em dutos flexíveis ou rígidos.",
            excelentePara: "Conexão direta em dutos flexíveis de exaustores de banheiro, coifas residenciais e sistemas de renovação de ar.",
            imagem: grelhaSicfluxGfmC150Img
          },
          {
            titulo: "Grelha de Sobrepor Sicflux S2525 ABS",
            descricao: "A Grelha de Sobrepor Sicflux S2525 ABS é uma grelha quadrada de sobrepor em plástico ABS com proteção anti-UV. Apresenta design de perfil baixo para aplicação em teto ou parede com fino acabamento.",
            excelentePara: "Acabamento estético de pontos de insuflamento ou exaustão em apartamentos, escritórios, consultórios e residências.",
            imagem: grelhaSicfluxS2525Img
          },
          {
            titulo: "Grelha Redonda Fixa Sicflux",
            descricao: "A Grelha Redonda Fixa Sicflux com Colarinho é circular e projetada com colarinho traseiro integrado para encaixe simples. Fabricada em plástico de alta engenharia para excelente custo-benefício.",
            excelentePara: "Terminações de redes de dutos de ventilação mecânica, exaustores axiais e renovadores de ar residenciais.",
            imagem: grelhaSicfluxRedondaImg
          }
        ]
      },
      {
        nome: "Dampers e Reguladores",
        produtos: [
          {
            titulo: "Damper de Regulagem Trox RG-B",
            descricao: "O Damper de Regulagem Trox RG-B oferece regulagem de vazão leve com acionamento manual e aletas convergentes. Estrutura robusta ideal para controle e balanceamento preciso do fluxo em redes de dutos retangulares.",
            excelentePara: "Instalação em dutos retangulares para balanceamento de ar condicionado central, ventilação mecânica e isolamento de ramais.",
            imagem: damperRgBImg
          },
          {
            titulo: "Regulador de Vazão Sicflux RVA 200",
            descricao: "O Regulador de Vazão Sicflux RVA ABS permite ajustar manualmente a vazão de ar do ambiente de forma simples e direta. Fabricado em plástico ABS com encaixe ajustável.",
            excelentePara: "Instalação em gesso/teto para controle e balanceamento da vazão de ramais residenciais e comerciais de pequeno porte.",
            imagem: reguladorSicfluxRva200Img
          }
        ]
      }
    ]
  },
  "dutos-e-rede-de-ar": {
    produtos: [
      {
        titulo: "Duto Flexível Sem Isolamento Rocktec",
        descricao: "O Duto Flexível Sem Isolamento Rocktec é fabricado em alumínio e poliéster, sem isolamento térmico, projetado para condução de ar em sistemas de ventilação mecânica e exaustão. Apresenta alta flexibilidade e facilidade de instalação em espaços confinados.",
        excelentePara: "Sistemas de exaustão de banheiros, coifas residenciais, ventilação permanente e renovação de ar em ambientes comerciais de pequeno porte.",
        imagem: dutoFlexivelSemIsolamentoImg
      },
      {
        titulo: "Duto Flexível Com Isolamento Térmico",
        descricao: "O Duto Flexível Com Isolamento Térmico é composto por núcleo de alumínio/poliéster revestido por uma espessa camada de lã de vidro estruturada para isolamento térmico e barreira de vapor. Evita condensação externa e minimiza perdas térmicas.",
        excelentePara: "Redes de dutos secundários (ramais) de ar condicionado central, sistemas VRV/VRF dutados e interligação de difusores.",
        imagem: dutoFlexivelComIsolamentoImg
      },
      {
        titulo: "Duto Flexível Isodec Multivac",
        descricao: "O Duto Flexível Isodec Multivac é termoacústico e fabricado com alta tecnologia. Possui parede interna de alumínio e poliéster, isolamento térmico de alta densidade e revestimento externo resistente. Oferece atenuação acústica superior e barreira contra umidade.",
        excelentePara: "Projetos HVAC comerciais, corporativos e hospitalares que requerem controle rigoroso de ruídos e alta eficiência térmica nos ramais de distribuição.",
        imagem: dutoIsodec16MultivacImg
      },
      {
        titulo: "Tubo Semi-rígido TSR Sicflux",
        descricao: "O Tubo Semi-rígido TSR Sicflux é confeccionado em alumínio semi-rígido com excelente resistência mecânica. Suporta temperaturas elevadas e mantém sua seção circular aberta mesmo em curvas acentuadas, garantindo mínima perda de carga.",
        excelentePara: "Conexão de exaustores de banheiro, secadoras de roupa, coifas de cozinha, aquecedores a gás e captações técnicas de exaustão.",
        imagem: tuboSemiRigidoTsrImg
      }
    ]
  },
  "isolamento-termico-e-acustico": {
    tabs: [
      {
        nome: "Isolamento Térmico e Acústico",
        produtos: [
          {
            titulo: "Manta em Lã de Rocha TF 32",
            descricao: "A Manta em Lã de Rocha TF 32 é produzida em lã de rocha basáltica de alta densidade, indicada para isolamento térmico e acústico de superfícies planas ou cilíndricas, como dutos de ar condicionado e tubulações industriais. Possui excelente resistência ao fogo e estabilidade térmica.",
            excelentePara: "Isolamento termoacústico de dutos de ar condicionado metálicos, salas de máquinas, geradores e superfícies aquecidas.",
            imagem: mantaLaRochaTf32Img
          },
          {
            titulo: "Manta Isolante Elastomérica Armaflex AF/BR",
            descricao: "A Manta Isolante Elastomérica Armaflex AF/BR é flexível, de borracha elastomérica com estrutura celular fechada. Oferece controle térmico altamente eficiente, com barreira de vapor ativa integrada para prevenir condensação em tubulações e dutos de grande diâmetro.",
            excelentePara: "Grandes dutos de ar condicionado, chillers, tanques de água gelada, instalações industriais e controle de condensação.",
            imagem: mantaArmaflexAfbrImg
          },
          {
            titulo: "Tubo Isolante Elastomérico Armaflex AF Armacell",
            descricao: "O Tubo Isolante Elastomérico Armaflex AF Armacell é desenvolvido para isolamento térmico de linhas de refrigeração e água gelada. Reduz perdas térmicas e previne corrosão sob o isolamento.",
            excelentePara: "Tubulações de sistemas de ar condicionado VRV/VRF, linhas de expansão direta (Split), instalações de água gelada e sistemas de aquecimento.",
            imagem: tuboArmaflexAfImg
          }
        ]
      },
    ]
  },
  "filtragem-e-qualidade-do-ar": {
    produtos: [
      {
        titulo: "Caixa de Filtro Filbox Red G4/F8 Sicflux",
        descricao: "A Caixa de Filtro Filbox Red G4/F8 Sicflux é uma caixa de filtragem de perfil circular, equipada com filtros grossos G4 e médios F8 (ou filtros combinados) para retenção de poeira e purificação do ar. Gabinete estanque de fácil abertura para manutenção de filtros.",
        excelentePara: "Redes de dutos de ar de renovação, escritórios, consultórios, salas limpas e ambientes comerciais preocupados com a qualidade do ar interno.",
        imagem: caixaFiltroFilboxImg
      },
      {
        titulo: "Filtro Plissado Médio M5 F754 Trox",
        descricao: "O Filtro Plissado Médio M5 F754 Trox é um filtro de ar plissado de classe de filtragem média M5 da marca Trox, modelo F754 (dimensões 590x550x48mm). Possui grande área de filtragem, baixa perda de carga inicial e alta capacidade de retenção de partículas finas.",
        excelentePara: "Pré-filtragem de unidades de tratamento de ar (UTAs), fancoils, sistemas de exaustão e tomadas de ar externo industriais ou hospitalares.",
        imagem: filtroPlissadoTroxImg
      },
      {
        titulo: "Bag In Bag Out",
        descricao: "O Bag In Bag Out é um sistema de filtragem de ar utilizado em ambientes que exigem alto grau de pureza, como salas limpas, laboratórios e indústrias farmacêuticas. O sistema permite a troca de filtros de alta eficiência (HEPA/ULPA) de forma segura, sem expor os operadores ao material particulado.",
        excelentePara: "Salas limpas, laboratórios, indústrias farmacêuticas, hospitais e qualquer ambiente que exija alto grau de pureza do ar.",
        imagem: bagInBagOutImg
      },
      {
        titulo: "Cabine de Fluxo Laminar",
        descricao: "A Cabine de Fluxo Laminar é um equipamento utilizado para garantir a pureza do ar em ambientes controlados. Através de um sistema de filtragem HEPA, o equipamento remove partículas do ar, criando um ambiente estéril para processos sensíveis.",
        excelentePara: "Salas limpas, laboratórios, indústrias farmacêuticas, hospitais e qualquer ambiente que exija alto grau de pureza do ar.",
        imagem: cabineFluxoLamimnarImg
      }
    ]
  },
  "suporte-fixacao-e-instalacao": {
    tabs: [
      {
        nome: "Suportes, Fixação e Instalação",
        produtos: [
          {
            titulo: "Fita Aluminizada Retec 48mm x 45m",
            descricao: "A Fita Aluminizada Retec 48mm x 45m oferece alta refletividade e adesão, desenvolvida especialmente para emendas de dutos de ar, fixação de isolamentos térmicos e acabamentos metálicos. Garante estanqueidade e resistência ao calor.",
            excelentePara: "União de juntas de dutos flexíveis, acabamento de mantas aluminizadas de lã de vidro ou rocha, e vedações metálicas em HVAC.",
            imagem: fitaAluminizadaRetecImg
          },
          {
            titulo: "Fita de Alumínio PIR 50mm x 50m",
            descricao: "A Fita de Alumínio PIR 50mm x 50m conta com adesivo acrílico de alta performance, indicada para selagem e acabamento de painéis pré-isolados de poliuretano (PIR) ou dutos rígidos de ar. Oferece alta durabilidade e resistência contra umidade.",
            excelentePara: "Emendas e montagem de dutos de painéis pré-isolados (PIR/MPU), garantindo total estanqueidade do sistema de distribuição de ar.",
            imagem: fitaAluminioPirImg
          },
          {
            titulo: "Fita de Arquear em Alumínio 12.7mm",
            descricao: "A Fita de Arquear em Alumínio 12.7mm é fabricada em alumínio de alta maleabilidade e resistência. Ideal para amarração e fixação mecânica de isolamentos térmicos externos em tubulações e dutos de grande porte.",
            excelentePara: "Fixação de mantas e calhas de isolamento térmico em tubulações de água gelada, vapor e dutos industriais.",
            imagem: fitaArquearAluminioImg
          },
          {
            titulo: "Fita Autoadesiva Armacell Armaflex AF",
            descricao: "A Fita Autoadesiva Armacell Armaflex AF é fabricada em borracha elastomérica Armaflex AF. Essencial para isolamento e vedação de conexões, válvulas, flanges e locais de difícil acesso, garantindo a continuidade do isolamento sem pontes térmicas.",
            excelentePara: "Isolamento complementar de conexões, flanges, válvulas, curvas e acabamentos em tubulações de refrigeração.",
            imagem: fitaArmaflexAfImg
          },
          {
            titulo: "Fita de Vedação em Polietileno 20x4mm",
            descricao: "A Fita de Vedação em Polietileno 20x4mm é autoadesiva e produzida em espuma de polietileno expandido. Utilizada para vedação física entre flanges de dutos de ar, eliminando vazamentos de fluxo e vibrações.",
            excelentePara: "Vedação de juntas flangeadas de dutos retangulares de chapa metálica e sistemas de ventilação mecânica.",
            imagem: fitaVedacaoPolietilenoImg
          }
        ]
      },
      {
        nome: "Fixadores e Suportes",
        produtos: [
          {
            titulo: "Manômetro de Glicerina Inox DN100 Trox / Retec",
            descricao: "O Manômetro de Glicerina Inox DN100 Trox / Retec é um manômetro analógico com caixa em aço inoxidável e preenchimento de glicerina, diâmetro nominal DN100, escala de 0 a 10 bar (0 a 150 psi) com conexão inferior de rosca 1/2",
            excelentePara: "Monitoramento de pressão em tubulações de água gelada de Chillers, bombas d'água, sistemas hidrônicos e redes de incêndio comerciais ou industriais.",
            imagem: manometroGlicerinaImg
          }
        ]
      }
    ]
  }
};
