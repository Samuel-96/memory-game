//IMPORTS
import { useState } from "react"
import "../styles/main.css"
import Tarjeta from "./Tarjeta";
import datosPersonajes from "../data";

let cont = 0;
let puntuacionActual = 0;

export default function Main({dificultad}){
    const datos = datosPersonajes();
    
    const [tarjetas, setTarjetas] = useState(datos);
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

        <div className="contenedor-tarjetas">
            {tarjetas.map((tarjeta) => 
                <Tarjeta key={tarjeta.id} id={tarjeta.id} nombre={tarjeta.nombre} imagen={tarjeta.url} handleClick={() => handleClick(tarjeta.nombre)}/>
            )}
        </div>
            
        </main>
    )
}

    /*
    //con useEffect llamamos a la api y cargamos los datos de las tarjetas
    useEffect(() => {
        async function fetchData() {
            try {
                const dataSans = await obtenerDatosApi("sans pixel");
                const dataPapyrus = await obtenerDatosApi("papyrus undertale pixel");

                setTarjetas([...tarjetas, dataSans, dataPapyrus]);

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    

    async function obtenerDatosApi(busqueda) {
        const conexion = "https://api.giphy.com/v1/gifs/translate?api_key=dkpMjVE3vSt5H9FVWmn9c8WuRVIlbqQ7&s=" + busqueda;

        try {
            const response = await fetch(conexion, { mode: "cors" });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const gif = await response.json();

            return { id: gif.data.id, nombre: busqueda, url: gif.data.images.original.url };
        } 
        
        catch (error) {
            throw new Error(`Fetch error: ${error}`);
        }
    }
    */
