import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'



export const Home = () => {

  const [dataLibros, setDataLibros] = useState([]);
  const [cambioEstado, setCambioEstado] = useState(0);
  const [filtro, setFiltro] = useState('');
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const [libroEncontrado, setLibroEncontrado] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLibros = async () => {
    const url = "http://localhost:5000/api/libro";
    const response = await axios.get(url);
    return response.data
  }

  useEffect(() => {

    const fetchDatda = async () => {
      try {
        const libros = await getLibros();
        setDataLibros(libros)
      } catch (err) {
        console.error("Error al obtener datos:", err);
      } finally {
        setIsLoading(false)
      }
    }

    fetchDatda();

  }, [cambioEstado])


  const buscar = () => {
    if (busquedaRealizada) {
      if (filtro.trim() === '') {
        return dataLibros;
      } else {
        return dataLibros.filter(libro =>
          libro.id.toString().includes(filtro.toLowerCase()) ||
          libro.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
          libro.autor.toLowerCase().includes(filtro.toLowerCase()) ||
          libro.estado.toLowerCase().includes(filtro.toLowerCase())
        );
      }
    } else {
      return []
    }
  }


  const handlerFiltroChange = (value) => {
    setFiltro(value);
    console.log("hola", value)

    if (value.trim() === '') {
      setBusquedaRealizada(false)
    }
  };

  const handlerBusquedaClick = () => {
    setBusquedaRealizada(true);
    const libroEncontrado = buscar();
    setLibroEncontrado(libroEncontrado.length > 0 ? libroEncontrado[0] : null);
  };

  const borrarLibro = async (idLibro) => {
    const url = `http://localhost:5000/api/libro/delete/${idLibro}`;
    const response = await axios.delete(url);
    const datos = await (response).data;
    setCambioEstado(cambioEstado + 1)
  }

  return (
    <>

      <div className='container col-10 mt-5'>
        <h1 className='text-center text-white'>Sistema Biblioteca</h1>
        <div className='mt-5'>
          <NavBar
            filtro={filtro}
            onFiltroChange={(event) => handlerFiltroChange(event)}
            onBusquedaClick={(event) => handlerBusquedaClick(event)}></NavBar>
        </div>

        {
          isLoading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table className='table table-bordered border-secondary'>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Libros</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Ano Publicacion</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  busquedaRealizada && libroEncontrado ? (
                    <tr key={libroEncontrado.id}>
                      <td>{libroEncontrado.id}</td>
                      <td>{libroEncontrado.titulo}</td>
                      <td>{libroEncontrado.autor}</td>
                      <td>{libroEncontrado.anio_publicacion}</td>
                      <td>{libroEncontrado.estado}</td>
                      <td className='text-center'><button className='btn btn-danger' onClick={() => borrarLibro(libroEncontrado.id)}>X</button></td>
                    </tr>
                  ) : busquedaRealizada && !libroEncontrado ? (
                    <tr>
                      <td colSpan="6">No se encontraron resultados.</td>
                    </tr>
                  ) : (
                    dataLibros.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.titulo}</td>
                        <td>{item.autor}</td>
                        <td>{item.anio_publicacion}</td>
                        <td>{item.estado}</td>
                        <td className='text-center'><button className='btn btn-danger' onClick={() => borrarLibro(item.id)}>X</button></td>
                      </tr>
                    ))
                  )
                }
              </tbody>
            </table>
          )
        }
      </div>
    </>
  )
}

