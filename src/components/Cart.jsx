import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link, useNavigate } from "react-router-dom"

function Cart() {
    const { cart, totalItems, totalPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className="text-center my-5">
                <h3>Tu carrito está vacío 🎃</h3>
                <Link to="/" className="btn btn-warning mt-3">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>Carrito ({totalItems} items)</h2>
            <div className="list-group mb-3">
                {cart.map(item => <CartItem key={item.id} {...item} />)}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                <div>
                    <button className="btn btn-outline-danger me-2" onClick={() => clearCart()}>Vaciar carrito</button>
                    <button className="btn btn-success" onClick={() => navigate("/checkout")}>Ir a pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
