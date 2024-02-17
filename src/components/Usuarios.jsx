import React from 'react'
import { NavBar } from './NavBar'

export const Usuarios = () => {

    const TablaUsers =[

        {
            position : 1,
            nombre: "Juan Perez",
            gmail : "juanperes24@gmail.com",
            reservas : 1
        },
        {
            position : 2,
            nombre : "Maria Lopez",
            gmail : "marialopez23@gmail.com",
            reservas : 3
        },
        {
            position : 3,
            nombre : "Itali Madrid",
            gmail : "madriditali34@gmail.com",
            reservas : 1
        },
        {
            position : 4,
            nombre : "Fernando Manueles",
            gmail : "Manuelesdestructor34@gmail.com",
            reservas : 2
        },
        {
            position : 5,
            nombre: "Daniel Mejia",
            gmail : "Danielmegia243@gmail.com",
            reservas : 1
        },
        {
            position : 6,
            nombre : "Patricia Castro",
            gmail : "paticastro54@gmail.com",
            reservas : 3
        },
        {
            position : 7,
            nombre : "David Rodriguez",
            gmail : "rodrigesdavidd12312@gmail.com",
            reservas : 3
        },
        {
            position : 8,
            nombre : "Carlos Euceda",
            gmail : "Euces29323@gmail.com",
            reservas : 1
        }
    ]

  return (
    <>
    <div className='container col-8 mt-5'>
            <h1 className='text-center text-white'>Sistema Biblioteca - Usuarios</h1>
            <div className='mt-5'>
               <NavBar></NavBar>
            </div>
        
            <table className='table table-bordered border-secondary'>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Gmail</th>
                    <th scope="col">Reservas</th>
                    </tr>
                </thead>
                <tbody>
                    { TablaUsers.map( (item) =>(
                         
                         <tr key={item.position}>
                           <td>{item.position}</td>
                            <td>{item.nombre}</td>
                            <td>{item.gmail}</td>                           
                            <td>{item.reservas}</td> 
                       </tr>

                    ))}  
                </tbody>
            </table>
        </div>
    </>
  )
}
