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
            <button className='font-bold bg-yellow-400 px-10 py-3 rounded' >Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar