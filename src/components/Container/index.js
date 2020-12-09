import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Container = ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Container)
