import React from 'react'
import Stars from './Stars'
import hundredgray from '../assets/hundredgray.png'
import guide48 from '../assets/guide48.png'
import transportation from '../assets/transportation30.png'
import valueformoney45 from '../assets/valueformoney45.png'
import safety40 from '../assets/safety40.png'
import SingleReview from './SingleReview'
import reviewer_arlene from '../assets/reviewer_arlene.png'
import reviewer_jenny from '../assets/reviewer_jenny.png'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'


export const ProfileReview = () => {
  return (
    <div className='bg-[#F9FAFD]'>
      <div className='max-w-[1200px] mx-auto '>
        <h1 className='text-[22px] text-[#1C2B38] font-bold'>Cutomer Review</h1>

        <div className='flex justify-end'>
          <ul className='flex flex-col'>
            <li className='flex items-center gap-5'>
              <p className='w-28 text-[14px] text-[#495560] font-semibold'>Guide</p>
              <div className='relative'>
                <img src={hundredgray} alt="" />
                <img className='absolute top-0 z-10 left-0 ' src={guide48} alt="" />
              </div>
              <span className='text-[14px] text-[#495560] font-semibold'>4.8</span>
            </li>
            <li className='flex items-center gap-5'>
              <p className='w-28 text-[14px] text-[#495560] font-semibold'>Transportation</p>
              <div className='relative'>
                <img src={hundredgray} alt="" />
                <img className='absolute top-0 z-10 left-0 ' src={transportation} alt="" />
              </div>
              <span className='text-[14px] text-[#495560] font-semibold'>3.0</span>
            </li>
            <li className='flex items-center gap-5'>
              <p className='w-28 text-[14px] text-[#495560] font-semibold'>Value for money</p>
              <div className='relative'>
                <img src={hundredgray} alt="" />
                <img className='absolute top-0 z-10 left-0 ' src={valueformoney45} alt="" />
              </div>
              <span className='text-[14px] text-[#495560] font-semibold'>4.5</span>
            </li>
            <li className='flex items-center gap-5'>
              <p className='w-28 text-[14px] text-[#495560] font-semibold'>Safety</p>
              <div className='relative'>
                <img src={hundredgray} alt="" />
                <img className='absolute top-0 z-10 left-0 ' src={safety40} alt="" />
              </div>
              <span className='text-[14px] text-[#495560] font-semibold'>4.0</span>
            </li>
          </ul>
        </div>

        <div className='my-15'>
          <SingleReview />
          <hr className='text-gray-200' />
          <section className='flex items-center gap-5'>
            <div className='min-w-[60px]'>
              <img src={reviewer_jenny} alt="" />
            </div>

            <div className='min-w-[125px] flex flex-col gap-1'>
              <span><Stars /></span>
              <h6 className='text-[15px] text-[#1C2B38] font-semibold flex items-center gap-3' >Jenny Wilson <IoCheckmarkDoneSharp className='text-[#7BBCB0]' /></h6>
              <p className='text-[#778088] text-[13px]'>2 October 2012</p>
            </div>

            <div>
              <h6 className='text-[15px] text-[#1C2B38] font-semibold flex justify-between items-center gap-3' >
                <span> Informative But Disappointed Not Seeing Changing Of The Guards </span>
                <span className='text-[#778088] text-[13px] '> Helpful? <span className='text-[#7BBCB0] text-[13px] '>Yes</span> </span>

              </h6>
              <p>
                "Fantastic Experience!" <br />
                Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!
              </p>
            </div>
          </section>
        </div>

        <div className='text-center pb-20'>
          <button className='text-[#7BBCB0] font-bold underline text-[13px]'>View More Comments</button>
        </div>
      </div>
    </div>
  )
}
