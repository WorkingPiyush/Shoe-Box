import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/UserContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartContainer } from './Context/CartContext.jsx'
import ShoeSizeProvider from './Context/ShoeSizeContext.jsx'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
})


createRoot(document.getElementById('root')).render(
  <ShoeSizeProvider>
    <UserProvider>
      <CartContainer>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <ToastContainer />
          </QueryClientProvider>
        </BrowserRouter>
      </CartContainer>
    </UserProvider>
  </ShoeSizeProvider>

)
