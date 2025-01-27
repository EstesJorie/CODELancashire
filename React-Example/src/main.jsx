import { StrictMode } from 'react' //named export
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //default export

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
