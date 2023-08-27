import React, {useContext, useEffect} from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'

function ItemCard({product}) {
  return (
    <div className="item-card">
        <img className="item-image" src={product.image} />
        <div className="details-container">
        {
          product.title.length > 25?
              <Link to={`/itemdetails/${product.id}`} className="item-name">{product.title.substring(0,25)}...</Link>
              :<Link to={`/itemdetails/${product.id}`} className="item-name">{product.title}</Link>
            }
          <p className="item-type">{product.category}</p>
          <p className="item-price">{product.price}€</p>
        </div>

    </div>
  )
}

export default ItemCard