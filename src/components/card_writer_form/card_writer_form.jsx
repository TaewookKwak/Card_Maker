import React, { useRef, useState } from 'react'
import { memo } from 'react/cjs/react.development'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input'
import styles from './card_writer_form.module.css'
function CardWriterForm({ FileInput, cards, onAdd }) {
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const [file, setFile] = useState({ fileName: null, fileURL: null })

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }
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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    formRef.current.reset()
    onAdd(card)
    setFile({ fileName: null, fileURL: null })
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
          <FileInput name={file.fileName} onFileChange={onFileChange} />
          <Button name="Add" onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default memo(CardWriterForm)
