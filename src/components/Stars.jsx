import React from 'react'
import { FaStar } from "react-icons/fa6";

const Stars = () => {
  return (
    <div className='flex items-center gap-0.5'>
        <FaStar className='text-[#FFA432]' />
        <FaStar className='text-[#FFA432]' />
        <FaStar className='text-[#FFA432]' />
        <FaStar className='text-[#FFA432]' /> 
        <FaStar className='text-[#CFD9DE]' />  
    </div>
  )
}

export default Stars