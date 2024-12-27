import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'; // Use o arquivo gerado corretamente
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
