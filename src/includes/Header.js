import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <div className='container header-inner'>
            <div className='row header-row'>
                <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 header-branding'>
                    <a href='/'>
                        <h3>Pyrt<span className='cursive'>Creative</span></h3>
                    </a>
                </div>
                <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12 header-nav'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
