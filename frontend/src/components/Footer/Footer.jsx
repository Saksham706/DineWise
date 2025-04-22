import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>DINEWISE</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores? Ex nulla voluptatum nisi eveniet, quia quasi earum fugiat corrupti facilis, maiores dolor quas iure atque sequi ullam! Recusandae, mollitia.</p>
            <div className="footer-social-icon">
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
                <li>+91-9897787XXX</li>
                <li>contact@DineWise.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 DineWise.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
