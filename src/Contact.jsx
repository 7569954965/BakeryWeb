import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Contact = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
  return (
    <div id='contact' className='w-3/4 m-auto'>
         <div className='mt-5 mb-5'>
            <div className='flex flex-col justify-center items-center mb-5'>
                 <h1 className='text-yellow-400 font-bold text-xl xl:text-2xl'>CONTACT US</h1>
                 <p className='w-10 border-b-2 border-red-700 pt-1'></p>
            </div>
          
         <Slider {...settings}>
            {data.map((d)=>(              
                 <div className='bg-white h-[300px] md:h-[450px] rounded-xl '>
                    <div className='rounded-xl bg-sky-800 flex justify-center items-center p-3'>
                        <img src={d.img} alt="" className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex justify-center items-center flex-col p-4 gap-2 overflow-hidden'>
                        <h1 className='font-semibold'>{d.name}</h1>
                        <h2 className='font-medium'>{d.contactnum}</h2>
                        <p className='text-gray-500 hidden md:block'>{d.desc}</p>
                        <button className='bg-gray-950 text-white px-4 py-2 rounded-lg mt-2 hidden md:block'>Contact Me</button>
                    </div>
                 </div>
                      
            ))}
        </Slider>
        </div>
    </div>
  )
}





const data = [
    {
      name: "Alice Johnson",
      img: "./src/images/slider1.jpeg",
      contactnum: "+1234567890",
      desc: "A software developer with a passion for creating efficient algorithms.",


    },
    {
      name: "Bob Smith",
      img: "./src/images/slider2.jpeg",
      contactnum: "+1987654321",    
      desc: "A data scientist specializing in machine learning and big data analysis.",

    },
    {
      name: "Catherine Green",
      img: "./src/images/slider3.jpeg",
      contactnum: "+1122334455",
      desc: "A project manager with expertise in coordinating large-scale IT projects.",

    },
    {
      name: "David Lee",
      img: "./src/images/slider4.jpeg",
      contactnum: "+1223344556",
      desc: "A cybersecurity expert focused on securing digital systems and networks.",


    },
    {
      name: "Eva Brown",
      img: "./src/images/slider5.jpeg",
      contactnum: "+1445566778",
      desc: "A UI/UX designer passionate about creating intuitive interfaces.",

    }
  ];
  

export default Contact
