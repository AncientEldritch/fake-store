import { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import ItemDetails from '../pages/ItemDetails/ItemDetails'
import Homepage from '../pages/Homepage/Homepage'
import Footer from '../components/Footer/Footer'
import ContactUs from '../pages/ContactUs/ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  FavoritesContextProvider from "./contexts/FavoritesContext"
import Cart from '../pages/Cart/Cart'
import CartContextProvider from './contexts/CartContext'




function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
      <FavoritesContextProvider>
       <Header />
       <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/itemdetails/:itemId' element={<ItemDetails />} />
         <Route path='/contactus' element={<ContactUs  />} />
         <Route path='/cart'  element={<Cart />} />
       </Routes>
       <Footer />
      </FavoritesContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
