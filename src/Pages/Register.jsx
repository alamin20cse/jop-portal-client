import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import reg1 from '../assets/reg1.json'
import Lottie from 'lottie-react';
import { AuthContex } from './AuthProvider';




const Register = () => {
  const { creatUser,loading}=useContext(AuthContex)
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,photoUrl,email,password)

   

    creatUser(email,password)
    .then(result=>{
      console.log(result.user);
      
    })
    .catch(error=>{
      console.log(error.message);
    })

  
  };


  return (

  <div className='lg:flex'>

<div className='w-96'>
    <Lottie animationData={reg1}></Lottie>

</div>
    <div className='bg-base-200 min-h-screen max-w-[600px] mx-auto p-4'>
       
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className='text-3xl font-bold text-center mb-6'>Register</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>

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
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>


      <p className='mt-4 text-center'>
        Already have an account? <Link className='text-red-600 font-bold' to='/login'>Login</Link>
      </p>
    </div>
  </div>
  );
};

export default Register;
