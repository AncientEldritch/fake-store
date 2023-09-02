import React, {useEffect, useState, useContext} from 'react'
import "./ItemDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FavoritesContext } from '../../src/contexts/FavoritesContext'


function ItemDetails() {

  const {addProduct, Favorites}  = useContext(FavoritesContext)
    //This page shows details for each item when the page loads (useEffect)
    //urlparam via item id
    //extract id with useParams
    const {itemId} = useParams()
    //useState to hold details
    const [item, setItem] = React.useState('')
    // https://fakestoreapi.com/products/1
    //useEffect to load item with page 
    useEffect(
      ()=> {
        console.log(itemId)
        axios.get(`https://fakestoreapi.com/products/${itemId}`)
        .then(res =>  {
          //console.log(res.data)
          setItem(res.data)
        })
        .catch(err  => console.log(err))
      }, []
    );
  return (
    <div className="details-page-container">
      <img src={item.image} className="item-details-image"/>
      <div className="item-details-container">
        <p style={{fontSize: '20px', fontWeight: 'bold'}}>{item.title}</p>
        <p style={{fontSize: '20px', fontWeight: 'bold'}}>{item.price}€</p>
        <p style={{fontSize: '20px', fontWeight: 'bold'}}>Description</p>
        <p className="item-details-description">{item.description}</p>
        <button className="cart-button" onClick={()=>addProduct(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemDetails