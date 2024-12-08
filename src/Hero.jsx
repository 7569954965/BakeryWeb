import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#52525b] via-[#a1a1aa] to-[#e4e4e7] h-80 w-ful flex justify-evenly items-center bg-cover m-0'>
        <div className='text-5xl '>
            <h1 className='text-gray-600 font-thin'>Bakers <br /><span className='font-bold text-black'> make</span> <br />
             <span className='text-red-300 font-serif'>THE WORLD </span><br /> <span className='font-medium'>smell better</span>
            </h1>
        </div>  
        <div>
            <img className='rounded-full md:rounded-lg h-64' src="./src/images/cake.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero
