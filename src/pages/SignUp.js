import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <Breadcrumb title="SignUp" />
      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-centre mb-3">SignUp</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput  type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"/>

                <CustomInput  type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"/>

                    <CustomInput  input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No"
                    className="form-control"/>

                    <CustomInput  input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control" />

                
                <div>
                    
                    <div className="d-flex justify-content-centre gap-15 align-items-center"></div>
                    <button className="button border-0" type="submit">SignUp</button>
                    
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      </>
  )
}
export default Signup;