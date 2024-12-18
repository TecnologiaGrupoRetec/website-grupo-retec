export const tags: Record<string, string> = {
  health: 'Hospitais e Clínicas',
  pharma: 'Farmacêuticos',
  corporate: 'Corporativos e Públicos',
  business: 'Hotelaria e Comércio'
};

type Project = {
  name: string;
  tags: string[];
  img: string;
};

export const projects: Project[] = [
  {
    name: 'Hospital Santa Lúcia',
    tags: [tags.health],
    img: 'santa-lucia.jpg',
  },
  {
    name: 'HFA',
    tags: [tags.health],
    img: 'hfa.jpg',
  },
  {
    name: 'DF Star',
    tags: [tags.health],
    img: 'df-star.jpg',
  },
  {
    name: 'Hospitais das Clínicas - UFG',
    tags: [tags.health],
    img: 'hospitais-das-clinicas-ufg.png',
  },
  {
    name: 'Brainfarma',
    tags: [tags.pharma],
    img: 'brainfarma.jpg',
  },
  {
    name: 'Geolab',
    tags: [tags.pharma],
    img: 'geolab.jpg',
  },
  {
    name: 'Laboratório Sabin',
    tags: [tags.pharma],
    img: 'laboratorio-sabin.png',
  },
  {
    name: 'Laboratório Teuto',
    tags: [tags.pharma],
    img: 'laboratorio-teuto.jpg',
  },
  {
    name: 'MultiBrasil Corporate',
    tags: [tags.corporate],
    img: 'multibrasil.jpg',
  },
  {
    name: 'Câmara dos Deputados',
    tags: [tags.corporate],
    img: 'camara.jpg',
  },
  {
    name: 'Senado Federal',
    tags: [tags.corporate],
    img: 'senado.jpg',
  },
  {
    name: 'Academia da Polícia Federal',
    tags: [tags.corporate],
    img: 'academia-pf.jpg',
  },
  {
    name: 'Aeroporto Marechal Rondon',
    tags: [tags.corporate],
    img: 'aeroporto-marechal-rondon.jpg',
  },
  {
    name: 'Grupo Acelerador',
    tags: [tags.corporate],
    img: 'grupo-acelerador.png',
  },
  {
    name: `Castro's Hotel`,
    tags: [tags.business],
    img: 'castros-hotel.jpg',
  },
  {
    name: 'PO 700 - DF',
    tags: [tags.business],
    img: 'po-700.jpg',
  },
  {
    name: 'Orion Complex',
    tags: [tags.business],
    img: 'orion-complex.jpg',
  },
  {
    name: 'CanPack Itumbiara',
    tags: [tags.business],
    img: 'canpack.jpg',
  }
];