import React from 'react';

const HotjobCard = ({job}) => {
    const {title,company,company_logo,requirements,description,location,salaryRange}=job;
    return (
        <div className="card bg-base-100 shadow-xl">
 <div className='flex gap-2'>
 <figure>
    <img className='w-16'
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div>
    <h1 className='text-2xl '>{company}</h1>
    <p>{location}</p>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>

<p className='text-3xl font-bold'>Requirements:</p>
    <div >
        {
            requirements.map((skil,index)=><p className='border-2 rounded-3xl gap-4 px-3 py-2 my-4 hover:text-blue-500 hover:bg-gray-400'>{index+1}.{skil}</p>)
        }
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Salary:{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</div>
     
    </div>
    <div className="badge btn  badge-outline  bg-lime-200 py-4">Apply now</div>
  </div>
</div>
    );
};

export default HotjobCard;