import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Editar() {
  const {id} = useParams();
  const [datamovies, setDataMovies] = useState([])
  useEffect(() => {
    axios.get('https://videoclub3.onrender.com/movies')
      .then(res => {
        setDataMovies(res.data);
        console.log(datamovies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Editando película con ID {id}</h1>
    </div>
  );
}

export default Editar;






