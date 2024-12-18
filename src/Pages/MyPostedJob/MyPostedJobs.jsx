import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/AuthHooks';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs,setjobs]=useState([]);
    const {user}=useAuth();
    

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setjobs(data))

    },[user.email])
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">My Posted Jobs: {jobs?.length || 0}</h1>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-400 w-full text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">#</th>
                            <th className="border border-gray-400 px-4 py-2">Title</th>
                            <th className="border border-gray-400 px-4 py-2">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.map((job, index) => (
                            <tr key={job._id} className="hover:bg-gray-100">
                                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-400 px-4 py-2">{job.title}</td>
                                <td className="border border-gray-400 px-4 py-2">{job.applicationDeadline}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    <Link  to={`/viewApplications/${job._id}`}>Vite application</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;