import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/AuthHooks';
import Swal from 'sweetalert2';

const JobApplay = () => {

    const {id}=useParams();
    const {user}=useAuth();
    // console.log(id,user);
    const navigate=useNavigate();


    const handlesubmitApplication=(e)=>{

        e.preventDefault();
        const linkedin=e.target.linkedin.value;
        const github=e.target.github.value;
        const resume=e.target.resume.value;
        console.log(linkedin,github,resume);


        const jobApplication={
          job_id:id,
          applican_email:user.email,
          linkedin,
          github,
          resume, 
        }

        fetch('http://localhost:5000/job-application',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId)
          {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Apply data has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/myapplication');
          }
        });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesubmitApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn id link</span>
          </label>
          <input name='linkedin' type="text" placeholder="Linkedin id link" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Github id link</span>
          </label>
          <input name='github' type="text" placeholder="github id link" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume id link</span>
          </label>
          <input name='resume' type="text" placeholder="resume id link" className="input input-bordered" required />
        </div>










        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply now</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default JobApplay;