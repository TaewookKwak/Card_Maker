import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './routes.module.css'
function Home({ authService }) {
  const navigate = useNavigate()
  const location = useLocation()
  let data = location.state
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/')
      }
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <h1>Hello Login</h1>
      <Footer />
    </section>
  )
}

export default Home
