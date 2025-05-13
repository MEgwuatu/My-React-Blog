import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import { auth } from './Firebase-config';
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CreateForm from './Pages/CreateForm';




const App = () => {

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));




  return (
    <div>
       <ToastContainer position='top-right' theme="colored" />
        <Navbar/>

     <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />}/>
        <Route path='/login' element={< Login setIsAuth={setIsAuth} />}/>
        <Route path="/reset" element={<ResetPassword />} />
        <Route path='/create-post' element={<CreateForm isAuth={isAuth} />} />

     </Routes>

      
    </div>
  )
}

export default App
