import React from 'react'
import './ItemCard.css'

function ItemCard({product}) {
  return (
    <div className="item-card">
        <img src={product.image} />
        <p className="item-name">{product.title}</p>
        <p className="item-type">{product.category}</p>
        <p className="item-price">{product.price}</p>

    </div>
  )
}

export default ItemCard