import React from 'react'
import raihan from '../assets/raihan.png'
import Stars from './Stars'
import { FaRegClock } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";
import { TbUsers } from "react-icons/tb";

const ProfileDetails = () => {
  return (
    <div className='bg-[#F9FAFD]'>
      <div className='max-w-4/6 mx-auto py-20'>
        <h1 className='text-[20px]'>Your Selected Guide:</h1>

        <div className='my-10 flex justify-between items-center'>
          <div className='bg-white rounded-md shadow   flex items-center'>
            <div>
              <img src={raihan} alt="" />
            </div>
            <div className='w-[720px] px-5 items-center flex justify-between'>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-4 items-center'>
                  <button className='text-white font-bold text-[11px] bg-[#7BBCB0] rounded-full px-10 py-1.5 '>KUAKATA</button>
                  <span className='text-gray-300'>|</span>
                  <p className='flex items-center gap-2'>
                    <span className='text-[12px]'> <Stars /> </span>
                    <span className='text-[12px] font-bold text-[#778088] ' >(584 reviews)</span>
                  </p>
                </div>
                <h1 className='text-[20px] font-bold'>Raihan Ahmad</h1>
                <div className='flex gap-4 items-center text-[14px]'>
                  <p className='flex items-center gap-1 text-[#495560]'>
                    <FaRegClock />
                    <span>2 hours</span>
                  </p>
                  <span className='text-gray-300'>|</span>
                  <p className='flex items-center gap-1 text-[#495560]'>
                    <LiaCarSideSolid />
                    <span>Transport</span>
                  </p>
                  <span className='text-gray-300'>|</span>
                  <p className='flex items-center gap-1 text-[#495560]'>
                    <TbUsers />
                    <span>Family Plan</span>
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-[20px] text-[#7BBCB0] font-bold '>Tk 250.00</span>
                <span className='text-[12px] text-[#778088] '>per person</span>
              </div>
            </div>
          </div>
          <div>
            <button className='w-[260px] h-24 rounded-[42px] bg-[#13253F] text-white '>Hire Me</button>
          </div>
        </div>

        <div className='my-10 flex justify-between items-center'>
          <div className='flex flex-col gap-3'>
             <div className='flex items-end justify-between w-[250px]'>
              <span className='text-[48px] font-extrabold'>4.0</span>
              <span className='text-[23px] text-[#778088]'>14 Reviews</span>
             </div>
             <div className='text-[50px]'>
              <Stars />
             </div>
          </div>


          <div className='mt-20 mr-20 w-[360px] h-24 flex flex-col gap-1 py-5 px-8 rounded-[33px] bg-[#E6E6E6]'>
            <p>Proficiency in: English, Bangla, and French.</p> 
            <p>Guided: Nearly 20 individuals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails