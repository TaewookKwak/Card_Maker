import React from 'react'
import styles from './modal.module.css'
import { createPortal } from 'react-dom'

function Modal({ onClose, onMoveToSignin }) {
  return createPortal(
    <div className={styles.container}>
      <div className={styles.bg}>
        <button onClick={onClose} className={styles.cancleBtn}>
          X
        </button>
        <h2 className={styles.title}>Complete Signing up!</h2>
        <button onClick={onMoveToSignin} className={styles.returnBtn}>
          Return to Login Page
        </button>
      </div>
    </div>,
    document.getElementById('modal'),
  )
}

export default Modal
