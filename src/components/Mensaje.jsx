import "../styles/mensaje.css"

export default function Mensaje(){

    function handleClick(){
        document.getElementById("overlay").style.display = "none";
    }

    return(
        <div id="overlay" onClick={handleClick}>
            <div id="mensaje">
            <p className="text">¡Bienvenido al juego de memoria! Haz clic en las cartas, pero recuerda, no hagas clic en la misma carta dos veces. ¡Stay determined!</p>
            </div>
        </div>
    )
}