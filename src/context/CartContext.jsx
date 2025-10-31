import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        setCart(prev => {
            const existing = prev.find(p => p.id === product.id)
            if (existing) {
                return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p)
            } else {
                return [...prev, { ...product, quantity }]
            }
        })
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id))
    }

    const clearCart = () => setCart([])

    const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0)
    const totalPrice = cart.reduce((sum, p) => sum + p.quantity * p.price, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

