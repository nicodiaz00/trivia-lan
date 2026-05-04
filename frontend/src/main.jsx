import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Juego from './juegoPreguntas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Juego />
  </StrictMode>,
)