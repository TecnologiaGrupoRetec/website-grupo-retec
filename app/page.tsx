'use client'
import { useState } from 'react';

import styles from "./index.module.scss";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Image from "next/image";
import Footer from './components/footer';
import Cta from './components/cta';
import Main from './components/main';

export default function Home() {
  const [selectedIframe, setSelectedIframe] = useState('gyn');

  return (
    <div className={styles.page}>
      <Navbar activeTab="home" />
      <div className={styles.pannel} />
      <Main
        title='Especialistas em Soluções Integradas de Climatização e Conforto Térmico e Qualidade do Ar'
        subtitle='Grupo RETEC'
      >
        <a href="/contactForm">
          <Button>Faça seu Orçamento!</Button>
        </a>
      </Main>

      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.description}>
            <h2 className={styles.title}>
              Como podemos te ajudar
            </h2>
            <h3 className={styles.subtitle}>
              TUDO para climatização<br />
              em um só lugar
            </h3>
            <p className={styles.text}>
              Com a nossa expertise, oferecemos soluções completas para sistemas de água gelada e expansão direta, atuando nos setores industrial, hospitalar, clínico e comercial. Somos referência no Centro-Oeste em fornecimento de materiais e equipamentos HVAC. 
              <br /><br />
              Com mais de 42 anos de experiência, fornecemos desde equipamentos complexos, como torres de resfriamento, chillers, UTAs e cabines de fluxo laminar, até pequenos componentes essenciais, garantindo a gestão eficiente de obras.
              <br /><br />
              Nosso compromisso é aliar segurança, qualidade e custo-benefício, representando com exclusividade as principais fabricantes do mercado de HVAC-R.
            </p>
            <ul className={styles.bullets}>
              <li className={styles.bullet}>
                <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
                Consultoria em Climatização
              </li>
              <li className={styles.bullet}>
                <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
                Representação
              </li>
              <li className={styles.bullet}>
                <Image className={styles.checkbox} src={`/home/checkbox.png`} alt="checkbox" width="24" height="24"/>
                Distribuição (Atacado e Varejo)
              </li>
            </ul>
          </div>
          <Image className={styles.logo} src={`/home/logo.png`} alt="Logo Grupo RETEC" width="373" height="373"/>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.content}>
          <h2 className={styles.title}>BENEFÍCIOS DA CLIMATIZAÇÃO</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <Image className={styles.icon} src={`/home/engine.png`} alt="Aumento de produtividade" width="56" height="55"/>
              </div>
              <h3 className={styles.cardTitle}>Melhora de Produtividade e Bem-estar</h3>
              <p className={styles.text}>
                Uma boa climatização melhora a produtividade e o bem-estar ao manter uma temperatura confortável e estável, o que reduz o estresse térmico e evita distrações causadas por calor ou frio extremos. Ambientes climatizados promovem maior concentração, energia e eficiência, além de contribuir para a saúde ao melhorar a qualidade do ar e prevenir a proliferação de mofo e alérgenos.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <Image className={styles.icon} src={`/home/forward.png`} alt="Melhores entregas" width="70" height="86"/>
              </div>
              <h3 className={styles.cardTitle}>Prazos mais precisos e melhores entregas</h3>
              <p className={styles.text}>
              Condições térmicas ideais ajudam a manter o funcionamento adequado dos equipamentos e a produtividade dos funcionários, minimizando falhas e interrupções. Com um ambiente confortável e bem regulado, as operações tendem a ser mais eficientes, resultando em prazos mais precisos e entregas mais consistentes.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>
                <Image className={styles.icon} src={`/home/warning.png`} alt="Controle de perdas" width="66" height="53"/>
              </div>
              <h3 className={styles.cardTitle}>Controle de perdas e garantia de qualidade</h3>
              <p className={styles.text}>
              Temperaturas e umidade controladas evitam a deterioração e variações indesejadas nos materiais, prevenindo desperdícios e defeitos. Além disso, a climatização reduz falhas no equipamento, evitando interrupções e comprometendo a qualidade final. Um ambiente bem climatizado assegura a integridade dos produtos e a eficiência do processo, resultando em menos perdas e maior qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.content}>
          <h2 className={styles.title}>Marcas Representadas e Parceiras</h2>
          <div className={styles.row}>
          <Image className={styles.partner} src={`/home/trox.png`} alt="TROX" width="1124" height="292"/>
          <Image className={styles.partner} src={`/home/armacell.png`} alt="Armacell" width="2233" height="522"/>
          <Image className={styles.partner} src={`/home/projelmec.png`} alt="projelmec" width="875" height="250"/>
          <Image className={styles.partner} src={`/home/daikin.png`} alt="Daikin" width="1280" height="276"/>
          <Image className={styles.partner} src={`/home/imi.svg`} alt="IMI" width="1024" height="265"/>
          <Image className={styles.partner} src={`/home/sicflux.png`} alt="Sicflux" width="400" height="100"/>
          <Image className={styles.partner} src={`/home/evapco.png`} alt="EVAPCO" width="782" height="234"/>
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <div className={styles.content}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image className={styles.icon} src={`/home/pin.png`} alt="localização" width="31" height="31"/>
              <h2 className={styles.title}>Loja Goiânia/GO</h2>
              <p className={styles.text}>
                Av. Caiapó, 452 - St. Genoveva<br />
                CEP: 74672-400
                <br /><br />
                (62) 3204-6782
              </p>
              <a className={styles.link} href="tel:+556232046782">
                Fale com a gente
                <Image className={styles.arrow} src={`/home/arrow.png`} alt="seta para direita" width="14" height="8"/>
              </a>
            </div>
            <div className={styles.card}>
              <Image className={styles.icon} src={`/home/pin.png`} alt="localização" width="31" height="31"/>
              <h2 className={styles.title}>Loja Brasília/DF</h2>
              <p className={styles.text}>
                SIA Trecho 17 Rua 17 Nº 1380<br />
                CEP: 71.200-249
                <br /><br />
                (61) 3363-7310
              </p>
              <a className={styles.link} href="tel:+556133637310">
                Fale com a gente
                <Image className={styles.arrow} src={`/home/arrow.png`} alt="seta para direita" width="14" height="8"/>
              </a>
            </div>
          </div>

          <div className={styles.iframes}>
            <div className={styles.container}>
              {selectedIframe === 'bsb' ? (
                <iframe className={styles.iframe} width="524" height="372" style={{border: 0}}   src="https://www.google.com/maps/embed/v1/place?q=SIA%20Trecho%2017%20Rua%2017%20N%C2%BA%201380&key=AIzaSyBByHU2zt9HWnhbfPNgQw4jwZ04IMrRA-A"></iframe>
              ) : (
                <iframe className={styles.iframe} width="524" height="372" style={{border: 0}}   src="https://www.google.com/maps/embed/v1/place?q=Av.%20Caiap%C3%B3%2C%20452%20-%20St.%20Genoveva&key=AIzaSyBByHU2zt9HWnhbfPNgQw4jwZ04IMrRA-A"></iframe>
              )}
            </div>
            <div className={styles.toggles}>
              <a 
                className={selectedIframe === 'gyn' ? styles.active : ''}
                onClick={() => setSelectedIframe('gyn')}
              >
                Goiânia
              </a>
              <a 
                className={selectedIframe === 'bsb' ? styles.active : ''}
                onClick={() => setSelectedIframe('bsb')}
              >
                Brasília
              </a>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
