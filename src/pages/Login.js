import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
      
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-centre mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
              <CustomInput  type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"/>
                <CustomInput  input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control" />
                <div>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                    <div className="d-flex justify-content-centre gap-15 align-items-center"></div>
                    <button className="button">Login</button>
                    <Link to="/signup"className="button signup">SignUp</Link>
                </div>
              </form>
            </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};
export default Login
