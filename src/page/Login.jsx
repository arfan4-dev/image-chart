import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Loader from '../component/Loader';
const Login = () => {
const navigate=useNavigate();
const [loader,setLoader]=useState(false)
const handleSubmit=async(e)=>{
  setLoader(true)
  e.preventDefault();
  const email=e.target[0].value;
  const password=e.target[1].value;
  try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate('/home');
  }catch(error){

  }

  setLoader(false)

}    

    
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" required />
          </div>
          <div className="mb-6">
{loader?(            <button type="submit" className="w-full flex justify-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600"><Loader/></button>
):(            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
)}
          </div>
          <p className="text-gray-600 text-center mt-4">
          Not registered? <Link  to="/" className="text-blue-500">register</Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
