import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">ShynraxStore</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/rpg">RPG</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/aventura">Aventura</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/accion">Acción</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar

