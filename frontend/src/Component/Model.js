import React from 'react'



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Validation from "./Validation";

export default function Model() {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  async function handlSubmit(e) {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('user-info')).id;
    let items = { password };
    console.log(items);
    setErrors(Validation(items));
    if (errors.password === "") {
      let response = await fetch(`http://localhost:2001/api/v1/user/updatepassword/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
        },
        body: JSON.stringify(items),
      })
      let data = await response.json();
      navigate('/complaint')
    }
  }


  return (
    <div>
      <Header />
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10
 offset-lg-1">
              <h3 className="m-5">Update Password</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-5 mx-auto">
                    <div className="form-left h-50 py-5 px-5">
                      <form className="row g-4" onSubmit={handlSubmit} >
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="if user can login in user panel but it accesible to admin page in react js solutiontext"
                              className="form-control"
                              placeholder="Enter Password"
                              name="password" value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <span style={{ float: 'left' }}>{errors.password && <span className='text-danger'> {errors.password}</span>}</span>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-left mt-4"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
