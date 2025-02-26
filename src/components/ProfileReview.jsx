import React from 'react'
import Stars from './Stars'

export const ProfileReview = () => {
  return (
    <div className='bg-[#F9FAFD]'>
    <div className='max-w-4/6 mx-auto py-20'>
      <h1 className='text-[22px] text-[#1C2B38] font-bold'>Cutomer Review</h1>

      <ul className='flex justify-end'>
          <li>
            <p>Guide</p>
            <div>
              <span>gray</span>
              <span>yellow</span>
            </div>
            <span>4.8</span>
          </li>
      </ul>

       
    </div>
  </div>
  )
}
