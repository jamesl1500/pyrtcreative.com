import React from 'react'

// Templates
import Header from './includes/Header'
import Footer from './includes/Footer'

export const Layout = ({children}) => {
  return (
    <div className='website'>
        <div className='header-hold'>
            <Header />
        </div>
        <div className='content-hold'>
            {children}
        </div>
        <div className='footer-hold'>
            <Footer />
        </div>
    </div>
  )
}
