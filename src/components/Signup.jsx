import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {handleError,handleSuccess} from '../util'
const Signup = () => {
  const [signInfo, setsignInfo] = useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    const cpysignInfo={...signInfo};
    cpysignInfo[name]=value;
    setsignInfo(cpysignInfo);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const {name,email,password}=signInfo;
    if(!name || !email || !password){
      return handleError('name,email and password required!');
    }
    try{
      const url='http://localhost:8080/auth/signup';
      const res=await fetch(url,{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(signInfo)
      })
      const result=await res.json();
      console.log(result);
      const {success,message,error}=result;
      if(success){
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
      else if(error){
        const detail=error?.details[0].message;
        handleError(detail);
      }
      else if(!success){
        handleError(message);
      }
    }catch(err){
      handleError(err);
    }
  }
  return (
    <div className='flex flex-col gap-8 justify-center items-center h-[80vh] w-[70vw] mx-auto'>
      <h1 className='font-bold'>Sign Up</h1>
      <form 
      onSubmit={handleSubmit} 
      method="post"
      className='flex flex-col gap-5'
      >
        <div>
          <label htmlFor="name">Name</label>
          <div>
          <input
            onChange={handleChange}
            className='border-2 w-96 p-1 pl-2 rounded-md'
            type='text'
            id='name'
            name='name'
            value={signInfo.name}
          />
          </div>
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <div>
          <input
            onChange={handleChange}
            className='border-2 w-96 p-1 pl-2 rounded-md'
            type='text'
            id='email'
            name='email'
            value={signInfo.email}
          />
          </div>
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <div>
          <input
            onChange={handleChange}
            className='border-2 w-96 p-1 pl-2 rounded-md'
            type='password'
            id='password'
            name='password'
            value={signInfo.password}
          />
          </div>
        </div>

        <div>
          <button
          className='border-2 bg-blue-600 hover:bg-blue-500 rounded-md w-96 py-1' 
          type="submit">
            Sign Up
          </button>
        </div>

        <span className='text-center'>
          Already have an account?{" "}
          <Link to='/login' className='text-blue-600 hover:underline'>
          Login
          </Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup