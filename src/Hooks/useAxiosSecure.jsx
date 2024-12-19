import axios from 'axios';

import React, { useEffect } from 'react';
import useAuth from './AuthHooks';
import { useNavigate } from 'react-router-dom';
import { nav } from 'motion/react-client';

const axiosInstance=axios.create({
    baseURL:'https://jop-portal-server.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const {usersignOut} =useAuth();
    const navigate=useNavigate();

    
useEffect(() => {
     axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            console.log('Error caught in interceptor', error);
            if(error.status===401 || error.status===403 )
            {
                console.log('need to logout The User');
                usersignOut()
                .then(()=>{
                    console.log('logged Out user ');
                    navigate('/login');
                })
                .catch(error=>{
                    console.log(error);
                })
            }
            return Promise.reject(error);
        }
    ); 

  
}, []);



    return axiosInstance;

    
};


export default useAxiosSecure;