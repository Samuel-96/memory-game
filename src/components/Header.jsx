import "../styles/header.css"

export default function Header({dificultad, setDificultad}){

    function clickDificultad(e) {
        const nuevaDificultad = e.target.innerText;
        setDificultad(nuevaDificultad);
    }

    return(
        <header>
            <h1>JUEGO DE MEMORIA DE UNDERTALE</h1>
            <div className="dificultad">
                <button onClick={clickDificultad}>Normal</button>
                <button onClick={clickDificultad}>Difícil</button>
            </div>
        </header>
    )
}