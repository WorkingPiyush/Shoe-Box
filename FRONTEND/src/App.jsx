import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const Signup = lazy(() => import('./Pages/Auth/Signup.jsx'))
const Login = lazy(() => import('./Pages/Auth/Login.jsx'))
const WishListPage = lazy(() => import('./Pages/User/WishListPage.jsx'))
const AddressPage = lazy(() => import('./Pages/User/AddressPage.jsx'))
const ProfilePage = lazy(() => import('./Pages/User/ProfilePage.jsx'))
const HelpAndSupport = lazy(() => import('./Pages/User/HelpAndSupport.jsx'))
const OrderDetailsPage = lazy(() => import('./Pages/User/Orders/OrderDetailsPage.jsx'))
const OrdersListPage = lazy(() => import('./Pages/User/Orders/OrderList.jsx'))
const OrderCheckout = lazy(() => import('./Pages/Order/OrderCheckout.jsx'))
const ProductList = lazy(() => import('./Pages/Product/ProductList.jsx'))
const ProductViewPage = lazy(() => import('./Pages/Product/ProductViewPage.jsx'))
const ProductCartPage = lazy(() => import('./Pages/Product/ProductCartPage.jsx'))
const UserProfile = lazy(() => import('./Pages/User/UserProfile.jsx'))
const UserVerification = lazy(() => import('./Pages/User/UserVerification.jsx'))
const Layout = lazy(() => import('./sections/Layout.jsx'));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));


// import PageNotFound from './components/PageNotFound.jsx'
import PublicRouteG from './components/PublicRoute'
import FullScreenLoader from './components/FullScreenLoader.jsx'
function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
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
            <Route path="/summary" element={<OrderCheckout />} />
            <Route path="/:gender" element={<ProductList />} />
            <Route path="/:gender/:slug" element={<ProductViewPage />} />
          </Route>
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
    </div >
  );
}

export default App
