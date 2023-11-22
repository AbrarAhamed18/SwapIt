import React, { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import ReactImageZoom from"react-image-zoom"
import ProductCard from "../components/ProductCard";
import  { CiHeart } from "react-icons/ci";
import watch from "../images/watch.jpg"
import Container from "../components/Container";
const  SingleProduct= () => {
    const props = {width: 400, height: 250, zoomWidth: 500, img:watch};
    const[orderedProduct,setorderedProduct]=useState(true)
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title="Product Name" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
      
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
                 <div>
                 <img src={watch} className="img-fluid" alt=""/>
                    {/* <ReactImageZoom {...props} />  */}
                </div> 
            </div>
             <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                    <img src={watch} className="img-fluid" alt=""/>
                </div>
                <div>
                    <img src={watch} className="img-fluid" alt=""/>
                </div>
                <div>
                    <img src={watch} className="img-fluid" alt=""/>
                </div>
                <div>
                    <img src={watch}className="img-fluid"  alt=""/>
                </div>
            </div> 
          </div>
          <div className="col-6">
            <div className="main-product-details">
                <div className="border-bottom">
                    <h3 className="title">
                        Watch
                    </h3>
                </div>
                <div className="border-bottom">
                    <p className="price">$100</p>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars  count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" />
                    <p className="mb-0"> (3 Reviews)</p>
                    </div>
                    <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center">
                <h3 className="product-heading">Type :</h3>
                <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                <h3 className="product-heading">Brand :</h3>
                <p className="product-data">Havel</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                <h3 className="product-heading">Category :</h3>
                <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                <h3 className="product-heading">Tags :</h3>
                <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                <h3 className="product-heading">Availability :</h3>
                <p className="product-data">In Stock</p>
                </div>
                {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
                <h3 className="product-heading">Size :</h3>
                <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                </div>
                </div> */}
                {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
                <h3 className="product-heading">Color :</h3>
                
                </div> */}
                <div className="d-flex gap-10 align-items-center gap-15 flex-row mt-2 mb-3">
                <h3 className="product-heading">Quantity:</h3>
                <div className="">
                    <input type="number" name="" min={1} max={10} className="form-control" style={{width:"70px"}} id="" />

                </div>
                <div className="d-flex-align-items-centre gap-30 ms-5">
                <button className="button border-0" type="submit">Add to Cart</button>
                    <button className="button signup">Buy Now</button>
                </div>
                
                </div>
                <div className="d-flex align-items-center gap-15">
                    <div>
                        <a href=""><CiHeart className="fs-5 me-2"/>Add to Wishlist</a>
                    </div>
                    
                </div>
            </div>
          </div>
          </div>
        </div>
      
      </Container>
      <Container className="description-wrapper py-5 home-wrapper-2">
        
        <div className="row">
          <div className="col-12">
          <h4>Description</h4>
            <div className="bg-white p-3">
            
            <p >Nice Product</p>
            </div>
          </div>
          
          </div>

       
      </Container>
      <Container  className="reviews-wrapper  home-wrapper-2">
       
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
            <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars  count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" />
                    <p className="mb-0">Based on 3 Reviews</p>
                    </div>
                </div>
                    {
                      orderedProduct &&(
                        <div>
                    <a className="text-dark text-decoration-underline"href="">Write a Review</a>
                </div>
                      )  
                    }
                
            </div>
            <div  className="review-form py-4">
            <h4 className="mb-2">Write a Review</h4>
            <form action="" className="d-flex flex-column gap-15">
               <div>
               <ReactStars  count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor="#ffd700" />
               </div>
                <div>
                  <textarea name="" id=""className="w-100 form-control"cols="30" rows="4" placeholder="Comments"></textarea>

                </div>
                <div className="d-flex justify-content-end">
                  <button className="button border-0">Submit Review</button>
                </div>
              </form>
            </div>
            <div className="reviews mt-4">
                <div className="review">
               
                    <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Arun</h6>
                        <ReactStars  count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" />
                    </div>
                
                    <p className="mt-3">Nice product</p>
                </div>
            </div>
            </div>
            </div>
          
          </div>

       
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2"></Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                   <h3 className="section-heading">Our Popular Products </h3> 
                </div>
                
            </div>
            <div className="row">
                
                <ProductCard/>
                
                
            </div>
        </div>
    </Container>
    </>
  );
};
export default SingleProduct