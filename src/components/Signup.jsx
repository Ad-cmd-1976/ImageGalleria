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
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} action="" method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            className='min-w-fit border-2 rounded-sm'
            type='text'
            id='name'
            placeholder='Enter Your Name'
            name='name'
            value={signInfo.name}
          />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input
            onChange={handleChange}
            className='min-w-fit border-2 rounded-sm'
            type='text'
            id='email'
            placeholder='Enter Your Email'
            name='email'
            value={signInfo.email}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            onChange={handleChange}
            className='min-w-fit border-2 rounded-sm'
            type='password'
            id='password'
            placeholder='Enter Your Password'
            name='password'
            value={signInfo.password}
          />
        </div>
        <div>
          <button
          className='w-full border-2' 
          type="submit">
            Sign Up
          </button>
        </div>
        <span>
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