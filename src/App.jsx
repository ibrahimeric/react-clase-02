import { useState } from 'react'
import './App.css'
import Caja from './components//Caja'

function App() {
  const [count, setCount] = useState(0)
  const nuevaVariable = 'Comprar'
  const frutas = [{ name: 'tomate', precio: 23 }]







  return (
    <>
      <div>
        <h1>BIENVENIDO A VITE</h1>
        <Caja />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> {nuevaVariable}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
