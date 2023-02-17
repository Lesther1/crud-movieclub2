import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editar() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://videoclub3.onrender.com/movies/${id}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleInputChange = e => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`https://videoclub3.onrender.com/movies/${id}`, movie, {mode: 'no-corse'})
      .then(() => {
        // Si la actualización es exitosa, redirige al usuario a la página principal
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Editando película con ID {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" name="mov_title" value={movie.mov_title} onChange={handleInputChange} />

        <label>Año:</label>
        <input type="text" name="mov_year" value={movie.mov_year} onChange={handleInputChange} />

        <label>Duración:</label>
        <input type="text" name="mov_time" value={movie.mov_time} onChange={handleInputChange} />

        <label>Idioma:</label>
        <input type="text" name="mov_lang" value={movie.mov_lang} onChange={handleInputChange} />

        <label>Fecha de Lanzamiento:</label>
        <input type="text" name="mov_dt_rel" value={movie.mov_dt_rel} onChange={handleInputChange} />

        <label>País de Lanzamiento:</label>
        <input type="text" name="mov_rel_country" value={movie.mov_rel_country} onChange={handleInputChange} />

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default Editar;






