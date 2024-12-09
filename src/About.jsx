import React from 'react'

const About = () => {
  return (
    <div  id='about' className='bg-white w-full max-h-[400] p-10'>
       
        <div className='items-center flex flex-wrap flex-col'>
            <h1 className='text-1xl text-yellow-400 shadow-yellow-300 italic'>About Us</h1>
            <h1 className='text-2xl font-bold'>WELCOM TO BAKERYZONE</h1>
            <div className='w-20 h-1 border-b-4 border-yellow-400 text-center pt-2'></div>
        </div>
        <div className='p-4 bg-slate-50 flex justify-evenly items-center flex-nowrap '>
            <div className='w-4/6 '>
                <img className='h-30 sm:h-52 rounded-2xl  md:rounded-md xl:float-right xl:pr-4' src="src/images/cake2.jpeg" alt="" />
            </div>
            <div className='w-11/12 xl:pr-20'>
                <div>
                    <h1 className='font-bold'>Our Strength,Where quality meets expertise with global flavors</h1>
                    <p className='text-gray-500'>At Bakers, our team is the heart of everything we do. With a passion for creating delightful moments through every bite.</p>

                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <div >
                        <img className='w-24 h-24' src="/src/images/about1.jpeg" alt="" />
                        <h1 className='font-bold'>100% HEALTHY</h1>
                        <p className='text-gray-500 font-thin'>Real food is one ingredient, created by Mother Nature, and comes from a plant or an animal.</p>

                    </div>
                    <div>
                        <img className='w-24 h-24' src="/src/images/about2.jpeg" alt="" />
                        <h1 className='font-bold'>AWARD WINNING</h1>
                        <p className='text-gray-500 font-thin'>The awards play an important role in showing gratitude to the individuals.</p>

                    </div>

                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About
