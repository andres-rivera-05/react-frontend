import React from 'react'

export const Reservas = () => {

  const TablaUsers =[

    {
        position : 1,
        nombre: "Juan Perez",
        gmail : "juanperes24@gmail.com"
    },
    {
        position : 2,
        nombre : "Maria Lopez",
        gmail : "marialopez23@gmail.com"
    },
    {
        position : 3,
        nombre : "Itali Madrid",
        gmail : "madriditali34@gmail.com"
    },
    {
        position : 4,
        nombre : "Fernando Manueles",
        gmail : "Manuelesdestructor34@gmail.com"
    },
    {
        position : 5,
        nombre: "Daniel Mejia",
        gmail : "Danielmegia243@gmail.com"
    },
    {
        position : 6,
        nombre : "Patricia Castro",
        gmail : "paticastro54@gmail.com"
    },
    {
        position : 7,
        nombre : "David Rodriguez",
        gmail : "rodrigesdavidd12312@gmail.com"
    },
    {
        position : 8,
        nombre : "Carlos Euceda",
        gmail : "Euces29323@gmail.com"
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Gmail</th>
                    </tr>
                </thead>
                <tbody>
                    { TablaUsers.map( (item) =>(
                         
                         <tr key={item.position}>
                           <td>{item.position}</td>
                            <td>{item.nombre}</td>
                            <td>{item.gmail}</td>                           
                       </tr>

                    ))}  
                </tbody>
            </table>
        </div>
    </>
  )
}
