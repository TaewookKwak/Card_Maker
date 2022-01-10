import React from 'react'
import Card from '../card/card'
import styles from './preview.module.css'

function Preview({ cards }) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => {
          return (
            <>
              <Card key={card.ic} card={card} />
            </>
          )
        })}
      </ul>
    </section>
  )
}

export default Preview
