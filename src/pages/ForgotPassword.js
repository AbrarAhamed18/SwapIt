import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-centre mb-3">Reset Your Password</h3>
              <p className="text-centre mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-30">
              <CustomInput  type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"/>
               
                <div>
                    
                    <div className="d-flex justify-content-centre flex-column gap-15 align-items-center"></div>
                    <button to="/reset-password" className="button border-0" type="submit">Submit</button>
                    
                    <Link to='/login'>Cancel</Link>
                </div>
              </form>
            </div>
            </div>
          </div>
        
      </Container>

      </>
  )
}
export default ForgotPassword