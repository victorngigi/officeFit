import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'boxicons/css/boxicons.min.css'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <Toaster position="top-right" reverseOrder={false} />
      <App />
    </CartProvider>
  </StrictMode>,
)
