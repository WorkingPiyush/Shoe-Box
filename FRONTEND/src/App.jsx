import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero'
import TypeofShoes from './components/TypesOfShoes/TypeofShoes'
import HomeImgSection from './sections/HomeImgSection'
import CompanyCrousel from './components/CompanyCarousel/CompanyCarousel'
import GetAllUpdates from './components/GetAllUpdates'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductList from './Pages/Product/ProductList'
import ProductViewPage from './Pages/Product/ProductViewPage'

function App() {

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><TypeofShoes /> <HomeImgSection /><CompanyCrousel /><GetAllUpdates /><Footer /></>} />
        <Route path="/male" element={<ProductList />} />
        <Route path="male/:id" element={<ProductViewPage />} />
        <Route path="/female" element={<ProductList />} />
        <Route path="/kids" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App
