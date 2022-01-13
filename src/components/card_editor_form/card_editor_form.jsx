import React from 'react'
import { useRef } from 'react/cjs/react.development'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input'
import styles from './card_editor_form.module.css'
function Card_editor_form({ FileInput, card, onDelete, updateCard }) {
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

  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return
    }
    e.preventDefault()
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onDelete(card)
  }
  return (
    <div className={styles.cardEditor}>
      <form className={styles.form}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          value={company}
          onChange={onChange}
        />
        <select
          ref={themeRef}
          name="theme"
          value={theme}
          className={styles.select}
          onChange={onChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          value={email}
          onChange={onChange}
        />
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          value={message}
          onChange={onChange}
        ></textarea>
        <div className={styles.buttons}>
          <FileInput name={fileName} onFileChange={onFileChange} />
          <Button name="Delete" onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default Card_editor_form
