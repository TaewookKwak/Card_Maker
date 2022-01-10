import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import styles from './App.module.css'
import Login from './components/login/login'
import Home from './components/routes/home'

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
