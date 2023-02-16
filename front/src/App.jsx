import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'

function App() {

  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <div className='list-form-main-container'>
        <Form/>
      </div>
    </div>
  )
}

export default App
