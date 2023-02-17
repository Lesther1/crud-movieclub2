import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import '../components/listMovie.css'
function Home() {
    const [datamovies, setDataMovies] = useState([])
    const [updateList, setUpdateList] = useState(false);
    const [movieToEdit, setMovieToEdit] = useState(null);
    
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
        setMovieToEdit(movie);
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
              <NavLink to={`/editar/${Movies._id}`}>
                Editar
              </NavLink>
              </button>
            </td>
          </tr>
        )
      })
  return (
    <div>
    <NavLink to="/agregar">
         Agregar
    </NavLink>
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

export default Home