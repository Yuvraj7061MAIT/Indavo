import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import ShopContextProvider, { ShopContext } from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> origin/main
  </StrictMode>,
)
