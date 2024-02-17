import React from 'react'
import { NavBar  } from './NavBar'

export const Reservas = () => {


  const TablaReservas =[

    {
        position : 1,
        usuario: "Juan Perez",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 2,
        usuario : "Maria Lopez",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 3,
        usuario : "Itali Madrid",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 4,
        usuario : "Fernando Manueles",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 5,
        usuario: "Daniel Mejia",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 6,
        usuario : "Patricia Castro",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 7,
        usuario : "David Rodriguez",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    },
    {
        position : 8,
        usuario : "Carlos Euceda",
        libro : "El Principito",
        fecha_reserva: "2024-02-17",
        fecha_devolucion: "2024-02-19",
        estado : "Activo"
    }
]

  return (
   <>
     <div className='container col-8 mt-5'>
            <h1 className='text-center text-white'>Sistema Biblioteca - Reservas</h1>
            <div className='mt-5'>
               <NavBar></NavBar>
            </div>
        
            <table className='table table-bordered border-secondary'>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Libro</th>
                    <th scope="col">Fecha Reserva</th>
                    <th scope="col">Fecha Devolucion</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    { TablaReservas.map( (item) =>(
                         
                         <tr key={item.position}>
                           <td>{item.position}</td>
                            <td>{item.usuario}</td>
                            <td>{item.libro}</td>                           
                            <td>{item.fecha_reserva}</td> 
                            <td>{item.fecha_devolucion}</td>
                            <td>{item.estado}</td>
                       </tr>

                    ))}  
                </tbody>
            </table>
        </div>
    </>
  )
}
