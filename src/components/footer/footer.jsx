import React from 'react'
import { memo } from 'react/cjs/react.development'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Code your dream</p>
    </footer>
  )
}

export default memo(Footer)
