import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AuthService from './service/auth_service'
import '@fortawesome/fontawesome-free/js/all.js'
import UploadImage from './service/uploadImage'
import ImageFileInput from './components/image_file_input/image_file_input'
import Cardrepository from './service/card_repository'
const authService = new AuthService()
const uploadImage = new UploadImage()
const FileInput = (props) => (
  <ImageFileInput {...props} uploadImage={uploadImage} />
)
const cardRepository = new Cardrepository()

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root'),
)
