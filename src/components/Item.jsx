import { Link } from "react-router-dom"

function Item({ id, title, description, price, image }) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm product-card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-truncate">{description}</p>
                    <p className="fw-bold mt-auto">
                        {price ? `$${Number(price).toFixed(2)}` : "Precio no disponible"}
                    </p>
                    <Link to={`/item/${id}`} className="btn btn-warning mt-2">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item
