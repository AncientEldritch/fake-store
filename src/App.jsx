import { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import ItemDetails from '../pages/ItemDetails/ItemDetails'
import Homepage from '../pages/Homepage/Homepage'
import Footer from '../components/Footer/Footer'
import ContactUs from '../pages/ContactUs/ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  FavoritesContextProvider from "./contexts/FavoritesContext"




function App() {

  return (
    <BrowserRouter>
      <FavoritesContextProvider>
       <Header />
       <Routes>
         <Route path='/homepage' element={<Homepage />} />
         <Route path='/itemdetails/:itemId' element={<ItemDetails />} />
         <Route path='/contactus' element={<ContactUs  />} />
       </Routes>


      
       <Footer />
      </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
