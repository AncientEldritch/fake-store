import React, {useEffect, useState} from 'react'
import "./ItemDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ItemDetails() {
    //This page shows details for each item when the page loads (useEffect)
    //urlparam via item id
    //extract id with useParams
    const itemId = useParams()
    //useState to hold details
    const [item, setItem] = React.useState('')
    // https://fakestoreapi.com/products/1
    //useEffect to load item with page 
    useEffect(
      ()=> {
        console.log(itemId.itemId)
        axios.get(`https://fakestoreapi.com/products/${itemId.itemId}`)
        .then(res =>  {
          console.log(res.data)
          setItem(res.data)
        })
        .catch(err  => console.log(err))
      }, []
    );
  return (
    <div className="details-page-container">
      <img src={item.image} className="item-details-image"/>
      <div className="item-details-container">
        <p className="item-details-title">{item.title}</p>
        <p className="item-details-price">{item.price}</p>
        <p style={{fontSize: '20px', fontWeight: 'bold'}}>Description</p>
        <p className="item-details-description">{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetails