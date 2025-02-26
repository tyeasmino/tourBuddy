import React from 'react'
import tourBuddy from '../assets/tourbuddy.png'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-6'>
        <div>
            <img src={tourBuddy} alt="" />
        </div>
        <div className='flex items-center gap-10'>
            <ul className='font-semibold text-gray-500 flex gap-8'>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Most Rated Guides</li>
                <li>Our Packages</li>
                <li>Most Desired Places</li>
            </ul>
            <button className='font-bold text-[16px] w-[140px] h-[50px] bg-[#FFDA32] rounded-[3px]' >Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar