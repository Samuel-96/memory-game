import './App.css'
import Header from './components/Header'
import Main from "./components/Main"
import Footer from "./components/Footer"
import Mensaje from './components/Mensaje'
import { useState } from 'react'

function App() {

  const [dificultad, setDificultad] = useState("normal");

  return (
    <div className='app'>
      <Header dificultad={dificultad} setDificultad={setDificultad}/>
      <Mensaje />
      <Main dificultad={dificultad}/>
      <Footer />
    </div>
  )
}

export default App
