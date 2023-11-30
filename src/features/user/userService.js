import axios from"axios"
import { base_url,config } from "../../utils/axiosConfig";
// const config = {
//     headers: {
//         Authorization: `Bearer ${
//             getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//           }`,
//           Accept: "application/json",
//     },
//   };
const register=async(userData)=>{
    const response=await axios.post(`${base_url}user/register`,userData);
   
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
          }
          return response.data;
    
}
const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/login`,userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      return response.data;
}
const getUserWishlist=async()=>{
    const response=await axios.get(`${base_url}user/wishlist`,config);
    if(response.data){
        return response.data;
    }
}
const addToCart = async (cartData) => {
    try {
      const response = await axios.post(`${base_url}user/cart`, cartData, config);
  
      // Log the entire response for debugging
      console.log("Axios Response:", response);
  
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      // Log the detailed error information for debugging
      console.error("Axios Error:", error);
  
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  };
  const getCart=async()=>{
    const response=await axios.get(`${base_url}user/cart`,config);
    if(response.data){
        return response.data;
    }
}
const removeProductFromCart=async(cartItemId)=>{
  const response=await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`,config);
  if(response.data){
      return response.data;
  }
}
const updateProductFromCart=async(cartDetail)=>{
  const response=await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,config);
  if(response.data){
      return response.data;
  }
}
  
export const authService={
    register,login,getUserWishlist,addToCart,getCart,removeProductFromCart,updateProductFromCart
}