import React from 'react'
import './Custom_PC.css'
import imgintel from '../Images/Custom-pc-intel.jpg'
import imgamd from '../Images/Custom-pc-amd.jpg'

export const CustomPC = () => {
  return (
    <>
    <div className="custom-pc-main flex flex-col">
    <h4>Build Your Custom PC</h4>
    <p className='pyfc'>Pick Your Favourite Components And Build Your PC</p>
    <div className="custom-pc-box-main flex flex-row">
        <div className="custom-pc-box flex flex-col">
            <img src={imgintel} alt="" />
            <h6>Intel Custom PC Build</h6>
            <div className="custom-stars flex flex-row">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className="in-stock flex flex-row">
            <i className="fa-solid fa-check red"></i>
            <p>In Stock</p>
            </div>
            <p className="custom-price red">From ₹30,000</p>
            <button className='bg-red white'>Select Options</button>
        </div>
        <div className="custom-pc-box flex flex-col">
            <img src={imgamd} alt="" />
            <h6>AMD Custom PC Build</h6>
            <div className="custom-stars flex flex-row">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className="in-stock flex flex-row">
            <i className="fa-solid fa-check red"></i>
            <p>In Stock</p>
            </div>
            <p className="custom-price red">From ₹30,000</p>
            <button className='bg-red white'>Select Options</button>
        </div>
    </div>
    </div>
    </>
  )
}

