import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#061337]'>
      {/* Container  */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='my-2 text-[#94a3b8] font-bold text-2xl hover:text-green-500 duration-500'>My Name is  </p>
        <h1 className='my-2 text-6xl font-extrabold text-yellow-400 hover:bg-red-700 duration-500 shadow-md hover:shadow-lg'>Kunal</h1>
        
        <blockquote class="text-[#94a3b8] py-2 text-xl font-bold text">
          I am a 
          <span class=" mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class="relative text-white">FullStack Developer</span>
          </span>
        </blockquote>

        {/* <h2>I am a Full Stack Developer</h2> */}
        <p className='my-4 text-[#94a3b8] '>Hello, I'm Kunal, a MERN Stack web developer passionate about crafting dynamic and user-friendly web applications. With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js) and proficiency in (Tailwind , Material-UI , Bootstrap) CSS, I bring creativity and functionality to my projects. I'm excited to contribute my knowledge and collaborate on meaningful projects</p>

        <div>
          <button className='text-white px-6 py-2 my-2 flex items-center  border-2 border-slate-400 transform hover:scale-125 duration-300 rounded hover:bg-pink-600 '>View More <HiArrowNarrowRight className='ml-2 hover:rotate-90 duration-300'/> </button>
        </div>

      </div>
    </div>
  )
}

export default Home
