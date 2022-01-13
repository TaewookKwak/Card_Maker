import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
import Modal from './popup/modal'

function Signup({ authService }) {
  const IdRef = useRef()
  const PasswordRef = useRef()
  const [isSignuped, setIsSignuped] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const onMoveToSignin = () => {
    navigate('/')
  }
  const onSubmit = (e) => {
    e.preventDefault()
    authService
      .createAccount(IdRef.current.value, PasswordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user
        setIsSignuped(true)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        setError(errorMessage)
        alert(errorMessage)
      })
  }

  const onClose = () => {
    setIsSignuped(false)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className={styles.title}>ID</label>
        <input
          className={styles.inputEmail}
          ref={IdRef}
          placeholder="Email"
          type="text"
          required
        />
        <label className={styles.title}>P/W</label>
        <input
          className={styles.inputPassword}
          ref={PasswordRef}
          placeholder="Password"
          type="password"
          required
        />
        <button className={styles.completeBtn}>Complete</button>
      </form>
      <span className={styles.SigninPara}>Do you have an account?</span>
      <button className={styles.SigninBtn} onClick={onMoveToSignin}>
        Sign in
      </button>
      {isSignuped ? (
        <Modal
          onOpen={isSignuped}
          onClose={onClose}
          onMoveToSignin={onMoveToSignin}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Signup
