import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProductById(id).then(res => setProduct(res))
    }, [id])

    return (
        <div className="container py-4">
            {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
        </div>
    )
}

export default ItemDetailContainer
