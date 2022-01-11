import React from 'react'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input'
import styles from './card_editor_form.module.css'
function Card_editor_form({ card }) {
  const {
    id,
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card

  const onSubmit = () => {}

  return (
    <div className={styles.cardEditor}>
      <form className={styles.form}>
        <input className={styles.input} type="text" name="name" value={name} />
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
        />
        <select name="theme" value={theme} className={styles.select}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
        />
        <textarea
          className={styles.textarea}
          name="message"
          value={message}
        ></textarea>
        <div className={styles.buttons}>
          <ImageFileInput />
          <Button name="Delete" onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default Card_editor_form
