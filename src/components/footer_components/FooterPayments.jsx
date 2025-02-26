import React from 'react'
import footer_mastercard from '../../assets/footer_mastercard.png'
import footer_bitpay from '../../assets/footer_bitpay.png'
import footer_visa from '../../assets/footer_visa.png'
import footer_american from '../../assets/footer_american.png'
import footer_discover from '../../assets/footer_discover.png'
import footer_sofort from '../../assets/footer_sofort.png'
import footer_gpay from '../../assets/footer_gpay.png'
import footer_macpay from '../../assets/footer_macpay.png'
import footer_paypal from '../../assets/footer_paypal.png'
import footer_maestro from '../../assets/footer_maestro.png'

const FooterPayments = () => {
  return (
    <div>
      <h6 className='text-white font-semibold'>Payment methods possible</h6>
      <div className='max-w-[220px] max-h-[60px] mt-10 flex flex-wrap gap-1'>
        <img src={footer_mastercard} alt="" />
        <img src={footer_bitpay} alt="" />
        <img src={footer_visa} alt="" />
        <img src={footer_american} alt="" />
        <img src={footer_discover} alt="" />
        <img src={footer_sofort} alt="" />
        <img src={footer_gpay} alt="" />
        <img src={footer_macpay} alt="" />
        <img src={footer_paypal} alt="" />
        <img src={footer_maestro} alt="" />
      </div>
      <p className='text-gray-500 mt-2'>
        Become a Tour guide for Us        
      </p>
    </div>
  )
}

export default FooterPayments