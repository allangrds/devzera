import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import styles from './styles.module.css'

const Featured = ({ description, icon, title }) => (
  <Container>
    <div className={styles.featured}>
      <div className={styles.image}>
        { icon }
      </div>
      <div className={styles.texts}>
        <h3 className={styles.title}>
          { title }
        </h3>
        <p className={styles.description}>
          { description }
        </p>
      </div>
    </div>
    <hr className={styles.line} />
  </Container>
)

Featured.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(Featured)
