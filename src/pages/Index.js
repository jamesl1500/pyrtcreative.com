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
                        <h2>A creative design studio</h2>
                        <p>Graphic design &middot; Web Development &middot; Software Development &middot; Creative Design</p>
                    </div>
                    <div className='index-top-section-inner-bottom'>
                        <a href='tel:4402134860' className='btn btn-primary'>Get in touch</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='index-middle-banner'>
            <div className='index-middle-banner-inner'>

            </div>
        </div>
        <div className='index-about-section' id='about'>
            <div className='index-about-section-inner container'>
                <div className='index-about-section-inner-top'>
                    <h2>About Us</h2>
                    <p>Pyrt Creative is a creative design studio based in Ohio, US. We specialize in graphic design, web development, software development and creative design.</p>
                </div>
                <div className='index-about-section-inner-bottom'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-about-section-inner-bottom-item'>
                            <div className='index-about-section-inner-bottom-item-inner'>
                                <h3>Graphic Design</h3>
                                <p>We offer a range of graphic design services, including logo design, branding, print design, digital design and more.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-about-section-inner-bottom-item'>
                            <div className='index-about-section-inner-bottom-item-inner'>
                                <h3>Web Development</h3>
                                <p>We offer a range of web development services, including website design, website development, website maintenance, website hosting and more.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-about-section-inner-bottom-item'>
                            <div className='index-about-section-inner-bottom-item-inner'>
                                <h3>Software Development</h3>
                                <p>We offer a range of software development services, including software design, software development, software maintenance, software hosting and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='index-contact-us-section'>
            <div className='index-contact-us-section-inner container'>
                <div className='index-contact-us-section-inner-top'>
                    <h2>Contact Us</h2>
                    <p>Get in touch with us today to discuss your project.</p>
                </div>
                <div className='index-contact-us-section-inner-bottom'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-contact-us-section-inner-bottom-item'>
                            <div className='index-contact-us-section-inner-bottom-item-inner'>
                                <h3>Phone</h3>
                                <p>440-213-4860</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-contact-us-section-inner-bottom-item'>
                            <div className='index-contact-us-section-inner-bottom-item-inner'>
                                <h3>Email</h3>
                                <p>james@pyrtcreative.com</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 index-contact-us-section-inner-bottom-item'>
                            <div className='index-contact-us-section-inner-bottom-item-inner'>
                                <h3>Address</h3>
                                <p>Ohio, US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
