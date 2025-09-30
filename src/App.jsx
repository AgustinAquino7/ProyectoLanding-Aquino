import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidxs a la Tienda de Juegos" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


