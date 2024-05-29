import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo-img mb-4">
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2019/07/logo_corano.png" alt="logo" />
                    </div>
                    <div className="pdata">
                    <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-data">
                        <h2 className='mb-4'>Contact Us</h2>
                        <ul>
                            <li><i class="fa-solid fa-house"></i>4710-4890 Breckinridge USA</li>
                            <li><i class="fa-regular fa-envelope"></i>support@plazathemes.com</li>
                            <li><i class="fa-solid fa-phone"></i>1-1001-234-5678</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info-data">
                        <h2 className='mb-4'>Information</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Frequently Questions</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="follow-data">
                        <h2 className='mb-4'>Follow Us</h2>
                        <ul className='d-flex justify-content-between'>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                            <li><i class="fa-solid fa-rss"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="news-data mt-5">
                        <h2>Sign Up To Newsletterr</h2>
                        <div className="new-info d-flex justify-content-between">
                            <input type="text" className='border-0' placeholder='Your email address...' />
                            <button className='border-0'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="alllogo mt-5 d-flex justify-content-end">
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/img-payment.png" alt="logo" />
                    </div>
                </div>

                <div className="footer-bottom mt-5">
                    <p className='text-center mt-5 mb-0'>Copyright © RoadThemes. All Right Reserved. </p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
