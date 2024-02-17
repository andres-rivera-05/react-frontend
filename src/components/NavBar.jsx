import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Biblioteca</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page" href="#">Libros</Link>
              </li>
              <li className="nav-item">
                <Link to={'/reservas'} className="nav-link active" href="#">Reservas</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Terror</a></li>
                  <li><a className="dropdown-item" href="#">Drama</a></li>
                  <li><a className="dropdown-item" href="#">Comedias</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'/usuarios'} className="nav-link active" href="#" aria-disabled="true">Usuarios</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar libro" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
