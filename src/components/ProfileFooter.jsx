import React from 'react'
import FooterSelection from './footer_components/FooterSelection'
import FooterPayments from './footer_components/FooterPayments'
import FooterColorPicker from './footer_components/FooterColorPicker'

const ProfileFooter = () => {
  return (
    <footer>
      <div className='bg-[#13253F]'>
        <div className='max-w-[1440px] mx-auto p-20 mx-auto flex justify-between'>
          <FooterSelection />
          <FooterPayments />
        </div>
        <FooterColorPicker />
      </div>
    </footer>
  )
}

export default ProfileFooter