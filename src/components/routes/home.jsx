import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './home.module.css'
function Home({ FileInput, authService, cardRepository }) {
  const location = useLocation()
  const locationState = location?.state
  console.log(locationState)
  const [userId, setUserId] = useState(locationState && locationState.id)
  const [cards, setCards] = useState({})
  const navigate = useNavigate()

  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards)
    })
    return () => stopSync()
  }, [userId])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
      } else {
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
    cardRepository.removeCard(userId, card)
  }

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
    cardRepository.saveCard(userId, card)
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
        <Preview cards={cards} updateCard={createOrUpdateCard} />
      </div>
      <Footer />
    </section>
  )
}

export default Home
