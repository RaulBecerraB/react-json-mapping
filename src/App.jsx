import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Tarjeta from './components/Tarjeta'

import Usuarios from './data.json'
function App() {
  
  return (
      <div className='flex flex-wrap justify-center align-middle'>
        {Usuarios.map((usuario, index) => <Tarjeta Usuario={usuario} key={index} />)}
      </div>    
  )
}

export default App
