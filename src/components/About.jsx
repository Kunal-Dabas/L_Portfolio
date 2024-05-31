import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#061337] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 hover:text-pink-600 duration-200 hover:border-white font-mono'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='hover:text-green-500 duration-300 '>Hi. I'm Kunal, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='hover:text-yellow-100  duration-300'>I am driven by a deep passion for building exceptional software solutions that have a positive impact on the lives of others. I strive to deliver excellence in every project. I am available to transform your ideas into reality, leveraging cutting-edge technologies and tailored solutions. Together, let's create software that empowers and exceeds expectations.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
