import React from 'react'
import Card from '../card/card'
import Card_editor_form from '../card_editor_form/card_editor_form'
import CardWriterForm from '../card_writer_form/card_writer_form'
import styles from './editor.module.css'

function Editor({ setCards, cards, addCard, deleteCard, updateCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => {
        return (
          <>
            <Card_editor_form
              key={key}
              setCards={setCards}
              onDelete={deleteCard}
              card={cards[key]}
              updateCard={updateCard}
            />
          </>
        )
      })}
      <CardWriterForm cards={cards} onAdd={addCard} />
    </section>
  )
}

export default Editor
