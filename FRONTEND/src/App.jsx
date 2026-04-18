import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const WishListPage = lazy(() => import('./Pages/User/WishListPage.jsx'))
const AddressPage = lazy(() => import('./Pages/User/AddressPage.jsx'))
const ProfilePage = lazy(() => import('./Pages/User/ProfilePage.jsx'))
const HelpAndSupport = lazy(() => import('./Pages/User/HelpAndSupport.jsx'))
const OrderDetailsPage = lazy(() => import('./Pages/User/Orders/OrderDetailsPage.jsx'))
const OrdersListPage = lazy(() => import('./Pages/User/Orders/OrderList.jsx'))
const OrderCheckout = lazy(() => import('./Pages/Order/OrderCheckout.jsx'))
const UserProfile = lazy(() => import('./Pages/User/UserProfile.jsx'))
const UserVerification = lazy(() => import('./Pages/User/UserVerification.jsx'))

import Signup from './Pages/Auth/Signup.jsx'
import Login from './Pages/Auth/Login.jsx'
import ProductCartPage from './Pages/Product/ProductCartPage.jsx'
import Home from './Pages/Home/Home.jsx'
import ProductViewPage from './Pages/Product/ProductViewPage.jsx'
import ProductList from './Pages/Product/ProductList.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import FullScreenLoader from './components/FullScreenLoader.jsx'
import ForGuestOnly from './Guards/ForGuestOnly.jsx'
import ForRegisteredOnly from './Guards/ForRegisteredOnly.jsx'
import UserLayout from './sections/UserLayout.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            {/* for guest users only */}
            <Route element={<ForGuestOnly />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* for logged users only*/}
            <Route element={<ForRegisteredOnly />}>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/orders" element={<OrdersListPage />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/address" element={<AddressPage />} />
              <Route path="/userprofile" element={<ProfilePage />} />
              <Route path="/help" element={<HelpAndSupport />} />
              <Route path="/order/:orderId" element={<OrderDetailsPage />} />
              <Route path="/verify/:type" element={<UserVerification />} />
              <Route path="/summary" element={<OrderCheckout />} />
            </Route>
            {/* Public routes */}
            <Route path="/cart" element={<ProductCartPage />} />
            <Route path="/products/:gender" element={<ProductList />} />
            <Route path="/products/:gender/:slug" element={<ProductViewPage />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div >
  );
}

export default App
