import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import styles from './styles.module.css'

const Timeline = ({ content }) => (
  <Container>
    {
      content.map(item => (
        <div className={styles.timeline}>
          <div className={styles.dots}>
            <div className={styles.circle}></div>
            <hr className={styles.line} />
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>
              { item.title }
            </h4>
            <ol className={styles.list}>
              {
                item.steps.map(step => (
                  <li className={styles.item}>
                    <p>
                      { step }
                    </p>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      ))
    }
  </Container>
)

Timeline.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default memo(Timeline)
