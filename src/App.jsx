import { useState } from 'react'

import './App.css'
import ListaProductos from './componentes/ListaProductos'
import FormularioProductos from './componentes/FormularioProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Examen Diego Alonso Feijoo</h1>
      <FormularioProductos></FormularioProductos>
    </>
  )
}

export default App
