import React from 'react'

// Layout
import { Layout } from '../Layout'

export default function Index() {
  return (
    <Layout>
        <div className='index-top-section'>
            <div className='index-top-section-cover'>
                <div className='index-top-section-inner container'>
                    <div className='index-top-section-inner-top'>
                        <h1>We're Pyrt Creative</h1>
                        <h2>A multidiciplinary creative design studio that specializes in branding, web development and software development</h2>
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
