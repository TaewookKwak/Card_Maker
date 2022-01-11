import React from 'react'
import styles from './button.module.css'
function Button({ name, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
