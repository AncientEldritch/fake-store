import React, {useContext, useEffect, useState} from 'react'
import  './Cart.css'
import axios from 'axios'
import { FavoritesContext } from '../../src/contexts/FavoritesContext'
import { BsTrash } from "react-icons/bs";
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor:"rgba(255,255,255, 0.9)"
  }
};

Modal.setAppElement(document.getElementById('root'));


function Cart() {


const {addProduct, favorites, removeProduct, clearFavorites} = useContext(FavoritesContext)
const [isOpen, setIsOpen] = React.useState(false)

useEffect(
    ()=> {
      console.log(favorites)

    }, []
  );

  const totalPrice = favorites.reduce((current, item) => current + item.price, 0);

  return (
    
    <div className="cart-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <div className="modal-container">
          <p className="modal-text">Your order was successful!</p> 
          <p className="modal-text">Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
          <Link className="return-button" onClick={()=>clearFavorites()}to="/">Return to Main Page</Link>
        </div>
        
      
      </Modal>
      <div className="cart-labels">
        <p className="item-label">Item</p>
        <p className="label">Price</p>
        <p className="label">Quantity</p>
        <p className="label">Remove</p>
      </div>
      {favorites.length > 0 ? (
        favorites.map(item => (
          
          <div className="cart-item-container" key={item.id}>
            <img className="cart-image"  src={item.image} alt={`Item ${item.id}`} />
            <p className="item-title-cart"  style={{fontWeight: 'bold',}}>{item.title}</p>
            <p style={{fontWeight: 'bold',}}>{item.price}€</p>
            <p style={{fontWeight: 'bold',}}>1</p>
            <BsTrash style={{fontSize: '25px'}} onClick={()=>removeProduct(item)} className="trashcan"/>

          </div>
        ))
      ) : (
        <p className="nada">There is nothing in your cart.</p>
      )}
      {totalPrice !== 0 ? 
      <div className="cart-bottom-container">
        <p className="total">Total: {totalPrice.toFixed(2)}€</p> 
        <button onClick={()=>setIsOpen(true)} className="checkout">Checkout</button>

        </div> : null}
    </div>
  );
}

export default Cart 