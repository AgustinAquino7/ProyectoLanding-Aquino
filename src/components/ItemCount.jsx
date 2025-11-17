import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

function ItemCount({ stock, initial = 1, product, onAdd }) {
    const [count, setCount] = useState(initial)
    const { addToCart } = useContext(CartContext)

    const increase = () => { if (count < stock) setCount(c => c + 1) }
    const decrease = () => { if (count > 1) setCount(c => c - 1) }

    const handleAdd = () => {
        addToCart(product, count)
        if (onAdd) onAdd(count) 
    }

    return (
        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-dark" onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="btn btn-outline-dark" onClick={increase}>+</button>
            <button className="btn btn-success" onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

