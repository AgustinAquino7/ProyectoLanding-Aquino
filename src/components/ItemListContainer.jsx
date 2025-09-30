import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../data/products"
import Item from "./Item"

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts()
        fetchData.then(res => setItems(res))
    }, [categoryId])

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">{greeting}</h2>
            <div className="row g-4">
                {items.map(product => (
                    <Item key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer


    
