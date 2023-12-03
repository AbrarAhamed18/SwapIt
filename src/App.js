import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <> 
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="product" element={<OurStore/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
            <Route path="wishlist" element={<Wishlist/>} />
            <Route path="login" element={<Login/>} />
            <Route path="forgot-password" element={<ForgotPassword/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="reset-password" element={<Resetpassword/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
