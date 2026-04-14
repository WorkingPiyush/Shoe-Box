import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoeSizeProvider from './Context/ShoeSizeContext.jsx'
import { ToastContainer } from 'react-toastify'
import { WishListContainer } from './Context/WishListContext.jsx'
import { CartContainer } from './Context/CartContext.jsx'
import CategoryFilterContextProvider from './Context/CategoryFilterContext.jsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
})
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <CategoryFilterContextProvider>
      <ShoeSizeProvider>
        <WishListContainer>
          <CartContainer>
            <BrowserRouter>
              <App />
              <ToastContainer />
            </BrowserRouter>
          </CartContainer>
        </WishListContainer>
      </ShoeSizeProvider>
    </CategoryFilterContextProvider>
  </QueryClientProvider>

)
