import React from 'react'
import styles from './card.module.css'
function Card({ card }) {
  const DEFAULT_IMAGE = '/images/default_logo.png'
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
  const url = fileURL || DEFAULT_IMAGE
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.info_left}>
        <img className={styles.avatar} src={url} alt="profile photo" />
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.info_right}>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
}

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark
    case 'light':
      return styles.light
    case 'colorful':
      return styles.colorful
    default:
      throw new Error(`unknow theme ${theme}`)
  }
}

export default Card
