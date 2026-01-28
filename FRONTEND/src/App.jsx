import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TypeofShoes from './components/TypeofShoes'
import HomeImgSection from './components/HomeImgSection'
import CompanyCrousel from './components/CompanyCarousel'
import GetAllUpdates from './components/GetAllUpdates'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import ProductList from './components/ProductList'


function App() {

  return (
    <div className="min-h-screen w-full bg-white">

      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><TypeofShoes /> <HomeImgSection /><CompanyCrousel /><GetAllUpdates /><Footer /></>} />
        <Route path="/men" element={<ProductList />} />
        <Route path="/women" element={<ProductList />} />
        <Route path="/kids" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App
