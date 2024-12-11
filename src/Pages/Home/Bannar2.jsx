import React from 'react';
import { motion } from "motion/react"
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpeg'

const Bannar2 = () => {
    return (
        <div className="hero bg-slate-600  h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className='flex-1'>
   
   
    <motion.img
    animate={{y:[50,150,50]}}
    transition={{duration:5,repeat:Infinity}}
      src={pic1}
      className="max-w-sm rounded-t-3xl w-64  rounded-br-3xl border-l-4 border-b-4  border-blue-500 shadow-2xl" />

      
   
    <motion.img
    animate={{x:[100,150,100]}}
    transition={{duration:5,repeat:Infinity}}
      src={pic2}
      className="max-w-sm rounded-t-3xl w-64  rounded-br-3xl border-l-4 border-b-4  border-blue-500 shadow-2xl" />


    </div>
  

    <div className='flex-1'>
      <motion.h1 initial={{ scale: 0 }}
       animate={{ scale: 1,  }}
        className="text-5xl font-bold">Latest Job  News!</motion.h1>
      <motion.p
     
      animate={{x: 50,color:['red','blue','yellow']}}
      transition={{duration:3,repeat:Infinity}}
      
      className="py-6">
        This is a Job Portal
      </motion.p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Bannar2;