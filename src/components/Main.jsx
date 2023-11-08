//IMPORTS
import { useState, useEffect } from "react"
import "../styles/main.css"
import Tarjeta from "./Tarjeta";

let cont = 0;
let puntuacionActual = 0;
//let datos;

export default function Main({datos, dificultad}){

    const [tarjetas, setTarjetas] = useState([]);
    useEffect(() => {
        setTarjetas(datos);
      }, [datos]);
    const [nombreSeleccionado, setNombreSeleccionado] = useState([]);

    function handleClick(nombre) {

        document.querySelector(".dificultad").style.display = "none"
        
        if(cont === tarjetas.length){
            alert("Has ganado");
            location.reload();
        }

        if (nombreSeleccionado.includes(nombre)) {
            //si ya esta seleccionado el pj reiniciamos el contador, vaciamos lo pjs seleccionados y mezclamos de nuevo
            alert("Ya seleccionado");
            if(cont > puntuacionActual){
                puntuacionActual = cont;
            }
            cont = 0;
            setNombreSeleccionado([]);
            const datosOrdenados = [...tarjetas].sort(() => Math.random() - 0.5);
            setTarjetas(datosOrdenados);
          }
        
        else {
            cont++;
            setNombreSeleccionado([...nombreSeleccionado,nombre]);
            const datosOrdenados = [...tarjetas].sort(() => Math.random() - 0.5);
            setTarjetas(datosOrdenados);
        }

        if(cont === tarjetas.length){
            alert("Has ganado")
            location.reload();
        }
    }

    return(
        <main>
            <div className="tabla-puntuacion">
                <h2 id="puntuacion-actual">Puntuación actual: {cont}</h2>
                <h2 id="puntuacion-maxima">Mejor puntuación: {puntuacionActual} </h2>
            </div>

            <div className={`contenedor-tarjetas${dificultad === "dificil" ? " dificil" : ""}`}>
                {tarjetas.map((tarjeta) => (
                    <Tarjeta key={tarjeta.id} id={tarjeta.id} nombre={tarjeta.nombre} imagen={tarjeta.url} handleClick={() => handleClick(tarjeta.nombre)}/>
                ))}
            </div>
            
        </main>
    )
}