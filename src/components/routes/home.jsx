import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './home.module.css'
function Home({ FileInput, authService }) {
  const [image, setImage] = useState('')
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'sam',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'sam@gmail.com',
      message: 'go for it',
      fileName: null,
      fileURL: null,
    },
    '2': {
      id: '2',
      name: 'sam',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'sam@gmail.com',
      message: 'go for it',
      fileName: null,
      fileURL: null,
    },
    '3': {
      id: '3',
      name: 'sam',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'sam@gmail.com',
      message: 'go for it',
      fileName: null,
      fileURL: null,
    },
  })
  const navigate = useNavigate()
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

  const addCard = (card) => {
    const updated = { ...cards, card }
    setCards(updated)
  }

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
  }

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
  }

  // const onUpload = (e) => {
  //   uploadImage.upload(e).then((url) => {
  //     console.log(url)
  //     setImage(url)
  //   })
  // }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          setCards={setCards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} image={image} updateCard={createOrUpdateCard} />
      </div>
      <Footer />
    </section>
  )
}

export default Home
