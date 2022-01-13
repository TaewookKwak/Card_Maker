import React, { useState } from 'react'
import { useRef } from 'react/cjs/react.development'
import styles from './image_file_input.module.css'
function ImageFileInput({ uploadImage, name, onFileChange }) {
  const [loading, setloading] = useState(false)
  const inputRef = useRef()
  const onButtonClick = (e) => {
    e.preventDefault()
    inputRef.current.click()
  }

  const onChange = async (e) => {
    setloading(true)
    const uploaded = await uploadImage.upload(e)
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.secure_url,
    })
    setloading(false)
  }
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        name="file"
        accept="image/*"
        placeholder="Upload an image"
        className={styles.input}
        onChange={onChange}
      />
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <button
            className={`${styles.button} ${name ? styles.pink : styles.gray}`}
            onClick={onButtonClick}
          >
            {name || 'No file'}
          </button>
        </>
      )}
    </div>
  )
}
export default ImageFileInput
