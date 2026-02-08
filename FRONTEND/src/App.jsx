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
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'

function App() {

  return (
    <div className="min-h-screen w-full bg-white">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<><Navbar /><Hero /><TypeofShoes /> <HomeImgSection /><CompanyCrousel /><GetAllUpdates /><Footer /></>} />
        <Route path="/male" element={<><Navbar /><ProductList /></>} />
        <Route path="male/:id" element={<><Navbar /><ProductViewPage /></>} />
        <Route path="/female" element={<><Navbar /><ProductList /></>} />
        <Route path="female/:id" element={<><Navbar /><ProductViewPage /></>} />
        <Route path="/kids" element={<><Navbar /><ProductList /></>} />
        <Route path="kids/:id" element={<><Navbar /><ProductViewPage /></>} />
        <Route path="/signup" element={<><Navbar /><Signup /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        
      </Routes>
    </div>
  );
}

export default App
