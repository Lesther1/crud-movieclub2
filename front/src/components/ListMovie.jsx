import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import './listMovie.css'

function ListMovie(){

    const [datamovies, setDataMovies] = useState([])
    const [updateList, setUpdateList] = useState(false);
    
    useEffect(() => {
      axios.get('https://videoclub3.onrender.com/movies').then(res => {
        setDataMovies(res.data)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, [updateList])
    
    
    const handleDelete = (id) => {
      axios.delete(`https://videoclub3.onrender.com/movies/${id}`)
        .then(() => {
          setDataMovies(datamovies.filter((movie) => movie._id !== id));
          setUpdateList(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleEdit = (movie) => {
      console.log(movie)
    };

    
      const listmovies = datamovies.map(Movies=> {
        return(
          <tr key={Movies._id}>
            <td>{Movies.mov_title}</td>
            <td>{Movies.mov_year}</td>
            <td>{Movies.mov_time}</td>
            <td>{Movies.mov_lang}</td>
            <td>{Movies.mov_dt_rel}</td>
            <td>{Movies.mov_rel_country}</td>
            <td>
              <button onClick={() => handleDelete(Movies._id)}>Eliminar</button>
              <button onClick={() => handleEdit(Movies)}>            
              <NavLink to="/editar">
                Editar
            </NavLink>
              </button>
            </td>
          </tr>
        )
      })
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Año</th>
          <th>Duración</th>
          <th>Idioma</th>
          <th>Fecha de Lanzamiento</th>
          <th>País de Lanzamiento</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {listmovies}
      </tbody>
    </table>
  </div>
  )
}
export default ListMovie
