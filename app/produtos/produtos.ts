export const tags: Record<string, string> = {
  accessories: 'Acessórios em Geral',
  automations: 'Automações',
  ventilation: 'Exaustão e Ventilação',
  insulation: 'Isolamento Térmico',
  diffusion: 'Difusão',
  ducts: 'Dutos',
  airTreatment: 'Tratamento de Ar'
};

type Product = {
  name: string;
  tags: string[];
  img: string;
};

export const products: Product[] = [
  {
    name: 'Fita de Alumínio de Arquear',
    tags: [tags.accessories],
    img: '01.png',
  },
  {
    name: 'Selo Metálico',
    tags: [tags.accessories],
    img: '02.png',
  },
  {
    name: 'Aplicador de Cola Adesiva Gluemaster B Armaflex',
    tags: [tags.accessories],
    img: '03.png',
  },
  {
    name: 'Adesivo Armaduct 510',
    tags: [tags.accessories],
    img: '04.png',
  },
  {
    name: 'Cola Adesiva Armaflex 520',
    tags: [tags.accessories],
    img: '05.png',
  },
  {
    name: 'Suporte Armafix',
    tags: [tags.accessories],
    img: '06.png',
  },
  {
    name: 'Tinta Armafinish Branca 3,6L',
    tags: [tags.accessories],
    img: '07.png',
  },
  {
    name: 'Conexão Rosca Fêmea',
    tags: [tags.accessories],
    img: '08.png',
  },
  {
    name: 'Filtro Y',
    tags: [tags.accessories],
    img: '09.png',
  },
  {
    name: 'Purgador de Ar',
    tags: [tags.accessories],
    img: '10.png',
  },
  {
    name: 'V2V ON-OFF - 220V',
    tags: [tags.accessories],
    img: '11.png',
  },
  {
    name: 'V2V Proporcional 24v',
    tags: [tags.accessories],
    img: '12.png',
  },
  {
    name: 'Válvula Compact',
    tags: [tags.accessories],
    img: '13.png',
  },
  {
    name: 'Válvula Esfera com Haste',
    tags: [tags.accessories],
    img: '14.png',
  },
  {
    name: 'Válvula Oventrop',
    tags: [tags.accessories],
    img: '15.png',
  },
  {
    name: 'Válvula Stad',
    tags: [tags.accessories],
    img: '16.png',
  },
  {
    name: 'Válvula Staf',
    tags: [tags.accessories],
    img: '17.png',
  },
  {
    name: 'Canto de Acabamento em Nylon',
    tags: [tags.accessories],
    img: '18.png',
  },
  {
    name: 'Canto de Reforço em Alumínio',
    tags: [tags.accessories],
    img: '19.png',
  },
  {
    name: 'Cola Painel',
    tags: [tags.accessories],
    img: '20.png',
  },
  {
    name: 'Cola Perfil',
    tags: [tags.accessories],
    img: '21.png',
  },
  {
    name: 'Colarinho com Registro',
    tags: [tags.accessories],
    img: '22.png',
  },
  {
    name: 'Colarinho sem registro',
    tags: [tags.accessories],
    img: '23.png',
  },
  {
    name: 'Disco de Reforço em Alumínio',
    tags: [tags.accessories],
    img: '24.png',
  },
  {
    name: 'Lâmina para faca',
    tags: [tags.accessories],
    img: '25.png',
  },
  {
    name: 'Parafuso para barra de reforço',
    tags: [tags.accessories],
    img: '26.png',
  },
  {
    name: 'Selante Acrílico',
    tags: [tags.accessories],
    img: '27.png',
  },
  {
    name: 'Solvente de Adesivo',
    tags: [tags.accessories],
    img: '28.png',
  },
  {
    name: 'Abraçadeiras de Nylon',
    tags: [tags.accessories],
    img: '29.png',
  },
  {
    name: 'Clavo de Proteção',
    tags: [tags.accessories],
    img: '30.png',
  },
  {
    name: 'Clavo de Trava',
    tags: [tags.accessories],
    img: '31.png',
  },
  {
    name: 'Clavo Auto adesivo',
    tags: [tags.accessories],
    img: '32.png',
  },
  {
    name: 'Fita Aluminizada RETEC',
    tags: [tags.accessories],
    img: '33.png',
  },
  {
    name: 'Fita Blacktape',
    tags: [tags.accessories],
    img: '34.png',
  },
  {
    name: 'Fita de vedação PVC',
    tags: [tags.accessories],
    img: '35.png',
  },
  {
    name: 'Fita de Arquear',
    tags: [tags.accessories],
    img: '36.png',
  },
  {
    name: 'Fita Silvertape',
    tags: [tags.accessories],
    img: '37.png',
  },
  {
    name: 'Junta Flexível',
    tags: [tags.accessories],
    img: '38.png',
  },
  {
    name: 'Luva',
    tags: [tags.accessories],
    img: '139.png',
  },
  {
    name: 'Selo de Plástico',
    tags: [tags.accessories],
    img: '39.png',
  },
  {
    name: 'Canto TDC',
    tags: [tags.accessories],
    img: '40.png',
  },
  {
    name: 'Conexão Flexível',
    tags: [tags.accessories],
    img: '41.png',
  },
  {
    name: 'Fita de acabamento PVC',
    tags: [tags.accessories],
    img: '42.png',
  },
  {
    name: 'Fita de vedação Poietileno',
    tags: [tags.accessories],
    img: '43.png',
  },
  {
    name: 'Fita Perfurada',
    tags: [tags.accessories],
    img: '44.png',
  },
  {
    name: 'Grampo TDC',
    tags: [tags.accessories],
    img: '45.png',
  },
  {
    name: 'Massa de vedação',
    tags: [tags.accessories],
    img: '46.png',
  },
  {
    name: 'Parafuso Auto brocante',
    tags: [tags.accessories],
    img: '47.png',
  },
  {
    name: 'Parafuso Chumbador',
    tags: [tags.accessories],
    img: '48.png',
  },
  {
    name: 'Parafuso Francesa c/ porca',
    tags: [tags.accessories],
    img: '49.png',
  },
  {
    name: 'Parafuso Sextavado sem porca',
    tags: [tags.accessories],
    img: '50.png',
  },
  {
    name: 'Porta de inspeção oval',
    tags: [tags.accessories],
    img: '51.png',
  },
  {
    name: 'Porta de inspeção',
    tags: [tags.accessories],
    img: '52.png',
  },
  {
    name: 'Vibra Stop',
    tags: [tags.accessories],
    img: '53.png',
  },
  {
    name: 'Adaptador de redução PVC',
    tags: [tags.accessories],
    img: '54.png',
  },
  {
    name: 'Adaptador de redução Alumínio',
    tags: [tags.accessories],
    img: '55.png',
  },
  {
    name: 'AG para ADLQ',
    tags: [tags.accessories],
    img: '56.png',
  },
  {
    name: 'Parafuso para ADLQ',
    tags: [tags.accessories],
    img: '57.png',
  },
  {
    name: 'Pino de união - Difusor',
    tags: [tags.accessories],
    img: '58.png',
  },
  {
    name: 'Suporte ET',
    tags: [tags.accessories],
    img: '59.png',
  },
  {
    name: 'Silicone de alta temperatura',
    tags: [tags.accessories],
    img: '60.png',
  },
  {
    name: 'Termômetro de Capela',
    tags: [tags.accessories],
    img: '61.png',
  },
  {
    name: 'Atuador EMO 220V',
    tags: [tags.automations],
    img: '62.png',
  },
  {
    name: 'Atuador Floating 200NM',
    tags: [tags.automations],
    img: '63.png',
  },
  {
    name: 'Atuador Proporcional EMO',
    tags: [tags.automations],
    img: '64.png',
  },
  {
    name: 'Atuador Proporcional',
    tags: [tags.automations],
    img: '65.png',
  },
  {
    name: 'Termostato Digital',
    tags: [tags.automations],
    img: '66.png',
  },
  {
    name: 'Exaustor de Muro',
    tags: [tags.ventilation],
    img: '67.png',
  },
  {
    name: 'Exaustor Turbo',
    tags: [tags.ventilation],
    img: '68.png',
  },
  {
    name: 'Ventilador SplitVent',
    tags: [tags.ventilation],
    img: '69.png',
  },
  {
    name: 'Exaustor Trifasico Ventisilva',
    tags: [tags.ventilation],
    img: '70.png',
  },
  {
    name: 'Exaustor TRON 250',
    tags: [tags.ventilation],
    img: '71.png',
  },
  {
    name: 'Exaustor TRON',
    tags: [tags.ventilation],
    img: '72.png',
  },
  {
    name: 'Exaustor AXC',
    tags: [tags.ventilation],
    img: '73.png',
  },
  {
    name: 'Exaustor Muro Plus',
    tags: [tags.ventilation],
    img: '74.png',
  },
  {
    name: 'Exaustor Muro Style',
    tags: [tags.ventilation],
    img: '75.png',
  },
  {
    name: 'Alumínio Corrugado com Barreira',
    tags: [tags.insulation],
    img: '76.png',
  },
  {
    name: 'Tubo Armaflex',
    tags: [tags.insulation],
    img: '77.png',
  },
  {
    name: 'Manta Armaflex',
    tags: [tags.insulation],
    img: '78.png',
  },
  {
    name: 'Manta de Fibra Cerâmica',
    tags: [tags.insulation],
    img: '79.png',
  },
  {
    name: 'Manta de Lã de Rocha',
    tags: [tags.insulation],
    img: '80.png',
  },
  {
    name: 'Manta de Lã de Vidro',
    tags: [tags.insulation],
    img: '81.png',
  },
  {
    name: 'Manta PEBD',
    tags: [tags.insulation],
    img: '82.png',
  },
  {
    name: 'Regulador de Vazão',
    tags: [tags.insulation],
    img: '83.png',
  },
  {
    name: 'Damper AKH',
    tags: [tags.insulation],
    img: '84.png',
  },
  {
    name: 'Porta de Inspeção',
    tags: [tags.insulation],
    img: '85.png',
  },
  {
    name: 'Registro DG',
    tags: [tags.insulation],
    img: '86.png',
  },
  {
    name: 'Veneziana AWK',
    tags: [tags.diffusion],
    img: '87.png',
  },
  {
    name: 'Grelha VAT DG',
    tags: [tags.diffusion],
    img: '88.png',
  },
  {
    name: 'Difusor DVK',
    tags: [tags.diffusion],
    img: '89.png',
  },
  {
    name: 'Grelha Auto fechante',
    tags: [tags.diffusion],
    img: '90.png',
  },
  {
    name: 'Grelha de Fachada',
    tags: [tags.diffusion],
    img: '91.png',
  },
  {
    name: 'Grelha Fixa',
    tags: [tags.diffusion],
    img: '92.png',
  },
  {
    name: 'Grelha de Porta',
    tags: [tags.diffusion],
    img: '93.png',
  },
  {
    name: 'Grelha Metálica Fixa',
    tags: [tags.diffusion],
    img: '94.png',
  },
  {
    name: 'Grelha Quadrada fixa veneziana',
    tags: [tags.diffusion],
    img: '95.png',
  },
  {
    name: 'Grelha Redonda Venziana',
    tags: [tags.diffusion],
    img: '96.png',
  },
  {
    name: 'Difusor ADLQ-A',
    tags: [tags.diffusion],
    img: '97.png',
  },
  {
    name: 'Difusor ADLQ AG',
    tags: [tags.diffusion],
    img: '98.png',
  },
  {
    name: 'Difusor ADLR A',
    tags: [tags.diffusion],
    img: '99.png',
  },
  {
    name: 'Difusor VD',
    tags: [tags.diffusion],
    img: '100.png',
  },
  {
    name: 'Difusor Xarto',
    tags: [tags.diffusion],
    img: '101.png',
  },
  {
    name: 'Grelha AGS',
    tags: [tags.diffusion],
    img: '102.png',
  },
  {
    name: 'Grelha AH 0A',
    tags: [tags.diffusion],
    img: '103.png',
  },
  {
    name: 'Grelha AH 0AG',
    tags: [tags.diffusion],
    img: '104.png',
  },
  {
    name: 'Grelha AR A',
    tags: [tags.diffusion],
    img: '105.png',
  },
  {
    name: 'Grelha AR AG',
    tags: [tags.diffusion],
    img: '106.png',
  },
  {
    name: 'Grelha AT A',
    tags: [tags.diffusion],
    img: '107.png',
  },
  {
    name: 'Grelha AT D',
    tags: [tags.diffusion],
    img: '108.png',
  },
  {
    name: 'Grelha VAT A',
    tags: [tags.diffusion],
    img: '109.png',
  },
  {
    name: 'Grelha VAT D',
    tags: [tags.diffusion],
    img: '110.png',
  },
  {
    name: 'Barra de Reforço em Alumínio',
    tags: [tags.ducts],
    img: '111.png',
  },
  {
    name: 'Maleta de Ferramentas',
    tags: [tags.ducts],
    img: '112.png',
  },
  {
    name: 'Painel MPU',
    tags: [tags.ducts],
    img: '113.png',
  },
  {
    name: 'Perfil h em alumínio',
    tags: [tags.ducts],
    img: '114.png',
  },
  {
    name: 'Perfil de conexão em alumínio',
    tags: [tags.ducts],
    img: '115.png',
  },
  {
    name: 'Perfil de conexão em PVC',
    tags: [tags.ducts],
    img: '116.png',
  },
  {
    name: 'Perfil de derivação em alumínio',
    tags: [tags.ducts],
    img: '117.png',
  },
  {
    name: 'Perfil F em alumínio',
    tags: [tags.ducts],
    img: '118.png',
  },
  {
    name: 'Perfil H em PVC',
    tags: [tags.ducts],
    img: '119.png',
  },
  {
    name: 'Perfil U em alumínio',
    tags: [tags.ducts],
    img: '120.png',
  },
  {
    name: 'Duto Aludec',
    tags: [tags.ducts],
    img: '121.png',
  },
  {
    name: 'Duto Isodec',
    tags: [tags.ducts],
    img: '122.png',
  },
  {
    name: 'Duto Semidec',
    tags: [tags.ducts],
    img: '123.png',
  },
  {
    name: 'Duto Sonodec',
    tags: [tags.ducts],
    img: '124.png',
  },
  {
    name: 'Barra Rosqueada',
    tags: [tags.ducts],
    img: '125.png',
  },
  {
    name: 'Perfil PW II',
    tags: [tags.ducts],
    img: '126.png',
  },
  {
    name: 'Baioneta PVC',
    tags: [tags.ducts],
    img: '127.png',
  },
  {
    name: 'Caixa de filtragem',
    tags: [tags.airTreatment],
    img: '128.png',
  },
  {
    name: 'Filtro FBB F3',
    tags: [tags.airTreatment],
    img: '129.png',
  },
  {
    name: 'Filtro Plano MFP',
    tags: [tags.airTreatment],
    img: '130.png',
  },
  {
    name: 'Filtro G4',
    tags: [tags.airTreatment],
    img: '131.png',
  },
  {
    name: 'Filtro M5',
    tags: [tags.airTreatment],
    img: '132.png',
  },
  {
    name: 'Caixa Plenum',
    tags: [tags.airTreatment],
    img: '133.png',
  },
  {
    name: 'Filtro F71B204',
    tags: [tags.airTreatment],
    img: '134.png',
  },
  {
    name: 'Filtro F71B204',
    tags: [tags.airTreatment],
    img: '135.png',
  },
  {
    name: 'Filtro F74BSB95',
    tags: [tags.airTreatment],
    img: '136.png',
  },
  {
    name: 'Filtro F757M16',
    tags: [tags.airTreatment],
    img: '137.png',
  },
  {
    name: 'Filtro FBB',
    tags: [tags.airTreatment],
    img: '138.png',
  }
];