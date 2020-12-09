import React, { memo } from 'react'

import styles from './styles.module.css'

const Container = ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
)

export default memo(Container)
