// src/components/ItemList.jsx
import Item from "./Item"

function ItemList({ items }) {
    return (
        <div className="row g-4">
            {items.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList
