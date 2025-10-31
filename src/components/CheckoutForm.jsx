import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"

function CheckoutForm() {
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [form, setForm] = useState({ name: "", email: "", address: "" })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (cart.length === 0) return

        setLoading(true)
        const order = {
            buyer: form,
            items: cart.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
            total: totalPrice,
            createdAt: serverTimestamp()
        }

        try {
            const col = collection(db, "orders")
            const docRef = await addDoc(col, order)
            setOrderId(docRef.id)
            clearCart()
        } catch (err) {
            console.error("Error creando orden:", err)
            alert("Error al procesar la orden.")
        } finally {
            setLoading(false)
        }
    }

    if (orderId) {
        return (
            <div className="text-center my-5">
                <h3>¡Gracias por tu compra! 🎃</h3>
                <p>Tu orden se registró con el ID: <strong>{orderId}</strong></p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        )
    }

    return (
        <div style={{ maxWidth: 700 }} className="mx-auto">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input name="address" className="form-control" value={form.address} onChange={handleChange} required />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold">Total: ${totalPrice.toFixed(2)}</p>
                    <button className="btn btn-success" type="submit" disabled={loading}>
                        {loading ? "Procesando..." : "Confirmar compra"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
