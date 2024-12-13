import React, { useEffect, useState } from 'react';
import HotjobCard from './HotjobCard';

const Hotjobs = () => {

    const [jobs,setjobs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setjobs(data));
    },[])
    return (
        <div>
            <h1>all :{jobs.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job=><HotjobCard key={job._id} job={job}></HotjobCard>)
                }
            </div>
            
        </div>
    );
};

export default Hotjobs;