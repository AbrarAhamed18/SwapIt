import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from 'yup';
import { loginUser } from "../features/user/userSlice";
const loginSchema = yup.object({
 
  email: yup.string().email("email should be valid").required("Email address is required"),
 
 password:yup.string().required("password is required")
});
const Login = () => {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
     
      email: "",
     
      password:""
    },
    validationSchema:loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values))
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
      
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-centre mb-3">Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-30">
              <CustomInput  type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    values={formik.values.email}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}

                    </div>
                <CustomInput  input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    values={formik.values.password}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password}

                    </div>
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
