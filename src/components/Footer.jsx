import "../styles/footer.css"
import GitLogo from "../assets/github-logo-night.png"
import Dog from "../assets/dog-gif.gif"

export default function Footer(){

    return(
        <footer>
            <a href="https://undertale.com/" target="_blank" rel="noreferrer">
                <img src={Dog} alt="imagen del perro de Undertale"/>
            </a> 
            <p>Copyright © 2023 Samuel-96</p>
            <a href="https://github.com/Samuel-96" target="_blank" rel="noreferrer">
                <img src={GitLogo} alt="logo de github"/>
            </a> 
        </footer>
    )
}