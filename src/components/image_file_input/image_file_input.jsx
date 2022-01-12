import React, { useState } from 'react'
import { useRef } from 'react/cjs/react.development'
import styles from './image_file_input.module.css'
function ImageFileInput({ uploadImage, name, onFileChange }) {
  const inputRef = useRef()
  const onButtonClick = (e) => {
    e.preventDefault()
    inputRef.current.click()
  }

  const onChange = async (e) => {
    const uploaded = await uploadImage.upload(e)
    console.log(uploaded)
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.secure_url,
    })
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
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  )
}
export default ImageFileInput
