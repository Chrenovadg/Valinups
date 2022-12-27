import React from 'react'
import ReactDOM from 'react-dom/client'
import { ValineupApp } from './ValineupApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ValineupApp />
    </BrowserRouter>
  </React.StrictMode>
)
