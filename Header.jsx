import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <>
    <div className="flex bg-black shadow-2xl  shadow-transparent items-center   w-screen flex-row  gap-20 ">
    <Link to="/" className='text-white ml-[12%] cursor-pointer'>Home</Link>
      <Link to="/worOut_Session" className='text-white ml-[12%] cursor-pointer'>WorkOut Session</Link>
      <Link to="/pricing" className='text-white cursor-pointer'>Pricing</Link>
      <Link to="/gallery" className='text-white cursor-pointer'>Gallery </Link>
      <Link to="/calculator" className='text-white cursor-pointer'>BMI Calculator</Link>
      <Link to="/contact" className='text-white cursor-pointer'>Contact Us</Link>



    </div>
      
    </>
  )
}

export default header
