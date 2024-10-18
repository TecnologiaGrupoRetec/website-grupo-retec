'use client'
import React, { useState } from "react";
import styles from "./produtos.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from '../components/footer';
import Cta from "../components/cta";
import Pannel from "../components/pannel";
import { products, tags } from "./produtos";

export default function Products() {
  const tagNames = Object.values(tags);
  const [selectedCategory, setSelectedCategory] = useState(tagNames[0])

  return (
    <React.Fragment>
      <Pannel />
      <div className={styles.page}>
        <Navbar activeTab="products" />
        <section className={styles.products}>
          <div className={styles.content}>
            <div className={styles.categories}>
              { tagNames.map(tag => (
                <a 
                  className={selectedCategory === tag ? styles.active : ''}
                  onClick={() => setSelectedCategory(tag)}
                  key={tag.toLowerCase()}
                >
                  { tag }
                </a>
              )) }
            </div>
            <div className={styles.products}>
              { products.map(product => product.tags.includes(selectedCategory) ? (
                <div className={styles.product} key={product.img}>
                  <Image className={styles.img} src={`/products/${product.img}`} alt={product.name} width="209" height="208" />
                  <h4 className={styles.name}>
                    { product.name }
                  </h4>
                </div>              
              ) : null) }
            </div>
          </div>
        </section>

        <section className={styles.description}>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>
              Serviços Exclusivos
            </h3>
            <h2 className={styles.title}>
              Melhores ná área de Climatização
            </h2>
            <h4 className={styles.motto}>
              Conte conosco para impulsionar o bem-estar e a produtividade da sua empresa!
            </h4>
            <div className={styles.bullets}>
              <div className={styles.bullet}>
                <div className={styles.dot} />
                <h5 className={styles.name}>
                  <b>Diagnóstico</b><br/>
                  Garantindo Qualidade do Ar
                </h5>
                <p>Realizamos um diagnóstico detalhado das instalações da sua empresa para avaliar a qualidade do ar existente.</p>
                <p>Utilizando tecnologias avançadas e métodos precisos, identificamos possíveis fontes de poluição, níveis de umidade e ventilação ineficiente.</p>
                <p>Com base nos resultados, elaboramos um relatório completo que indica os pontos de melhoria e os problemas a serem solucionados.</p>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dot} />
                <h5 className={styles.name}>
                  <b>Solução</b><br/>
                  Ambientando seu Espaço
                </h5>
                <p>Entramos em ação para desenvolver uma solução personalizada que atenda às necessidades específicas da sua empresa.</p>
                <p>Nossa equipe altamente qualificada de engenheiros e especialistas em climatização trabalha em estreita colaboração com você para projetar e implementar um sistema de qualidade do ar que garanta um ambiente saudável, confortável e eficiente.</p>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dot} />
                <h5 className={styles.name}>
                  <b>Fornecimento</b><br/>
                  Excelência em Ar Condicionado
                </h5>
                <p>Oferecemos um amplo catálogo de sistemas de ar condicionado de alta qualidade, especialmente projetados para grandes empresas e construções. Parceria com marcas reconhecidas no mercado, garantindo eficiência e confiabilidade.</p>
                <p>Em suma, a qualidade do ar interior é essencial para um ambiente de trabalho produtivo e saudável. Com nossa experiência em climatização e qualidade do ar, oferecemos diagnóstico, solução personalizada e equipamentos para assegurar um ambiente ideal.</p>
              </div>
            </div>
          </div>
        </section>

        <Cta />
        <Footer />
      </div>
    </React.Fragment>
  );
}
