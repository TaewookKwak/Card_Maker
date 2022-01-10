import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const navigate = useNavigate()
  const goToHome = (userId) => {
    navigate('/home', { state: { id: userId } })
  }
  const onLogin = (e) => {
    authService //
      .login(e.target.textContent)
      .then((data) => goToHome(data.user.uid))
  }

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToHome(user.uid)
      })
  })
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <div className={styles.loginTitle}>
          <h1 className={styles.title}>Login</h1>
        </div>
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
      </section>
      <Footer />
    </section>
  )
}

export default Login
