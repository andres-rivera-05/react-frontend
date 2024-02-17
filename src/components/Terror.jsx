import React from 'react'
import { NavBar } from './NavBar'

export const Terror = () => {


      
const TablaLibros =[

  {
      position : 1,
      libro: "Real Madrid",
      autor : "Disponible",
      categoria : "Terror"
  },
  {
    position : 2,
    libro: "Real Madrid",
    autor : "Disponible",
    categoria : "Terror"
},
{
  position : 3,
  libro: "Real Madrid",
  autor : "Disponible",
  categoria : "Terror"
},
{
  position : 4,
  libro: "Real Madrid",
  autor : "Disponible",
  categoria : "Terror"
},
{
  position : 5,
  libro: "Real Madrid",
  autor : "Disponible",
  categoria : "Terror"
},
{
  position : 6,
  libro: "Real Madrid",
  autor : "Disponible",
  categoria : "Terror"
},
{
  position : 7,
  libro: "Real Madrid",
  autor : "Disponible",
  categoria : "Terror"
}
]

  return (
    <>
    
     
    <div className='container col-8 mt-5'>
            <h1 className='text-center text-white'>Categoria Libro - Terror</h1>
            <div className='mt-5'>
               <NavBar></NavBar>
            </div>
        
            <table className='table table-bordered border-secondary'>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Libros</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    { TablaLibros.map( (item) =>(
                         
                         <tr key={item.position}>
                          <td>{item.position}</td>
                            <td>{item.libro}</td>
                            <td>{item.autor}</td>
                            <td>{item.categoria}</td>
                       </tr>

                    ))}  
                </tbody>
            </table>
        </div>
    
    </>
  )
}
