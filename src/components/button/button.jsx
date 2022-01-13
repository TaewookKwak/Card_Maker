import React from 'react'
import { memo } from 'react/cjs/react.development'
import styles from './button.module.css'
function Button({ name, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  )
}

export default memo(Button)
