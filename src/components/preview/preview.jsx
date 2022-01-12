import React from 'react'
import Card from '../card/card'
import styles from './preview.module.css'

function Preview({ cards, image, updateCard }) {
  const avatar = image && null
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => {
          return (
            <>
              <Card key={key} card={cards[key]} image={image} />
            </>
          )
        })}
      </ul>
    </section>
  )
}

export default Preview
