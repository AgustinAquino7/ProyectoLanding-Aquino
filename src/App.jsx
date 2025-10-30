// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Catálogo de Juegos - Especial Halloween 🎃" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2 className="text-center my-5">404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p>Mi Tienda Halloween 🎃 - Hecho con React y Firestore</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App



