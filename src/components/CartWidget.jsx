import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
    const { totalItems } = useContext(CartContext)

    return (
        <Link to="/cart" className="btn btn-outline-light position-relative me-2 cart-widget">
            <span className="me-2">🛒</span>
            {totalItems > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                </span>
            )}
        </Link>
    )
}

export default CartWidget



