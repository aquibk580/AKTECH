import React, { Component } from 'react';
// Header Content
import './Header.css'
import img from './mycomponents/Images/logo-main.png'
import { useNavigate } from 'react-router-dom'

// Main Content
import './Main.css'
import img0 from './mycomponents/Images/motherboard-carousel.png'
import img1 from './mycomponents/Images/gpu-carousel.png'
import img2 from './mycomponents/Images/gpu-ventus-carousel.png'
import img3 from './mycomponents/Images/ram-carousel.png'
import img4 from './mycomponents/Images/intel-carousel.png'
import img5 from './mycomponents/Images/logo-main.png'
import img6 from './mycomponents/Images/offer-50.png'
import img7 from './mycomponents/Images/msi-banner.jpg'

// Products Content

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "./Product";
import { productData, responsive } from "./productData";

// Footer Content

import './Footer.css'
import imgfooter from './mycomponents/Images/footer-logo.png'

export const Home = () => {
  const navigate = useNavigate();
  const product = productData.map((item) => (
    <Product name={item.name} url={item.imageurl} />
  ));
  return (
    <>
     {/* Header Content */}
     <nav className="flex flex-row">
      <li><img className="logo" src={img} alt=""/></li>
      <li className="search-bar flex flex-row"><input className="search" type="text" placeholder="  Search for products"/>
        <div className="search-icon flex "><i className="fa-solid fa-magnifying-glass"></i></div></li>
      <li> <div className="contactus f">
        <section><h4>Contact Us</h4></section>
        <section className="flex flex-row fit-content"><i className="fa-solid fa-phone ph"></i><h6 className="red">+91-9321445232</h6></section>
    </div></li>
    <li><div className="shipping flex f">
      <section className="flex truck-icon"><i className="fa-solid fa-truck-fast fa-2x"></i></section>
      <section><h4>Shipping</h4><h5 className="red">PAN India</h5> </section>
  </div></li>
  <li>
    <button onClick={()=>navigate("/Signin")} className="button-85" role="button" >Sign in</button>
  </li>
     </nav>
     {/* Main Content */}
      <main>
      <div className="contain flex flex-row">
      <div className="allcategories f bg-red"><i className="fa-solid fa-bars "></i> All Categories<i className="fa-solid fa-caret-down ddi"></i></div>
      <div className="categories flex flex-row f">
          <li><a href="#"><div className="category-main-items">Custom PC</div></a></li>
          <li><a href="#"><div className="category-main-items">Pre-BuiltPC</div></a></li>
          <li><a href="#"><div className="category-main-items">Offline Store</div></a></li>
          <li><a href="#"><div className="category-main-items">We are hiring</div></a></li>
      </div>
      <div className="category-icons flex flex-row">
        <li><div><a href=""><i className="fa-regular fa-user fa-xl black"></i></a></div></li>
        <li><div><a href=""><i className="fa-regular fa-heart fa-xl black"></i></a></div></li>
        <li><div><a href=""><i className="fa-solid fa-cart-shopping fa-xl cart-nav-icon black"></i></a></div></li>
      </div>
     </div>
     <div className="contain-main flex flex-row">
     <div className="contain1">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img0} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev contain-pn" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next contain-pn" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
     </div>
     <div className="offer-50 flex flex-col">
      <img src={img5} className="offer-logo" alt="offer"/>
      <img src={img6} alt="50% off"/>
    </div>
    </div>
    <div className="msi-banner flex flex-row">
      <img src={img7} alt=""/>
    </div>
      </main>

      {/* Products Content*/}
      <div className="shop-categories-main flex flex-col f py-4">
        <h2 className="mx-5 my-3 bold">Shop Categories</h2>
        <Carousel
          autoPlaySpeed={500}
          keyBoardControl={true}
          transitionDuration={500}
          infinite={true}
          showDots={true}
          responsive={responsive}
        >
          {product}
        </Carousel>
      </div>

      {/* Footer Content*/}

      <footer className="flex flex-row white">
        <div className="box box1 flex flex-col">
           <img className="footer-logo" src={imgfooter} alt="Footer-image"/>
           <p>We have Great amount of experience in Building Gaming PC, Editing PC & Workstation PC for our clients. We build with love and we know what your PC means to you.</p>
        </div>
        <div className="box box2 flex flex-col">
            <h1>BUY PC BUILD</h1>
            <ul>
                <li className="footer-li">Custom PC</li>
                <li className="footer-li">Pre-built PC</li>
            </ul>
        </div>
        <div className="box box3">
            <h1>INFORMATION</h1>
            <ul>
                <li className="footer-li">Track Order</li>
                <li className="footer-li">Privacy Policy</li>
                <li className="footer-li">Terms & Conditions</li>
                <li className="footer-li">About Us</li>
                <li className="footer-li">Our Store</li>
            </ul>
        </div>
        <div className="box box4">
            <h1>CONTACT US</h1>
            <p>Mumbai Thane 400604</p>
            <p>Phone: +91-9321445232 10am-6pm (Mon-Sat)</p>
            <p>Mail: Support@aktech.com</p>
             
             <div className="icons flex flex-row">
                <i className="fa-brands fa-2xl fa-facebook"></i>
                <i className="fa-brands fa-2xl fa-instagram"></i>
                <i className="fa-brands fa-2xl fa-youtube"></i>
                <i className="fa-brands fa-2xl fa-whatsapp"></i>
             </div>
        </div>
       </footer>
      </>
  )
}
