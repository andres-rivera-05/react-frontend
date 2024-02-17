import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home  } from './components/Home'
import { Reservas } from './components/Reservas'
import { Categoris } from './components/Categoris'
import { Usuarios } from './components/Usuarios'
import { Terror } from './components/Terror'
import { Drama } from './components/Drama'
import { Novelas } from './components/Novelas'
import { Enciclopedias  } from './components/Enciclopedias'

function App() {
  

  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/reservas' element={<Reservas/>}></Route>
          <Route path='/categorias' element={<Categoris/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
          <Route path='/terror' element={<Terror/>}></Route>
          <Route path='/drama' element={<Drama/>}></Route>
          <Route path='/novelas' element={<Novelas/>}></Route>
          <Route path='/enciclopedias' element={<Enciclopedias/>}></Route>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
