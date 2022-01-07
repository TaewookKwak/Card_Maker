import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService //
      .login(e.target.textContent)
      .then(console.log)
  }
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <div className={styles.loginTitle}>
          <i class="fas fa-user"></i>
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
