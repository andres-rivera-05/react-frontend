import React from 'react'
import { NavBar  } from './NavBar'

export const Enciclopedias = () => {

    const TablaEnciclopedia =[

        {
    position: 1,
    libro: "Enciclopedia de Historia Universal",
    autor: "Eric Hobsbawm",
    categoria: "Enciclopedia"
  },
  {
    position: 2,
    libro: "Enciclopedia de Filosofía",
    autor: "José Ferrater Mora",
    categoria: "Enciclopedia"
  },
  {
    position: 3,
    libro: "Enciclopedia del Cine",
    autor: "Jean Tulard",
    categoria: "Enciclopedia"
  },
  {
    position: 4,
    libro: "Enciclopedia de la Literatura",
    autor: "Harold Bloom",
    categoria: "Enciclopedia"
  },
  {
    position: 5,
    libro: "Enciclopedia de la Música",
    autor: "Stanley Sadie",
    categoria: "Enciclopedia"
  },
  {
    position: 6,
    libro: "Enciclopedia de la Mitología",
    autor: "Janet Parker",
    categoria: "Enciclopedia"
  },
  {
    position: 7,
    libro: "Enciclopedia de Medicina",
    autor: "Robert M. Youngson",
    categoria: "Enciclopedia"
  },
  {
    position: 8,
    libro: "Enciclopedia de Psicología",
    autor: "Richard J. Corsini",
    categoria: "Enciclopedia"
  },
  {
    position: 9,
    libro: "Enciclopedia de la Naturaleza",
    autor: "David Burnie",
    categoria: "Enciclopedia"
  },
  {
    position: 10,
    libro: "Enciclopedia de la Física",
    autor: "George Gamow",
    categoria: "Enciclopedia"
  }
        
      ]

    return (
        <>
        
         
        <div className='container col-8 mt-5'>
                <h1 className='text-center text-white'>Categoria Libro - Enciclopedia</h1>
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
                        { TablaEnciclopedia.map( (item) =>(
                             
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
