import React from 'react'

const FooterHelp = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h6 className='text-white font-semibold'>Help</h6>
            <ul className='text-gray-500 flex flex-col gap-2'>
                <li>Contact us</li>
                <li>FAQs</li>
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
                <li>Sitemap</li>
            </ul>
        </div>
    )
}

export default FooterHelp