import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const [IsLogined, setIsLogined] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const goToHome = (userId) => {
    navigate('/home', { state: { id: userId } })
  }
  const onLogin = (e) => {
    authService //
      .login(e.target.textContent)
      .then((data) => {
        goToHome(data.user.uid)
        setIsLogined(true)
      })
  }

  const onMoveToSignup = () => {
    navigate('/signup')
  }

  const onSumbit = (e) => {
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    authService
      .loginWithEmail(emailRef.current.value, passwordRef.current.value)
      .then((data) => {
        goToHome(data.user.uid)
        setIsLogined(true)
      })
  }

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (user) {
          goToHome(user.uid)
        }
      })
  }, [authService])
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1 className={styles.logintitle}>Login by Email</h1>
        <form onSubmit={onSumbit} className={styles.signinWithEmail}>
          <label className={styles.title}>Email</label>
          <input
            required
            placeholder="Email"
            className={styles.input}
            ref={emailRef}
            type="text"
          />
          <label className={styles.title}>Password</label>
          <input
            required
            placeholder="Password"
            className={styles.input}
            ref={passwordRef}
            type="password"
          />
          <button className={styles.signinBtn}>Sign in</button>
        </form>
        <h1 className={styles.logintitle}>Login by other accounts</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <i class="fab fa-google"></i>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <i className={styles.icon} class="fab fa-github"></i>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
        <span className={styles.SignupPara}>Don't have an account?</span>
        <button className={styles.SignupBtn} onClick={onMoveToSignup}>
          sign up
        </button>
      </section>
      <Footer />
    </section>
  )
}

export default Login
