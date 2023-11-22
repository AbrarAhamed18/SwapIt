import React from 'react'
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
function Resetpassword() {
  return (
    <>
    <Meta title={"Reset Password"} />
      <Breadcrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">

        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-centre mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-30">
              <CustomInput  input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control" />
                 <CustomInput  input
                    type="password"
                    name="password"
                    placeholder="Confirm-Password"
                    className="form-control" />
                
                <div>
                    
                    <div className="d-flex justify-content-centre gap-15 align-items-center"></div>
                    <button className="button">Confirm</button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Resetpassword