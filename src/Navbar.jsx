import React from 'react'
import { Link } from 'react-scroll'

// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <div  className="bg-gray-800 w-full h-auto p-3 flex justify-between text-center flex-wrap">
        <div className="flex gap-1  ">
           <img className="w-8 h-8 rounded-full" src="/images/logo.jpg" alt="" />
            <h3 className="text-2xl font-bold text-yellow-200 ">Bakery</h3>
        </div>
        <div>
          <ul className="flex gap-4 font-bold text-white ">
            <li className="hover:text-blue-400 hover:cursor-pointer">
               <Link   to="home" spy={true} smooth={true} offset={50} duration={500} >Home </Link>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              <Link  to="about" spy={true} smooth={true} offset={50} duration={500} >About </Link>
               {/* <Link to="/about">About</Link> */}
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">Menu & Pricing </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
            <Link   to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact Us </Link>
              {/* <Link to="/contact">Contact Us</Link> */}
            </li>
          </ul>
        </div>
        <div>
          <input className="rounded-md border hover:border-yellow-300 hidden lg:block" type="text" placeholder="Search"/>
        </div>
      
     </div>
    </div>
  )
}

export default Navbar
