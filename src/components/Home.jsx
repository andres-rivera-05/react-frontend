import React from 'react'
import { NavBar } from './NavBar'

export const Home = () => {

    
const TablaLibros =[

    {
        position : 1,
        equipo: "Real Madrid",
        estado : "Disponible"
    },
    {
        position : 2,
        equipo : "FC Barcelona",
        estado : "Reservado"
    },
    {
        position : 3,
        equipo : "Atletico Madrid",
        estado : "Disponible"
    },
    {
        position : 4,
        equipo : "Real Sociedad",
        estado : "Disponible"
    },
    {
        position : 5,
        equipo: "Real Madrid",
        estado : "Disponible"
    },
    {
        position : 6,
        equipo : "FC Barcelona",
        estado : "Reservado"
    },
    {
        position : 7,
        equipo : "Atletico Madrid",
        estado : "Reservado"
    },
    {
        position : 8,
        equipo : "Real Sociedad",
        estado : "Reservado"
    }
]
  return (
    <>
    
    <div className='container col-8 mt-5'>
            <h1 className='text-center text-white'>Sistema Biblioteca</h1>
            <div className='mt-5'>
               <NavBar></NavBar>
            </div>
        
            <table className='table table-bordered border-secondary'>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Libros</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    { TablaLibros.map( (item) =>(
                         
                         <tr key={item.position}>
                            <td>{item.position}</td>
                            <td>{item.equipo}</td>
                            <td>NAN</td>
                            <td>{item.estado}</td>
                       </tr>

                    ))}  
                </tbody>
            </table>
        </div>

    
    </>
  )
}
