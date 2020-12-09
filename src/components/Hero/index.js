import React, { memo } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import styles from './styles.module.css'

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Aprenda programação de forma objetiva
        </h1>
        <h2 className={styles.subtitle}>
          Desbrave tecnologias utilizadas pelo mercado construindo projetos com a gente.
        </h2>
      </div>
      <StaticImage
        src="../../assets/images/woman_notebook.svg"
        placeholder="none"
        alt="Mulher mexendo no notebook"
        width={582}
      />
    </div>
  </div>
)

export default memo(Hero)
