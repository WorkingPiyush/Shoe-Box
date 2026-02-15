import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductList from './Pages/Product/ProductList'
import ProductViewPage from './Pages/Product/ProductViewPage'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import Layout from './sections/Layout'
import Home from './Pages/Home/Home'
import ProductCartPage from './Pages/Product/ProductCartPage'

function App() {

  return (
    <div className="min-h-screen w-full bg-white">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/male" element={<ProductList />} />
          <Route path="male/:id" element={<ProductViewPage />} />
          <Route path="/female" element={<ProductList />} />
          <Route path="female/:id" element={<ProductViewPage />} />
          <Route path="/kids" element={<ProductList />} />
          <Route path="kids/:id" element={<ProductViewPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartpage" element={<ProductCartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
