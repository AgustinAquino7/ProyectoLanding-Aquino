import { useState } from "react"

function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial)

    const increase = () => {
        if (count < stock) setCount(count + 1)
    }

    const decrease = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary" onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="btn btn-outline-secondary" onClick={increase}>+</button>
            <button className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
