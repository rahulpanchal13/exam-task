import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'

import {signInWithPopup,signOut} from 'firebase/auth'
import { google,auth } from "../config/firebase";
// import Validation from "./Validation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [invalidError, setInvalidError] = useState();
  const [password, setPassword] = useState("");
  const [value,setValue]=useState("");
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required field")
        .email("Email is not valid"),
      password: yup.string().required("Password is required field"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [errors, setErrors] = useState({});

  async function Login(provider) {

    // e.preventDefault();
    let items = { email, password };
    // setErrors(Validation(items));
    // if (errors.email === "" && errors.password === "") {
    let response = await fetch("http://localhost:2001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
      },
      body: JSON.stringify(items),
    });
    
    let data = await response.json();



    if (data.code === "0") {
      setInvalidError(data.message);
    } else {
      const result=await signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
      })
      console.log(result,"res");
      localStorage.setItem("user-info", JSON.stringify(data.data));
      console.log("data.data", data.data);
      if (data.data.role === "User") {
        if (data.data.is_updated === 0) {
          navigate("/complaint");
          localStorage.setItem("user_id", JSON.stringify(data.data.id));
          Swal.fire(
            'Good job!',
            'You have successfully logged!',
            'success'
          )
        } else {
          navigate("/model");
        }
      } else {
        navigate("/userListing");
        localStorage.setItem("admin_id", JSON.stringify(data.data.id));
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    }

    // }
  }

  const social_login=async(provider)=>{
    console.log("ressponseeee", response.data.message);

  }
  return (
    <>
      {/* {loading ? <h1>Loading...</h1> : null} */}
      <Header />
      <>
      <button style={{width:150, backgroundColor:'#de5246', color:'white'}}
      onClick={() => Login(google)}>
        Login with Google
      </button>
     </>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="m-5">Login Now</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form
                        action=""
                        onSubmit={handleSubmit(Login)}
                        className="row g-4"
                      >
                        <div className="col-12">
                          {/* <label>
                        Email<span className="text-danger">*</span>
                      </label> */}
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill" />
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              name="email"
                              value={email}
                              {...register("email")}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          {
                            <span
                              style={{ float: "left" }}
                              className="text-danger"
                            >
                              {errors.email?.message}
                            </span>
                          }
                          {/* <span style={{float:'left'}}>{errors.email && <span className='text-danger'> {errors.email}</span>}</span> */}
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Password"
                              name="password"
                              value={password}
                              {...register("password")}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          {
                            <span
                              className="text-danger"
                              style={{ float: "left" }}
                            >
                              {" "}
                              {errors.password?.message}
                            </span>
                          }

                          {/* <span style={{float:'left'}}>{errors.password && <span className='text-danger'> {errors.password}</span>}</span> */}
                        </div>
                        <span style={{ float: "left" }}>
                          {invalidError && (
                            <span className="text-danger"> {invalidError}</span>
                          )}
                        </span>

                        <div className="col-sm-12">
                          <Link to="/" className="float-end text-primary">
                            Create Account!
                          </Link>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <h2 className="fs-1">Welcome Back!!!</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
