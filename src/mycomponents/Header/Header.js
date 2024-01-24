import React, { createElement } from 'react'
import './Header.css'
import img from '../Images/logo-main.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../All Categories/SidebarData';
import '../All Categories/SideBar.css'


export const Header = () => {
  const navigate = useNavigate();
  const [sidebar , setsidebar] = useState(false)
  const showSidebar = () => setsidebar(!sidebar)
  return (
     <>
       <nav className="nav flex flex-row f">
      <li><img className="logo" src={img} alt=""/></li>
      <div className="search-bar flex flex-row"><input className="search" type="text" placeholder="  Search for products"/>
        <div className="search-icon flex "><i className="fa-solid fa-magnifying-glass"></i></div></div>
      <li> <div className="contactus">
        <section><h4>Contact Us</h4></section>
        <section className="flex flex-row fit-content"><i className="fa-solid fa-phone ph"></i><h6 className="red">+91-9321445232</h6></section>
    </div></li>
    <li><div className="shipping flex ">
      <section className="flex truck-icon"><i className="fa-solid fa-truck-fast fa-2x"></i></section>
      <section><h4>Shipping</h4><h5 className="red">PAN India</h5> </section>
  </div></li>
  <li> 
    <button onClick={() => navigate("/Signin") } className="button-85" role="button" to="/Signin">Sign in</button>
  </li>
     </nav>
     <div className="contain flex flex-row">
      <div className="alcategories-main flex flex-row">
                                                                                                                                                                                                                                                                                                                                                           
       <div className="allcategories bg-red flex flex-row" onClick={showSidebar}><div className='allcategories-inner flex flex-row flex-center'><i className="fa-solid fa-bars"></i>
       <p> All Categories</p></div></div>
       <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to="#"className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
        {SidebarData.map((item,index)=>{
          return(
            <li key = {index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span className='sideTitle'>{item.title}</span>
              </Link>
            </li>
          )
        })}
        
      </ul>
     </div>
      <div className="categories flex flex-row f px-4">
          <li><a href="/custompc"><div className="category-main-items">Custom PC</div></a></li>
          <li><a href="#"><div className="category-main-items">Pre-BuiltPC</div></a></li>
          <li><a href="#"><div className="category-main-items">Offline Store</div></a></li>
          <li><a href="#"><div className="category-main-items">We are hiring</div></a></li>
      </div>
      </div>
      <div className="category-icons flex flex-row">
        <li><div><a href=""><i className="fa-regular fa-user fa-xl black"></i></a></div></li>
        <li><div><a href=""><i className="fa-regular fa-heart fa-xl black"></i></a></div></li>
        <li><div><a href=""><i className="fa-solid fa-cart-shopping fa-xl cart-nav-icon black"></i></a></div></li>
      </div>
     </div>
     
     </>
  )
}


