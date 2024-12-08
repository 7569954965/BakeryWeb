import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-950 py-10 text-white flex justify-around'>
      <div>
        <h1 className='font-bold'>Company</h1>
        <p className='w-10 border-b-2 border-red-700 pt-1'></p>
        <ul className='text-gray-500 pt-3'>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Affiliate Program</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Get Help</h1>
        <p className='w-10 border-b-2 border-red-700 pt-1'></p>
        <ul className='text-gray-500 pt-3'>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order status</li>
            <li>Payment Options</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Online Shop</h1>
        <p className='w-10 border-b-2 border-red-700 pt-1'></p>
        <ul className='text-gray-500 pt-3'>
            <li>Curry Puff</li>
            <li>Cakes</li>
            <li>Bread Bun</li>
            <li>Biscuits</li>
            
        </ul>
      </div>
    </div>
    )
}
export default Footer
