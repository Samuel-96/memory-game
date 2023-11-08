import "../styles/header.css"
import GitLogo from "../assets/github-logo-night.png"
import Dog from "../assets/dog.webp"

export default function Header({dificultad, setDificultad}){

    function clickDificultad(e) {
        const nuevaDificultad = e.target.innerText;
        setDificultad(nuevaDificultad);
    }

    return(
        <header>
            <div className="titulo">
                <h1>JUEGO DE MEMORIA DE UNDERTALE</h1>
                <div className="datos-creador">
                <a href="https://undertale.com/" target="_blank" rel="noreferrer">
                    <img src={Dog} alt="imagen del perro de Undertale"/>
                </a> 

                <p>Samuel-96</p>
                <a href="https://github.com/Samuel-96" target="_blank" rel="noreferrer">
                    <img src={GitLogo} alt="logo de github"/>
                </a> 
                </div>
            </div>
            
            <div className="dificultad">
            <button onClick={clickDificultad}>normal</button>
                <button onClick={clickDificultad}>dificil</button>
            </div>
        </header>
    )
}