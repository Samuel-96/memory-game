import './App.css'
import Header from './components/Header'
import Main from "./components/Main"
import Mensaje from './components/Mensaje'
import { useState, useEffect } from 'react'
import datosPersonajes from './data'

function App() {

  const [dificultad, setDificultad] = useState("normal");
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      const datos = datosPersonajes(dificultad);

      setPersonajes(datos);
    };

    cargarDatos();
  }, [dificultad]);

  return (
    <div className='app'>
      <Header dificultad={dificultad} setDificultad={setDificultad}/>
      <Mensaje />
      <Main datos={personajes} dificultad={dificultad}/>
    </div>
  )
}

export default App
