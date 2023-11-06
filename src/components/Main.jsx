import { useState } from "react"
import { useEffect } from "react"
import "../styles/main.css"
import Tarjeta from "./Tarjeta";

export default function Main(){

    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {

        const data = [
            { id: 0, nombre: "sans", imagen: "urlimagen" },
            { id: 1, nombre: "papyrus", imagen: "urlimagen_papyrus" },
            { id: 2, nombre: "undyne", imagen: "urlimagen_undyne" }
            // ... Otros datos obtenidos de la API
        ];

        setTarjetas(data);
    }, []);

    return(
        <main>
            <div className="tabla-puntuacion">
                <h2 id="puntuacion-actual">Puntuación actual: {}</h2>
                <h2 id="puntuacion-maxima">Mejor puntuación: {} </h2>
            </div>

        <div className="contenedor-tarjetas">
            {tarjetas.map((tarjeta) => 
                <Tarjeta key={tarjeta.id} nombre={tarjeta.nombre} imagen={tarjeta.imagen}/>
            )}
        </div>
            
        </main>
    )
}