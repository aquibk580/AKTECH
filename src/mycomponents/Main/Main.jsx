import './Main.css'
import img0 from '../Images/motherboard-carousel.png'
import img1 from '../Images/gpu-carousel.png'
import img2 from '../Images/gpu-ventus-carousel.png'
import img3 from '../Images/ram-carousel.png'
import img4 from '../Images/intel-carousel.png'
import img5 from '../Images/logo-main.png'
import img6 from '../Images/offer-50.png'
import img7 from '../Images/msi-banner.jpg'
import imgaddinfo0 from '../Images/Safe delivery.png'
import imgaddinfo1 from '../Images/Best Prices.png'
import imgaddinfo2 from '../Images/genuine 100%.png'
import imgaddinfo3 from '../Images/Tech support.png'
import { useNavigate } from 'react-router-dom';

// Products Content

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "./Product";
import { productData, responsive } from "./productData";

export const Main = () => {
  const product = productData.map((item) => (
    <Product key={item.id}  data = {item} />
  ));
  const navigate = useNavigate();
  return (
    <>
      <main>
     <div className="contain-main flex flex-row">
     <div className="contain1">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" onClick={()=>navigate("/category/motherboard")}>
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
          <div className="carousel-item" onClick={() => navigate("/category/processor")}>
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
    <div className="msi-banner-parent flex flex-row">
      <img src={img7} className='msi-banner' alt=""/>
    </div>
      </main>

      {/* Products Content */}

      <div className="shop-categories-main flex flex-col f py-4">
        <h2 className="mx-5 my-3 bold">Shop Categories</h2>
        <Carousel
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition='all 2500ms'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={true}
          infinite={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          swipeable={true}
          draggable={true}
        >
          {product}
        </Carousel>
      </div>

      {/* Additonal info content*/}

      <div className="Additional-info flex flex-row">
        <div className="add-info flex">
        <img src={imgaddinfo0} alt="" className='add-info-image'/>
        <div className="add-info-in flex flex-col">
        <h5>Safe Delivery</h5>
        <p>Our products are safely packed and insured</p>
        </div>
        </div>
        <div className="add-info flex">
        <img src={imgaddinfo1} alt="" className='add-info-image'/>
        <div className="add-info-in flex flex-col">
        <h5>Bset Prices</h5>
        <p>Get the best prices, value and deals on products</p>
        </div>
        </div>
        <div className="add-info flex">
        <img src={imgaddinfo2} alt="" className='add-info-image'/>
        <div className="add-info-in flex flex-col">
        <h5>100% Genuine</h5>
        <p>Shop with full assurance.All are products are genuine.</p>
        </div>
        </div>
        <div className="add-info flex">
        <img src={imgaddinfo3} alt="" className='add-info-image'/>
        <div className="add-info-in flex flex-col">
        <h5>Tech Support</h5>
        <p>Stuck anywhere? All our customers get tech support.</p>
        </div>
        </div>
      </div>
      </>
  )
}
