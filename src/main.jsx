import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Saludar from './components/Saludo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Saludar />
  </React.StrictMode>,
)
