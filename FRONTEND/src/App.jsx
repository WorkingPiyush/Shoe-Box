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
import UserProfile from './Pages/User/UserProfile'
import PublicRouteG from './components/PublicRoute'
import WishListPage from './Pages/User/WishListPage'
import AddressPage from './Pages/User/AddressPage'
import ProfilePage from './Pages/User/ProfilePage'
import HelpAndSupport from './Pages/User/HelpAndSupport'
import OrderDetailsPage from './Pages/User/Orders/OrderDetailsPage.jsx'
import OrdersListPage from './Pages/User/Orders/OrderList.jsx'
import UserVerification from './Pages/User/UserVerification.jsx'

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
          <Route path="/signup" element={<PublicRouteG><Signup /></PublicRouteG>} />
          <Route path="/login" element={<PublicRouteG><Login /></PublicRouteG>} />
          <Route path="/cart" element={<ProductCartPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders" element={<OrdersListPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/userprofile" element={<ProfilePage />} />
          <Route path="/help" element={<HelpAndSupport />} />
          <Route path="/order/:orderId" element={<OrderDetailsPage />} />
          <Route path="/verify/:type" element={<UserVerification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
