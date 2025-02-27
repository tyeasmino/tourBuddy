import React from 'react'
import tourBuddy from '../assets/tourbuddy.png'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <nav className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-6'>
        <Link to='/'>
            <img src={tourBuddy} alt="" />
        </Link>
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-10'>
            <ul className='font-semibold text-gray-500 flex flex-col md:flex-row gap-2 md:gap-8'>
                <li> <Link to='/'>Home</Link></li>
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