import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import {  useDispatch ,useSelector} from "react-redux";
import { setLoading } from "../store/slices/loadingSlices";
import * as yup from "yup";
import Loading from "./Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddComplaint() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const { loading } = useSelector((state) => state.loading);
  const navigate = useNavigate();

    const schema = yup
    .object({
      Subject: yup
        .string()
        .required("Subject is required field"),
      Date: yup.string().required("Date is required field"),
      Description:yup.string().required("Description is required field"),
      Time:yup.string().required("Time is required field"),


    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  useEffect(() => {
    let user_id = localStorage.getItem("user_id");
    let user_info = localStorage.getItem("user-info");
    if (!user_id && !user_info) {
      navigate("/login");
    }
    // handleSubmit();
  }, []);

  const handSubmit = async (e) => {
    // e.preventDefault();
    // if (!subject || !description || !date || !time) {
    //   setError(true);
    //   return false;
    // }
    const userId = JSON.parse(localStorage.getItem("user-info")).id;
    const items = { description, subject, userId, date, time };
    console.log("items", items);
    
    try {
      dispatch(setLoading(true));
      let result = await fetch("http://localhost:2001/api/v1/user/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
        },
        body: JSON.stringify(items),
      });
      let data = await result.json();
      navigate("/complaint");
      dispatch(setLoading(false));
    }catch(error){
      console.error("Error:", error);
    }



    // dispatch(setLoading(true));
    // setTimeout(() => {
    //   dispatch(setLoading(false));
    // }, 2000);
  };

  return (
    <div>
       {loading? <Loading/> :
       <>
 <Header />
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="m-5">Add Complaint</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <div className="form-left h-100 py-5 px-5">
                      <form onSubmit={handleSubmit(handSubmit)} className="row g-4">
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Subject"
                              name="subject"
                              value={subject}
                              {...register("Subject")}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                          {
                            <span
                              style={{ float: "left" }}
                              className="text-danger"
                            >
                              {errors.Subject?.message}
                            </span>
                          }
                          {/* {error && !subject && (
                            <span
                              className="text-danger"
                              style={{ float: "left" }}
                            >
                              {" "}
                              Enter the subject
                            </span>
                          )} */}
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter description "
                              name="description"
                              value={description}
                              {...register("Description")}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          {/* {error && !description && (
                            <span
                              className="text-danger"
                              style={{ float: "left" }}
                            >
                              {" "}
                              Enter the description
                            </span>
                          )} */}
                          {
                            <span
                              style={{ float: "left" }}
                              className="text-danger"
                            >
                              {errors.Description?.message}
                            </span>
                          }
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="date"
                              className="form-control"
                              name="date"
                              value={date}
                              {...register("Date")}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                          {/* {error && !date && (
                            <span
                              className="text-danger"
                              style={{ float: "left" }}
                            >
                              {" "}
                              Enter the date
                            </span>
                          )} */}
                          {
                            <span
                              style={{ float: "left" }}
                              className="text-danger"
                            >
                              {errors.Date?.message}
                            </span>
                          }
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="time"
                              className="form-control"
                              name="time"
                              value={time}
                              {...register("Time")}
                              onChange={(e) => setTime(e.target.value)}
                            />
                          </div>
                          {
                            <span
                              style={{ float: "left" }}
                              className="text-danger"
                            >
                              {errors.Time?.message}
                            </span>
                          }
                          {/* {error && !date && (
                            <span
                              className="text-danger"
                              style={{ float: "left" }}
                            >
                              {" "}
                              Enter the time
                            </span>
                          )} */}
                        </div>
                        <div className="col-7">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                            style={{ textAlign: "center" }}
                          >
                            Add
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
       </>
      }
    </div>
  );
}
