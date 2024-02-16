import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home  } from './components/Home'
import { Reservas } from './components/Reservas'
import { Categoris } from './components/Categoris'
import { Usuarios } from './components/Usuarios'
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/reservas' element={<Reservas/>}></Route>
          <Route path='/categorias' element={<Categoris/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
