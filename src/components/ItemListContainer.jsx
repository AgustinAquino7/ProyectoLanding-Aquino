import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from "../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productsRef = collection(db, "products")

        const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef

        getDocs(q)
            .then(snapshot => {
                const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setItems(prods)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    if (loading) return <p className="text-center">Cargando productos...</p>
    if (items.length === 0) return <p className="text-center">No hay productos en esta categoría.</p>

    return (
        <>
            <h2 className="text-center mb-4">{greeting}</h2>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer




