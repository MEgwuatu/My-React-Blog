import React from 'react'
import Navbar from './Components/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';




const App = () => {
  return (
    <div>
        <Navbar/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path='/login' element={< Login />}/>
        <Route path="/reset" element={<ResetPassword />} />
     </Routes>

      
    </div>
  )
}

export default App
