import React, { useContext } from 'react';
import reg1 from '../assets/reg1.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { AuthContex } from './AuthProvider';

const Login = () => {
    const {signin,handelGooglSign}=useContext(AuthContex)

    const handlelogin=(e)=>{

        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)

        signin(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message);
        })



    }
    return (
       
  <div className='lg:flex'>

  <div className='w-96'>
   
    
      <Lottie animationData={reg1}></Lottie>
  
  </div>
      <div className='bg-base-200 min-h-screen max-w-[600px] mx-auto p-4'>
         
        <form  onSubmit={handlelogin} className="card-body">
          <h1 className='text-3xl font-bold text-center mb-6'>Login now</h1>
  
          
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p onClick={handelGooglSign} className='btn btn-primary'>Login with Google</p>
  
  
        <p className='mt-4 text-center'>
          Are you new? <Link className='text-red-600 font-bold' to='/regiester'>Login</Link>
        </p>
      </div>
    </div>
    );
};

export default Login;