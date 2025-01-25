import React from 'react'

const Header = () => {
  return (
    <nav className='header'>
        <img src='Group.png' className='header-logo'/>
        <ul>
            <li>Shop</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Journal</li>
            <li>Custom</li>
        </ul>

        <button className='header-inquiry'>Inquiry Now</button>
    </nav>
  )
}

export default Header
