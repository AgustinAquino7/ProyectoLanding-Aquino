import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../data/products"

function ItemDetailContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then(docSnap => {
                if (docSnap.exists()) setProduct({ id: docSnap.id, ...docSnap.data() })
                else setProduct(null)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p className="text-center">Cargando producto...</p>
    if (!product) return <p className="text-center">Producto no encontrado.</p>

    return <ItemDetail {...product} />
}

export default ItemDetailContainer


