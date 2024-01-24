import React from 'react'
import './Footer.css'
import img from '../Images/footer-logo.png'

export const Footer = () => {
  return (
    <footer className="footer-main flex flex-row white">
        <div className="box1 flex flex-col">
           <img src={img} alt="Footer-image"/>
           <p>We have Great amount of experience in Building Gaming PC, Editing PC & Workstation PC for our clients. We build with love and we know what your PC means to you.</p>
        </div>
        <div className="box2 flex flex-col">
            <h1>BUY PC BUILD</h1>
            <ul>
                <li className="footer-li">Custom PC</li>
                <li className="footer-li">Pre-built PC</li>
            </ul>
        </div>
        <div className="box3">
            <h1>INFORMATION</h1>
            <ul>
                <li className="footer-li">Track Order</li>
                <li className="footer-li">Privacy Policy</li>
                <li className="footer-li">Terms & Conditions</li>
                <li className="footer-li">About Us</li>
                <li className="footer-li">Our Store</li>
            </ul>
        </div>
        <div className="box4 footer-contactus">
            <h1>CONTACT US</h1>
            <p>Mumbai Thane 400604 <br />
            Phone: +91-9321445232 <br/> 10am-6pm (Mon-Sat) <br />
            Mail: Support@aktech.com</p>
             
             <div className="icons flex flex-row">
                <i className="fa-brands fa-2xl fa-facebook"></i>
                <i className="fa-brands fa-2xl fa-instagram"></i>
                <i className="fa-brands fa-2xl fa-youtube"></i>
                <i className="fa-brands fa-2xl fa-whatsapp"></i>
             </div>
        </div>
       </footer>
  )
}
