import "./Header.css"
import Boton from "../Button"

function Header() {
    return <header className="header">
        <img className="img__aluraflix" src="/img/aluraflix.png" alt="aluraflix" />
        <Boton>
            Nuevo Video
        </Boton>
    </header>  
}

export default Header