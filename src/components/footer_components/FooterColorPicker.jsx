import React from 'react'

const FooterColorPicker = () => {
    return (
        <footer className='bg-[#0F1E32]'>
            <div className='max-w-[1440px] mx-auto flex gap-2 px-20 items-center justify-end py-[10px]'>
                <div className='w-10 h-10 bg-[#4B69B1] rounded-full'></div>
                <div className='w-10 h-10 bg-[#37B1E2] rounded-full'></div>
                <div className='w-10 h-10 bg-[#C23772] rounded-full'></div>
                <div className='w-10 h-10 bg-[#E83F3A] rounded-full'></div>
            </div>
        </footer>
    )
}

export default FooterColorPicker