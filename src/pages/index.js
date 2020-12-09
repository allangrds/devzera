import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// import styles from './styles.module.css'
import {
  Hero,
  Featured,
  SEO,
} from '../components'

const FreeContentIcon = (
  <StaticImage
    src="../assets/images/woman_happy.svg"
    placeholder="none"
    alt="Mulher feliz com braços extendidos"
    width={400}
  />
)

const CommunityIcon = (
  <StaticImage
    src="../assets/images/woman_and_man.svg"
    placeholder="none"
    alt="Mulher apertando a mão de um homem"
    width={400}
    height={300}
  />
)

const TechsIcon = (
  <StaticImage
    src="../assets/images/techs.svg"
    placeholder="none"
    alt="HTML5, CSS3, Javascript, Git, Algoritmos, Lógica de programação"
    width={250}
  />
)

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <StaticImage
      src="../assets/images/gradient.svg"
      placeholder="none"
      alt="Gradiente de cinza para branco"
      layout="fluid"
    />
    <section>
      <Featured
        title="Não pague nada"
        description="Você tem acesso a todo o conteúdo sem pagar nada."
        icon={FreeContentIcon}
      />
      <Featured
        title="Se envolva. Faça contatos."
        description="Conheça outra pessoas que assim como você estão aprendendo."
        icon={CommunityIcon}
      />
      <Featured
        title="Aprenda a base. Aprenda tecnologia."
        description="Nosso conteúdo tem como objetivo te ensinar algumas das bases da programação,
        como também algumas tecnologias do mercado."
        icon={TechsIcon}
      />
    </section>
  </>
)

export default IndexPage
