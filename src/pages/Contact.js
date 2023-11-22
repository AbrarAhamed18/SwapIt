import React from "react";
import BreadCrumb from "../components/BreadCrumb";

import Meta from "../components/Meta";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <Container className="store-wrapper home-wrapper-2 py-5">
       
          <div className="row"></div>
         
           
          <div className="col-12 mt-5">
            <div className="contact-wrapper d-flex justify-content-between">
              <div><h3 className="contact-title mb-4">Contact Us</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div>
                  <input type="email" className="form-control"placeholder="Email"/>
                </div>
                <div>
                  <input type="tel" className="form-control"placeholder="Mobile"/>
                </div>
                <div>
                  <textarea name="" id=""className="w-100 form-control"cols="30" rows="4" placeholder="Comments"></textarea>

                </div>
                <div>
                  <button className="button border-0">Submit</button>
                </div>
              </form>
              </div>
              <div></div>
            </div>
          </div>
      
      </Container>
    </>
  );
};

export default Contact;
