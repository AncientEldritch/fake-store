import React, {useContext, useEffect, useState} from 'react'
import  './Cart.css'
import axios from 'axios'
import { CartContext } from '../../src/contexts/CartContext'
import { BsTrash } from "react-icons/bs";


function Cart() {

const {addToCart, inCart, removeFromCart} = useContext(CartContext)


useEffect(
    ()=> {
      console.log(inCart)

    }, []
  );

  return (
    <div>
      {inCart.length > 0 ? (
        inCart.map(item => (
          <div className="cart-item-container" key={item.id}>
            <img className="cart-image"  src={item.image} alt={`Item ${item.id}`} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>1</p>
            <BsTrash onClick={()=>removeFromCart(item.id)} className="trashcan"/>
            {console.log(item.id)}
          </div>
         
        ))
      ) : (
        <p>There is nothing in your cart.</p>
      )}
    </div>
  );
}

export default Cart 