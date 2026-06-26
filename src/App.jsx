import { useState } from 'react'

import './App.css'
import ListaProductos from './componentes/ListaProductos'
import FormularioProductos from './componentes/FormularioProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 text-center'>Examen Diego Alonso Feijoo</h1>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <FormularioProductos></FormularioProductos>
        </div>
      </div>
    </div>
  )
}

export default App
