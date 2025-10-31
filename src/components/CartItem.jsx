import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartItem({ id, title, price, quantity, image }) {
    const { removeFromCart } = useContext(CartContext)

    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
                <img src={image} alt={title} style={{ width: 80, height: 60, objectFit: "cover" }} />
                <div>
                    <h6 className="mb-0">{title}</h6>
                    <small className="text-muted">Unidades: {quantity}</small>
                </div>
            </div>
            <div>
                <p className="mb-1 fw-bold">${(price * quantity).toFixed(2)}</p>
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem
