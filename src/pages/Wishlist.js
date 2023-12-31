import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {useDispatch, useSelector} from 'react-redux'
import Container from "../components/Container";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
const Wishlist=()=>{
  const dispatch=useDispatch()
  useEffect(()=>{
    getWishlistFromDb()
},[])
const getWishlistFromDb=()=>{
    dispatch(getUserProductWishlist())
}
const wishlistState=useSelector((state)=>state?.auth?.wishlist?.wishlist)
const removeFromWishlist=(id)=>{
  dispatch(addToWishlist(id))
  setTimeout(()=>{
    dispatch(getUserProductWishlist())
  },300)
}
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            {
              wishlistState.length===0 &&(
                <div className="text-centre fs-3">No Data</div>
              )
            }
              {
              wishlistState?.map((item,index)=>{ 
                return( 
                <div className="col-3" 
                key={index}
                >
              <div className="wishlist-card  position-relative">
                <img onClick={()=>{removeFromWishlist(item?._id)}}
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg " className="img-fluid w-100" alt="watch" />
                  <div className="bg-white px-3 py-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">{item?.price}</h6>

                  </div>
                </div>
              </div>
            </div>
                 )
               })
            }  
            
            
          </div>
        </Container>
     
    </>
  );
}

export default Wishlist;
