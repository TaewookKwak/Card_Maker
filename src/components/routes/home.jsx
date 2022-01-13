import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './home.module.css'
function Home({ FileInput, authService, cardRepository }) {
  const location = useLocation()
  const locationState = location?.state
  const [userId, setUserId] = useState(locationState && locationState.id)
  const [cards, setCards] = useState({})
  const navigate = useNavigate()

  const onLogout = useCallback(() => {
    authService.logout()
  }, [authService])

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards)
    })
    return () => stopSync()
  }, [userId, cardRepository])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
        console.log(user.uid)
      } else {
        navigate('/')
      }
    })
  }, [authService])

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
