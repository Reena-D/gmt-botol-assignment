import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='footer bg-[#201F1F] text-white'>
    <img src='Group (1).png' className='header-logo h-8'/>
        <ul>
            <li>Shop</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Journal</li>
            <li>Custom</li>
        </ul>
        </div>
        <div className='footer bg-[#201F1F] text-white'>

        <img src='fb.svg' className='m-1'/>
        <img src='insta.svg' className='m-1'/>
        <img src='x.svg' className='m-1'/>

        <ul>
            <li>FAQ's</li>
            <li>Returns</li>
            <li>Ordering</li>
            <li>Shipping</li>
            <li>Personalization Policies</li>
        </ul>
    </div>
    <span className='flex justify-center text-white bg-[#323232]'>Copyright @ 2023 BOTOL. All Rights Reserved.</span>
    </div>
  )
}

export default Footer
