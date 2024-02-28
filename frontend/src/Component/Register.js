import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Header'
import Validation from './Validation'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {

  const schema = yup
    .object({
      email: yup
        .string() 
        .required("Email is required field")
        .email("Email is not valid"),
      username: yup.string().required("Username is required field"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [errors,setErrors]=useState({})
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function signUp(e) {
    // e.preventDefault(); 
    let items = { username, email }
    console.log("items", items);

    // setErrors(Validation(items))
    // if(errors.username==="" && errors.email===""){

    fetch("http://localhost:2001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
      },
      body: JSON.stringify(items),
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    })
    navigate("/login")

    // }
  }

  return (
    <>
      <Header />
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="m-5">Sign Up Now</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form onSubmit={handleSubmit(signUp)} className="row g-4">
                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                              name="username"
                              value={username}
                              {...register("username")}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>

                          {<span style={{ float: 'left' }} className="text-danger">{errors.username?.message}</span>}
                          {/* <span style={{float:'left'}}>{errors.username && <span className='text-danger'> {errors.username}</span>}</span> */}
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-envelope-fill" />
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
                          {<span style={{ float: 'left' }} className="text-danger">{errors.email?.message}</span>}

                          {/* <span style={{float:'left'}}>{errors.email && <span className='text-danger'> {errors.email}</span>}</span> */}
                        </div>
                        {/* <div className="col-12">
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-lock-fill" />
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                          />
                        </div>
                        <span style={{float:'left'}}>{errors.password && <span className='text-danger'> {errors.password}</span>}</span>
                      </div> */}

                        <div className="col-sm-12">
                          <Link to="/login" className="float-end text-primary">
                            Back to Login!
                          </Link>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
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
