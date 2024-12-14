import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContex } from '../AuthProvider';
import ic from '../../assets/icon1.png'


const Navbar = () => {
  const { user, usersignOut } = useContext(AuthContex);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li><NavLink to='/myapplication'>My Application</NavLink></li>
    </>
  );
  const  logout=()=>{
    usersignOut()
    .then(result=>{
      console.log('succeful logut');

    })
    .catch(error=>{
      console.log(error.message);
    })

  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn rounded-full btn-ghost text-xl"><img className='rounded-full w-12' src={ic} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col items-center">
            <button  className='btn'
            onClick={logout}
            >
              Logout
            </button>
            <span className="text-sm">{user.email}</span>
          </div>
        ) : (
          <div className="flex space-x-2">
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
