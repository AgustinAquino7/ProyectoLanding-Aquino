import ItemCount from "./ItemCount"

function ItemDetail({ title, description, price, image }) {
    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: "600px" }}>
            <img src={image} alt={title} className="card-img-top" style={{ maxHeight: "400px", objectFit: "cover" }} />
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="fw-bold">Precio: ${price}</p>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail
