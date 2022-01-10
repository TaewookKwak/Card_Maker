import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './home.module.css'
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
      <div className={styles.card}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  )
}

export default Home
