import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";


const FooterCopyright = () => {
    return (
        <footer>
            <div className='bg-[#13253F]'>
                <div className='max-w-[1440px] mx-auto flex gap-2 items-center justify-between py-[10px]'>
                    <div className='text-gray-500'>
                        Copyright 2025 Tour Buddy. All Rights Reserved
                    </div>
                    <div className='text-white flex gap-7'>
                        < FaFacebookF />
                        < FaTwitter />
                        < AiFillInstagram />
                        < FaPinterest />
                    </div>
                </div>
            </div>

            <div className='w-full h-2 bg-[#0F1E32]'></div>
        </footer>
    )
}

export default FooterCopyright