import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { CartContextProvider } from './contexts/CartContext.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
