import { useState } from 'react'
import './App.css'
import Routes from './routes/routes'
import NavbarNavigate from './components/navbarNavigate/navbarNavigate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes />
    </>
  )
}

export default App
