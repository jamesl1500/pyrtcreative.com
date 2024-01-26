import React from 'react'

import { Layout } from '../Layout'

export default function About() {
  return (
    <Layout>
        <div className='about-top-section'>
            <div className='about-top-section-cover'>
                <div className='about-top-section-inner container'>
                    <div className='about-top-section-inner-top'>
                        <h1>About Us</h1>
                        <h2>Learn more about us</h2>
                    </div>
                    <div className='index-top-section-inner-bottom'>
                        <a href='#' className='btn btn-primary'>Get in touch</a>
                    </div>
                </div>
            </div>
        </div>            
    </Layout>
  )
}

