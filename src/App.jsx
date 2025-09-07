import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "./index.css"

function App() {
  return (
    <>
      <NavBar />
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Bienvenido a MiEcommerce</h1>
          <p className="lead">Los mejores juegos al mejor precio</p>
          <button className="btn btn-light btn-lg">Ver productos</button>
        </div>
      </header>
      <ItemListContainer greeting="¡Explora nuestros juegos destacados!" />
    </>
  )
}

export default App


