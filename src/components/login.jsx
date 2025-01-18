import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {handleError,handleSuccess} from '../util'
const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    const cpyloginInfo={...loginInfo};
    cpyloginInfo[name]=value;
    setloginInfo(cpyloginInfo);
  }
  const handlelogin=async (e)=>{
    e.preventDefault();
    const {email,password}=loginInfo;
    if(!email || !password){
      handleError('email and password are required!');
    }
    try{
      const url='http://localhost:8080/auth/login';
      const res=await fetch(url,{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(loginInfo)
      })
      const result=await res.json();
      console.log(result);
      const {success,message,error,jwtToken,name}=result;
      if(success){
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('name',name);
        setTimeout(() => {
          navigate('/');
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
    <div 
    className='flex flex-col gap-8 justify-center items-center h-[80vh] w-[70vw] mx-auto '
    >
      <h1 className='font-bold'>Login</h1>
      <form 
      onSubmit={handlelogin} 
      method="post"
      className='flex flex-col gap-5'
      >
        <div>
          <label htmlFor="email">Email</label>
          <div>
          <input 
          onChange={handleChange}
          type="text" 
          name="email" 
          id="email" 
          value={loginInfo.email}
          className='border-2 w-96 p-1 pl-2 rounded-md'
          autoFocus
          />
          </div>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div>
          <input 
          onChange={handleChange}
          type="password" 
          name="password" 
          id="password" 
          value={loginInfo.password}
          className='border-2 w-96 p-1 pl-2 rounded-md'
          autoFocus
          />
          </div>
        </div>

        <div>
          <button 
          type="submit"
          className='border-2 bg-blue-600 hover:bg-blue-500 rounded-md w-96 py-1'
          >
            Login
          </button>
        </div>

        <span className='text-center'>
          Don't have an account? {" "}
          <Link to='/signup' className='text-blue-600 hover:underline'>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login