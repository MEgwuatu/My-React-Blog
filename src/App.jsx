import React from 'react'
import Navbar from './Components/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';




const App = () => {
  return (
    <div>
        <Navbar/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
     </Routes>

      
    </div>
  )
}

export default App
