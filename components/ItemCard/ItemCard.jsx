import React, {useContext, useEffect} from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FavoritesContext } from '../../src/contexts/FavoritesContext';



function ItemCard({product}) {

const {addProduct, favorites, removeProduct} = useContext(FavoritesContext)



  return (
    <div className="item-card">
        <img className="item-image" src={product.image} />
        <div className="details-container">
        {product.title.length > 25 ? (
          <Link to={`/itemdetails/${product.id}`} className="item-name">
            {product.title.substring(0, 25)}...
          </Link>
        ) : (
          <Link to={`/itemdetails/${product.id}`} className="item-name">
            {product.title}
          </Link>
        )}
        <p className="item-type">{product.category}</p>
        <p className="item-price">{product.price}€</p>
        {favorites.includes(product) ? (
          <FaHeart onClick={() => removeProduct(product)} className="heart-icon blue-heart" />
        ) : (
          <FaHeart onClick={()=>addProduct(product)}  className="heart-icon" />
        )}
      </div>
    </div>
  )
}

export default ItemCard