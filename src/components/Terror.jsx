import React from 'react'
import { NavBar } from './NavBar'

export const Terror = () => {


      
const TablaTerror =[

  {
    position: 1,
    libro: "El resplandor",
    autor: "Stephen King",
    categoria: "Terror"
  },
  {
    position: 2,
    libro: "IT",
    autor: "Stephen King",
    categoria: "Terror"
  },
  {
    position: 3,
    libro: "El exorcista",
    autor: "William Peter Blatty",
    categoria: "Terror"
  },
  {
    position: 4,
    libro: "Drácula",
    autor: "Bram Stoker",
    categoria: "Terror"
  },
  {
    position: 5,
    libro: "Frankenstein",
    autor: "Mary Shelley",
    categoria: "Terror"
  },
  {
    position: 6,
    libro: "El silencio de los corderos",
    autor: "Thomas Harris",
    categoria: "Terror"
  },
  {
    position: 7,
    libro: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    categoria: "Terror"
  },
  {
    position: 8,
    libro: "Pet Sematary",
    autor: "Stephen King",
    categoria: "Terror"
  },
  {
    position: 9,
    libro: "El terror",
    autor: "Dan Simmons",
    categoria: "Terror"
  },
  {
    position: 10,
    libro: "American Psycho",
    autor: "Bret Easton Ellis",
    categoria: "Terror"
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
                    { TablaTerror.map( (item) =>(
                         
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
