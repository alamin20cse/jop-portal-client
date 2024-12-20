import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/AuthHooks';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyApplication = () => {

    const {user}=useAuth();
    const [jobs,setjobs]=useState([]);
    const axiosSecure=useAxiosSecure();

    useEffect(()=>{
        // fetch(`https://jop-portal-server.vercel.app/job-application?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{

        //   setjobs(data)
        //   console.log(data);
        // });

        // axios.get(`https://jop-portal-server.vercel.app/job-application?email=${user.email}`,{withCredentials:true})
        // .then(res=>setjobs(res.data))
 
        axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res=>setjobs(res.data));
    },[user.email]) 
    return (
        <div>
            <h1>my application {jobs.length} </h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs.map(job=>   <tr key={job._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              {job.title}
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
    }
     
    
    </tbody>
    
   
  </table>
</div>
            
        </div>
    );
};

export default MyApplication;