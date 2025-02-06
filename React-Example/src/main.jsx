import { StrictMode } from 'react' //named export
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //default export
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
