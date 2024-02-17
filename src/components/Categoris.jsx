import React from 'react'
import { NavBar } from './NavBar'

export const Categoris = () => {

  const TablaCategorias = [

    {
      position: 1,
      libro: "Cumbres borrascosas",
      autor: "Emily Brontë",
      categoria: "Novela"
    },
    {
      position: 2,
      libro: "Romeo y Julieta",
      autor: "William Shakespeare",
      categoria: "Drama"
    },
    {
      position: 3,
      libro: "IT",
      autor: "Stephen King",
      categoria: "Terror"
    },
    {
      position: 4,
      libro: "Enciclopedia del Cine",
      autor: "Jean Tulard",
      categoria: "Enciclopedia"
    },
    {
      position: 5,
      libro: "El gran Gatsby",
      autor: "F. Scott Fitzgerald",
      categoria: "Novela"
    },
    {
      position: 6,
      libro: "Enciclopedia de Filosofía",
      autor: "José Ferrater Mora",
      categoria: "Enciclopedia"
    },
    {
      position: 7,
      libro: "El gran Gatsby",
      autor: "F. Scott Fitzgerald",
      categoria: "Drama"
    }
  ]

  return (
    <>


      <div className='container col-8 mt-5'>
        <h1 className='text-center text-white'>Categorias</h1>
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
            {TablaCategorias.map((item) => (

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
