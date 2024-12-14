import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div className="card bg-gray-200  shadow-xl">
  <figure>
  <img
            className="w-16 h-16 object-contain"
            src={company_logo}
            alt={`${company} logo`}
        />
  </figure>
  <div className="card-body">

    


<div className="p-4">
<div className="card bg-base-100 shadow-xl p-6">
    <div className="flex gap-4 items-center">
       
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>
    <div className="mt-4">
        <p className="text-lg font-semibold">Job Type: {jobType}</p>
        <p className="text-lg font-semibold">Category: {category}</p>
       
        <p className="text-lg font-semibold">
            Salary Range: {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>
    </div>
    <div className="mt-4">
        <h2 className="text-lg font-bold">Job Description:</h2>
        <p className="text-sm text-gray-700">{description}</p>
    </div>
    <div className="mt-4">
        <h2 className="text-lg font-bold">Requirements:</h2>
        <ul className="list-disc pl-5">
            {requirements.map((req, index) => (
                <li key={index}>{req}</li>
            ))}
        </ul>
    </div>
    <div className="mt-4">
        <h2 className="text-lg font-bold">Responsibilities:</h2>
        <ul className="list-disc pl-5">
            {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
            ))}
        </ul>
    </div>
    <div className="mt-4">
        <p className="text-lg font-semibold">Status: {status}</p>
        <p className="text-lg font-semibold">HR Email: {hr_email}</p>
        <p className="text-lg font-semibold">HR Name: {hr_name}</p>
    </div>

    <p className="text-lg font-semibold border-2 rounded-3xl bg-lime-100 p-2">
  Application Deadline: {applicationDeadline}
</p>

<Link to={`/jobapplay/${_id}`}><button className='btn btn-primary my-3 '>Apply Now </button></Link>
</div>


</div>






    
  </div>

  
</div>
     
    );
};

export default JobDetails;

