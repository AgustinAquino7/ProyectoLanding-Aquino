// src/components/ItemDetail.jsx
import { useState } from "react"
import ItemCount from "./ItemCount"

function ItemDetail({ id, title, description, price, image, stock = 10 }) {
    const [added, setAdded] = useState(false) // para ocultar ItemCount al agregar
    const [addedQty, setAddedQty] = useState(0)

    return (
        <div className="card mx-auto my-4" style={{ maxWidth: 900 }}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={image} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                        <p className="fw-bold">Precio: ${price.toFixed(2)}</p>
                        {!added ? (
                            <ItemCount stock={stock} initial={1} product={{ id, title, price, image }} onAdd={(qty) => { setAdded(true); setAddedQty(qty) }} />
                        ) : (
                            <div>
                                <p className="text-success">Añadido {addedQty} unidad(es) al carrito ✅</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
