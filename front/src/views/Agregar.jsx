import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import './agregar.css'

function Agregar() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');
    const [language, setLanguage] = useState('');
    const [date, setDate] = useState('');
    const [country, setCountry] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };
  
    const handleDurationChange = (event) => {
      setDuration(event.target.value);
    };
  
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || year === "" || duration === "" || language === "" || date === "" || country === "") {
      window.alert("debes llenar los campos")
      return;
    }
  
    const data = {
      mov_title: title,
      mov_year: year,
      mov_time: duration,
      mov_lang: language,
      mov_dt_real: date,
      mov_rel_country: country
    }
    
    axios.post('https://videoclub3.onrender.com/movies', data)
    .then(() => {
      // Cambiar el estado de updateList
      setUpdateList(true);
      // Redirigir a la página de ListMovie
      history.push('/listmovie');
    })
    .catch((err) => {
      console.log(err);
    });
  };
    return (
      <div>
        <button className='btn-send'>
        <NavLink to="/">
      volver
      </NavLink>
        </button>

      <div className='form-main-container'>
          <h2 className="form-title">AGREGAR O MODIFICAR UNA PELICULA</h2>
          <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-container'>
          <input type="text" 
          placeholder='Titulo' 
          onChange={handleTitleChange}
          value={title}
          required 
          className='form-input'/>
  
          <input type="number" 
          placeholder='Año'
          onChange={handleYearChange}
          value={year}
          required
           className='form-input'/>
  
          <input type="number" 
          placeholder='Duracion' 
          onChange={handleDurationChange}
          value={duration}
          required
          className='form-input'/>
          
          <input type="text"
          placeholder='idioma'
          onChange={handleLanguageChange}
          value={language}
          required
          className='form-input' />
          
          <input type="date" 
          placeholder='Fecha de lanzamiento' 
          onChange={handleDateChange}
          value={date}
          required
          className='form-input' />
          
          <input type="text"
          placeholder='Pais'
          onChange={handleCountryChange}
          value={country} 
          required
          className='form-input' />
          </div>
          <button className='btn-send' onClick={handleSubmit}>  
            <NavLink to="/">
                Enviar
            </NavLink>
          </button>
          </form>
         
      </div>
      </div>
  )
}

export default Agregar