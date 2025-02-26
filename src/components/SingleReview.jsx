import React from 'react'
import reviewer_arlene from '../assets/reviewer_arlene.png'
import Stars from './Stars'
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const SingleReview = () => {
  return (
    <section className='flex items-center gap-5'>
      <div className='min-w-[60px]'>
        <img src={reviewer_arlene} alt="" />
      </div>

      <div className='min-w-[125px] flex flex-col gap-1'>
        <span><Stars /></span>
        <h6 className='text-[15px] text-[#1C2B38] font-semibold flex items-center gap-3' >Arlene McCoy <IoCheckmarkDoneSharp className='text-[#7BBCB0]' /></h6>
        <p className='text-[#778088] text-[13px]'>2 October 2012</p>
      </div>

      <div>
        <h6 className='text-[15px] text-[#1C2B38] font-semibold flex justify-between items-center gap-3' >
          <span> Good tour, really well organised </span>
          <span className='text-[#778088] text-[13px] '> Helpful? <span className='text-[#7BBCB0] text-[13px] '>Yes</span> </span>

        </h6>
        <p>
          "Amazing Guide" <br />
          Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!
        </p>
      </div>
    </section>
  )
}

export default SingleReview