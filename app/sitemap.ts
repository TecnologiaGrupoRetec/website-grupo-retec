import type { MetadataRoute } from "next";
import { supabase } from "../lib/supabase";

const siteUrl = "https://www.gruporetec.com.br";
export const revalidate = 3600;

const solutionSlugs = [
  "expansao-direta",
  "agua-gelada-e-rejeicao-de-calor",
  "exaustao-e-ventilacao",
  "difusao-e-controle-de-ar",
  "dutos-e-rede-de-ar",
  "isolamento-termico-e-acustico",
  "filtragem-e-qualidade-do-ar",
  "suporte-fixacao-e-instalacao",
  "industrias-farmaceuticas-processos-industriais",
  "hospitais-clinicas",
  "shopping-centers",
  "hoteis",
  "predios-comerciais",
  "instaladoras-construtoras",
  "governamental-institucional",
  "residencial-alto-padrao",
  "escolas-centros-ensino",
  "academias-centros-fitness",
  "restaurantes",
  "data-centers-missao-critica",
];

const articleSlugs = [
  "clima-seco-climatizacao-saude-respiratoria",
  "climatizacao-calor-extremo-ar-seco-centro-oeste",
  "climatizacao-dentro-do-ambiente-trabalho",
  "climatizacao-inteligente-valoriza-imoveis-velocidade-venda",
  "climatizacao-produtividade-ambiente-trabalho",
  "climatizacao-sustentavel-refrigerantes-eficiencia",
  "climatizao-nas-escolas",
  "doencas-respiratorias-df-climatizacao-inteligente",
  "filtragem-renovacao-ar-queimadas",
  "fumaca-queimadas-longe-focos-ambientes-internos",
  "queimadas-afetam-saude-a-distancia",
  "temperatura-umidade-qualidade-ar-sono",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let dynamicArticles: MetadataRoute.Sitemap = [];

  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("slug, criado_em")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao carregar posts no sitemap:", error);
    } else {
      dynamicArticles = (posts ?? []).map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.criado_em ? new Date(post.criado_em) : undefined,
        changeFrequency: "monthly",
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Erro inesperado ao carregar posts no sitemap:", error);
  }

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/solucoes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/obras`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/catalogForm`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contactForm`, changeFrequency: "monthly", priority: 0.6 },
    ...solutionSlugs.map((slug) => ({
      url: `${siteUrl}/solucoes/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articleSlugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...dynamicArticles,
  ];
}
