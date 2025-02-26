import React from 'react'
import FooterSelection from './footer_components/FooterSelection'
import FooterPayments from './footer_components/FooterPayments'
import FooterPaymentTitle from './footer_components/FooterPaymentTitle'
import FooterHelp from './footer_components/FooterHelp'
import FooterCopyright from './footer_components/FooterCopyright'

const PaymentFooter = () => {
  return (
    <div>
      <footer>
      <div className=''>
        <div className='bg-[#13253F] p-20 mx-auto '>
          <div className='max-w-[1440px] mx-auto flex justify-between'>
            <FooterSelection />
            <FooterPaymentTitle />
            <FooterHelp />
            <FooterPayments />

          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
    </div>
  )
}

export default PaymentFooter