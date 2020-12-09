import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  Container,
  Hero,
  Featured,
  SEO,
  Timeline,
} from '../components'
import styles from './styles.module.css'

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

const content = [
  {
    steps: [
      'Protocolo TCP/IP 1',
      'Protocolo TCP/IP 2',
      'Protocolo TCP/IP 3',
      'Protocolo TCP/IP 4',
    ],
    title: 'Logica de programacao',
  },
  {
    steps: [
      'Protocolo TCP/IP 1',
      'Protocolo TCP/IP 2',
      'Protocolo TCP/IP 3',
      'Protocolo TCP/IP 4',
    ],
    title: 'Logica de programacao 2',
  },
  {
    steps: [
      'Protocolo TCP/IP 1',
      'Protocolo TCP/IP 2',
      'Protocolo TCP/IP 3',
      'Protocolo TCP/IP 4',
    ],
    title: 'Logica de programacao 2',
  },
]

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
    <section className={styles.featured}>
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
    <section className={styles.timeline}>
      <Container>
        <h3 className={styles.title}>
          Etapas do aprendizado
        </h3>
      </Container>
      <Timeline content={content} />
    </section>
  </>
)

export default IndexPage
