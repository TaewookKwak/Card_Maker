import React, { useRef } from 'react'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input'
import styles from './card_writer_form.module.css'
function CardWriterForm({ cards, setCards, onAdd }) {
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    }
    formRef.current.reset()
    onAdd(card)
  }
  return (
    <div className={styles.cardEditor}>
      <form ref={formRef} className={styles.form}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          placeholder="company"
        />
        <select ref={themeRef} name="theme" className={styles.select}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          placeholder="email"
        />
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          placeholder="message"
        ></textarea>
        <div className={styles.buttons}>
          <ImageFileInput />
          <Button name="Add" onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default CardWriterForm
