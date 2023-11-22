import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";

import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    let location=useLocation();
const {grid}=props
  return (
    <>
    <div className={`${location.pathname==="/product"?`col-${grid}`:"col-3"}`}>
        <Link to={`${location.pathname=="/" 
                                        ? "product/:id" 
                                        :location.pathname=="/product/:id"
                                        ?"/product/:id"
                                        :":id"
                                        }`}  
                                        className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" /></button>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="product image" />
                {/* <img src="images/speaker.jpg" alt="product image" /> */}
            </div>
            <div className="product-details">
                <h6 className="brand">FireBoltt</h6>
                <h5 className="poduct-title">V3 smartwatch cellular with gps</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                    />
                     <p className='description'>Nice</p>
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="add cart" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="add cart" />
                    </button>

                </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname==="/product"?`col-${grid}`:"col-3"}`}>
        <Link to ={`${location.pathname=="/" 
                                        ? "product/:id" 
                                        :location.pathname=="/product/:id"
                                        ?"/product/:id"
                                        :":id"
                                        }`}  className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'><img src={wishlist} alt="wishlist" /></button>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="product image" />
                {/* <img src="images/speaker.jpg" alt="product image" /> */}
            </div>
            <div className="product-details">
                <h6 className="brand">FireBoltt</h6>
                <h5 className="poduct-title">V3 smartwatch cellular with gps</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                    />
                    <p className='description'>Nice</p>
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="add cart" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="add cart" />
                    </button>

                </div>
            </div>
        </Link>
    </div>
    </>
    
  )
}

export default ProductCard