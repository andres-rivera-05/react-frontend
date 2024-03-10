import React, { useEffect, useState} from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

export const Home = () => {

  
  const [dtaLibros, setDataLibros]= useState([]);


      const getLibros = async ()=>{

        const url = "http://localhost:5000/api/libro";
        const response = await axios.get(url);
        const datos = await (response).data;

        setDataLibros(datos);
      }

  useEffect(()=>{

    getLibros();

  },[])
 
    
const TablaLibros =[

    {
        position: 1,
        libro: "El resplandor",
        autor: "Stephen King",
        estado: "Disponible"
      },
      {
        position: 2,
        libro: "Romeo y Julieta",
        autor: "William Shakespeare",
        estado: "Disponible"
      },
      {
        position: 3,
        libro: "Enciclopedia de Historia Universal",
        autor: "Eric Hobsbawm",
        estado: "Reservado"
      },
      {
        position: 4,
        libro: "1984",
        autor: "George Orwell",
        estado: "Disponible"
      },
      {
        position: 5,
        libro: "El arte de la guerra",
        autor: "Sun Tzu",
        estado: "Reservado"
      },
      {
        position: 6,
        libro: "El principito",
        autor: "Antoine de Saint-Exupéry",
        estado: "Disponible"
      },
      {
        position: 7,
        libro: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        estado: "Disponible"
      },
      {
        position: 8,
        libro: "Breve historia del tiempo",
        autor: "Stephen Hawking",
        estado: "Disponible"
      },
      {
        position: 9,
        libro: "Mujercitas",
        autor: "Louisa May Alcott",
        estado: "Reservado"
      },
      {
        position: 10,
        libro: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        estado: "Disponible"
      },
      {
        position: 11,
        libro: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        estado: "Disponible"
      },
      {
        position: 12,
        libro: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        estado: "Disponible"
      },
      {
        position: 13,
        libro: "Moby Dick",
        autor: "Herman Melville",
        estado: "Reservado"
      },
      {
        position: 14,
        libro: "Las aventuras de Sherlock Holmes",
        autor: "Arthur Conan Doyle",
        estado: "Disponible"
      },
      {
        position: 15,
        libro: "Orgullo y prejuicio",
        autor: "Jane Austen",
        estado: "Reservado"
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
                            <td>{item.libro}</td>
                            <td>{item.autor}</td>
                            <td>{item.estado}</td>
                       </tr>

                    ))}  
                </tbody>
            </table>

           
        </div>

    
    </>
  )
}
