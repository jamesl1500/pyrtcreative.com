import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container footer-inner'>
            <div className='row footer-row'>
                <div className='footer-branding'>
                    <a href='/'>
                        <h3>Pyrt <span className='cursive'>Creative</span></h3>
                    </a>
                    <p>A creative design studio in Ohio</p>
                </div>
                <div className='footer-nav'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='tel:4402134860'>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-copyright'>
                    <p>&copy; 2021 Pyrt Creative. All rights reserved.</p>
                </div>
            </div>
        </div>  
    </div>
  )
}
