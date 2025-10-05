import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
          <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Good food starts with great choices. Explore our menu and choose from a diverse menu filled with handpicked dishes made to please every taste bud.</p>
              <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" /> 
                  <img src={assets.twitter_icon} alt="" /> 
                  <img src={assets.linkedin_icon} alt="" /> 
              </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 85912 92793</li>
                <li>contact@grubgo.com</li>
            </ul>
          </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2025 © GrubGo.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
