import React from 'react'
import Card from '../card/card'
import Card_editor_form from '../card_editor_form/card_editor_form'
import CardWriterForm from '../card_writer_form/card_writer_form'
import styles from './editor.module.css'

function Editor({ cards, setCards, addCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return (
          <>
            <Card_editor_form key={card.id} card={card} />
          </>
        )
      })}
      <CardWriterForm setCards={setCards} cards={cards} onAdd={addCard} />
    </section>
  )
}

export default Editor
