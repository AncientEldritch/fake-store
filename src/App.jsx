import { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import ItemDetails from '../pages/ItemDetails/ItemDetails'
import Homepage from '../pages/Homepage/Homepage'
import Footer from '../components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/itemdetails/:itemId' element={<ItemDetails />} />

        </Routes>


      
      <Footer />
    </BrowserRouter>
  )
}

export default App
