import { Link } from "react-router-dom"

function Item({ id, title, description, image, price }) {
    return (
        <div className="col-md-3">
            <div className="card h-100 shadow-sm">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted">{description}</p>
                    <p className="fw-bold">${price}</p>
                    <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
                        Ver detalle
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item
