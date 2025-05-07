import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye, AiOutlineMail} from 'react-icons/ai';
import GoogleAuth from '../Components/GoogleAuth';



const Login = () => {
  return (
    <div className='pt-[20vh]'>
     
    <div className='max-w-[800px] m-auto px-4 pb-16'>
      <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
        <h1 className='text-2xl font-bold text-green-800'> Login Account </h1>
        

          <div className='grid md:grid-cols-2 md:gap-8'>

          <div className='md:my-4'>
              <label>Email Address</label>
              <div className='my-2 w-full relative'>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type="email" 
                  placeholder='Enter Email Address'
                  name="email"
                 
                />
                <AiOutlineMail className='absolute right-2 top-4 text-gray-400' /> 
              </div>
              
            </div> 

            <div className='md:my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative '>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  
                  placeholder='Enter your Password'
                  name="password"
                  
                />
                <div className='absolute right-2 top-4'>
                  
                </div>
              </div>
              
            </div>

          </div>


          <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
                 
          <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#166534] text-white rounded-lg font-semibold'> Login Account </button>

        
        <hr className="my-6 border-gray-300 w-full" />
        <GoogleAuth/>

        <p className='my-4'>Forgotten password?<Link className='text-[#986c55] underline text-[15px]' to={'/reset'}> Reset </Link></p>
        <p className='my-4'>Don't have an account? <Link className='text-[#986c55] underline text-[15px]' to={'/register'}> Register </Link></p>

        
     
      </div>
    </div>
  </div>
  )
}

export default Login;