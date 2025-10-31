import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-halloween">
            <div className="container">
                <Link className="navbar-brand" to="/">Spooky Games 🎃</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Catálogo</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/rpg">RPG</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/accion">Acción</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/aventura">Aventura</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/deportes">Deportes</Link></li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


