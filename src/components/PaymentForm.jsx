import React from 'react'
import paymentMethod from '../assets/paymentMethod.png'
import paymentBy from '../assets/ssl2 1.png'


const PaymentForm = () => {
  return (
    <section className=''>
      <h1 className='text-[32px] font-semibold max-w-4/6 mx-auto '>Payment</h1>
      <div className='bg-[#F9FAFD] py-20'>
        <div className='max-w-4/6 mx-auto'>
          <p className=' text-4xl '>Choose Payment Method</p>

          <form className='w-full flex py-3 justify-between gap-20'>
            <div className='w-4/5 flex flex-col gap-5 py-5' action="">
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor="name">Name:</label>
                <input className='w-full bg-[#F4F4F5] px-5 py-3 rounded outline-0 ring-0 focus:border-0 placeholder:font-semibold' placeholder='Ahnaf Amer' name='name' type="text" />
              </div>
              <div>
                <label className='font-semibold' htmlFor="transaction">Transaction Id:</label>
                <input className='w-full bg-[#F4F4F5] px-5 py-3 rounded outline-0 ring-0 focus:border-0 placeholder:font-semibold' placeholder='********' name='transaction' type="text" />
              </div>
              <div>
                <label className='font-semibold' htmlFor="phone">Phone Number:</label>
                <input className='w-full bg-[#F4F4F5] px-5 py-3 rounded outline-0 ring-0 focus:border-0 placeholder:font-semibold' placeholder='+8801321454687' name='phone' type="text" />
              </div>
              <div>
                <label className='font-semibold' htmlFor="pin">Pin Code:</label>
                <input className='w-full bg-[#F4F4F5] px-5 py-3 rounded outline-0 ring-0 focus:border-0 placeholder:font-semibold' placeholder='******' name='pin' type="text" />
              </div>
              <div className='mt-10'>
                <label className='font-semibold' htmlFor="method">Select Method:</label>
                <div className='flex gap-5 ml-5 mt-2'>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    Bkash
                  </div>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    Nagad
                  </div>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    UPAY
                  </div>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    VISA
                  </div>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    MasterCard
                  </div>
                  <div className='flex gap-3 text-white font-bold text-[13px] bg-[#37B1E2] pl-3 pr-5 py-1 rounded-3xl'>
                    <input className='rounded outline-0 ring-0 focus:border-0' name='method' type="radio" />
                    Others
                  </div>

                </div>
              </div>
            </div>
            <div className='w-1/5 '>
              <img className='' src={paymentMethod} alt="" />
            </div>
          </form>
        </div>

        <div className='text-center'>
          <button className='w-[240px] h-[60px] rounded-full bg-[#13253F] font-bold text-[15px] text-white '>Confirm Payment</button>
        </div>
        <img src={paymentBy} className='mx-auto my-10' alt="" />
      </div>
    </section>
  )
}

export default PaymentForm