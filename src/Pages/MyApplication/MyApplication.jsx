import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/AuthHooks';

const MyApplication = () => {

    const {user}=useAuth();
    const [jobs,setjobs]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setjobs(data));
    },[user.email])
    return (
        <div>
            <h1>my application {jobs.length} </h1>
            
        </div>
    );
};

export default MyApplication;