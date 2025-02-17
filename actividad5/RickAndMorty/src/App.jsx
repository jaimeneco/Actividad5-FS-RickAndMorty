import { useState } from 'react'
import './App.css'

import { TarjetaDeUsuario } from './assets/components/actividades/TarjetaDeUsuario';

import { Usuario } from './db/datos';


//-------------------------------------------------
//--------------INICIO DE LA APP-------------------
//-------------------------------------------------
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TarjetaDeUsuario usuario={Usuario} />
    </>
  )
}

export default App
