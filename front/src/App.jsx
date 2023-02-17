import {
  BrowserRouter,
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} 
from "react-router-dom"

import './App.css'
import Navbar from './components/Navbar'
import Agregar from "./views/Agregar"
import Editar from "./views/Editar"
import Home from "./views/Home"

function App() {

  return (
  <BrowserRouter>
  <Navbar/>
   <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/agregar" element={<Agregar/>} />
    <Route path = "/editar/:id" element={<Editar/>} />
  </Routes>
  </BrowserRouter>
 
)}

export default App
