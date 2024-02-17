import React from 'react'
import { NavBar } from './NavBar'

export const Novelas = () => {
 

    const TablaNovelas =[

        {
            position: 1,
            libro: "Romeo y Julieta",
            autor: "William Shakespeare",
            categoria: "Novela"
          },
          {
            position: 2,
            libro: "Orgullo y prejuicio",
            autor: "Jane Austen",
            categoria: "Novela"
          },
          {
            position: 3,
            libro: "Cumbres borrascosas",
            autor: "Emily Brontë",
            categoria: "Novela"
          },
          {
            position: 4,
            libro: "El gran Gatsby",
            autor: "F. Scott Fitzgerald",
            categoria: "Novela"
          },
          {
            position: 5,
            libro: "Matar a un ruiseñor",
            autor: "Harper Lee",
            categoria: "Novela"
          },
          {
            position: 6,
            libro: "Anna Karenina",
            autor: "León Tolstói",
            categoria: "Novela"
          },
          {
            position: 7,
            libro: "Las uvas de la ira",
            autor: "John Steinbeck",
            categoria: "Novela"
          },
          {
            position: 8,
            libro: "Mil soles espléndidos",
            autor: "Khaled Hosseini",
            categoria: "Novela"
          },
          {
            position: 9,
            libro: "La casa de los espíritus",
            autor: "Isabel Allende",
            categoria: "Novela"
          },
          {
            position: 10,
            libro: "El corazón es un cazador solitario",
            autor: "Carson McCullers",
            categoria: "Novela"
          }
        
      ]

    return (
        <>
        
         
        <div className='container col-8 mt-5'>
                <h1 className='text-center text-white'>Categoria Libro - Novelas</h1>
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
                        { TablaNovelas.map( (item) =>(
                             
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
