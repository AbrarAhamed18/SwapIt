import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import * as yup from 'yup'

import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from "formik";
import {useDispatch} from 'react-redux'
import { createQuery } from "../features/contact/contactSlice";
const contactSchema = yup.object({
  name: yup.string().required("name is required"),
  
 
  email: yup.string().email("email should be valid").required("Email address is required"),
 mobile:yup.string().required("mob no is required"),
 comment:yup.string().required("comment is required")
});
const Contact = () => {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
     
      email: '',
      mobile:'',
      comment:''
    },
    validationSchema:contactSchema,
     onSubmit: (values) => {
       dispatch(createQuery(values))
     },
  });
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <Container className="store-wrapper home-wrapper-2 py-5">
       
          <div className="row"></div>
         
           
          <div className="col-12 mt-5">
            <div className="contact-wrapper d-flex justify-content-between">
              <div><h3 className="contact-title mb-4">Contact Us</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <div>
                  <input type="text" className="form-control" placeholder="Name" 
                  name="name"
                  value={formik.values.name}
                   onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}

                    </div>
                  
                </div>
                <div>
                  <input type="email" className="form-control"placeholder="Email"
                   name="email"
                   value={formik.values.email}
                   onChange={formik.handleChange("email")}
                   onBlur={formik.handleBlur("email")}
                   />
                   <div className="error">
                     {formik.touched.email && formik.errors.email}

                   </div>
                </div>
                <div>
                  <input 
                   type="tel"
                   name="mobile"
                   placeholder="Mobile Number"
                   value={formik.values.mobile}
                   onChange={formik.handleChange("mobile")}
                   onBlur={formik.handleBlur("mobile")}
                   />
                   <div className="error">
                     {formik.touched.mobile && formik.errors.mobile}

                   </div>
                </div>
                <div>
                  <textarea name="comment" id=""className="w-100 form-control"cols="30" rows="4" placeholder="Comments"
                   value={formik.values.comments}
                   onChange={formik.handleChange("comment")}
                   onBlur={formik.handleBlur("comment")}
                  ></textarea>
                   <div className="error">
                     {formik.touched.comment && formik.errors.comment}

                   </div>

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
