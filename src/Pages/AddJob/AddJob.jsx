import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/AuthHooks';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const {user}=useAuth();
    const navigate=useNavigate();

    const handleAddJob=e=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        // console.log(formData.entries());
        const initialData=Object.fromEntries(formData.entries());
        console.log(initialData);
        const {min,max,currency, ...newJob}=initialData;
        console.log(newJob);
        newJob.salaryRange={min,max,currency};
        newJob.requirements=newJob.requirements.split('\n');
        newJob.responsibilities=newJob.responsibilities.split('\n');


        console.log(newJob);


        fetch('http://localhost:5000/jobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJob)


        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
                {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job data has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myapplication');
                }
        })

    }
    return (
        <div>
            <h1>Post a new Job</h1>
       
            <form onSubmit={handleAddJob} className="card-body">
  {/* Job Title */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Job Title</span>
    </label>
    <input
      name="title"
      type="text"
      placeholder="Job title"
      className="input input-bordered"
      defaultValue="Software Engineer"
      required
    />
  </div>

  {/* Location */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Location</span>
    </label>
    <input
      name="location"
      type="text"
      placeholder="Location"
      className="input input-bordered"
      defaultValue="Halishohor, Chittagong"
      required
    />
  </div>

  {/* Job Type */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Job Type</span>
    </label>
    <select name='type' className="select select-bordered w-full max-w-xs">
  <option >Full Time</option>
  <option>Part time</option>
  <option>Intern</option>
</select>
  </div>

  {/* Category */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Pic job field (category)</span>
    </label>
    <select name='category' className="select select-bordered w-full max-w-xs">
  <option >Engineering</option>
  <option>Marketing</option>
  <option>Finance</option>
  <option>Teaching</option>
</select>
  </div>

  {/* Application Deadline */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Application Deadline</span>
    </label>
    <input
      name="applicationDeadline"
      type="date"
      className="input input-bordered"
      defaultValue="2024-12-31"
      required
    />
  </div>

  {/* Salary Range */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Salary Range</span>
    </label>
   <div className='flex flex-col'>
   <input
      name="max"
      type="text"
      placeholder="Salary max"
      className="input input-bordered"
      
    />
     <label className="label">
      <span className="label-text">Salary Min</span>
    </label>
     <input
      name="min"
      type="text"
      placeholder="Salary min"
      className="input input-bordered"
      
    />

{/* currency */}


<div className="form-control">
    <label className="label">
      <span className="label-text">Cyrrenct</span>
    </label>
    <select name='currency' className="select select-bordered w-full max-w-xs">
  <option >BDT</option>
  <option>USD</option>
  <option>IRN</option>
 
</select>
  </div>


    
   </div>
  </div>

  {/* Description */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Job Description</span>
    </label>
    <textarea
      name="description"
      placeholder="Job Description"
      className="textarea textarea-bordered"
      required
    />
  </div>

  {/* Cpmpany Name */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Cpmpany Name </span>
    </label>
    <input
      name="companyName"
      type="text"
      placeholder="Name of company"
      className="input input-bordered"
     
      required
    />
  </div>
  {/* Requirements */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Requirements</span>
    </label>
    <textarea
      name="requirements"
      type="text"
      placeholder="give in new line of each "
     className="textarea textarea-bordered"
     
      required
    />
  </div>

  {/* Responsibilities */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Responsibilities</span>
    </label>
    <textarea
      name="responsibilities"
      type="text"
      placeholder="give in new line of each "
     className="textarea textarea-bordered"
     
      required
    />
  </div>

  {/* HR Email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">HR Email</span>
    </label>
    <input
      name="hr_email"
      type="email"
      placeholder="HR Email"
      className="input input-bordered"
      defaultValue={user?.email}
      required
    />
  </div>
  {/* Dead Line */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">DeadLine</span>
    </label>
    <input
      name="applicationDeadline"
      type="date"
      placeholder="DeadLine"
      className="input input-bordered"
      defaultValue={user?.email}
      required
    />
  </div>

  {/* HR Name */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">HR Name</span>
    </label>
    <input
      name="hr_name"
      type="text"
      placeholder="HR Name"
      className="input input-bordered"
      defaultValue="Farhan Rahman"
      required
    />
  </div>

  {/* Company Logo */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Company Logo URL</span>
    </label>
    <input
      name="company_logo"
      type="url"
      placeholder="Company Logo URL"
      className="input input-bordered"
     
      required
    />
  </div>

  {/* Submit Button */}
  <div className="form-control mt-6">
    <button className="btn btn-primary">ADD</button>
  </div>
</form>

            
        </div>
    );
};

export default AddJob;