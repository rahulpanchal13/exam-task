import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../store/slices/loadingSlices";
export default function Complaint() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const [complaints, setComplaint] = useState([]);
  let user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id) {
      navigate("/login");
    }
    getComplaints();
  }, []);

  const getComplaints = async () => {
    const userId = JSON.parse(localStorage.getItem("user-info")).id;
    let complaint_result = await fetch(
      `http://localhost:2001/api/v1/user/getComplaint/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
        },
      }
    );
    complaint_result = await complaint_result.json();
    console.log("data", complaint_result.data.result);
    setComplaint(complaint_result.data.result);
  };
  return (
    <>
      {/* {loading? <Loading/> :
         <> */}
      <Header />
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2" style={{ float: "left" }}>
            <NavLink to="/addComplaint" className="btn btn-primary">
              Add Complaint
            </NavLink>
          </div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Subject</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints && complaints.length > 0
                ? complaints.map((element, id) => {
                    return (
                      <tr key={element.id}>
                        <th scope="row">{id + 1}</th>
                        <td>{element.subject}</td>
                        <td>{element.description}</td>
                        <td>{element.date}</td>
                        <td>{element.time}</td>
                        <td>{element.status}</td>
                      </tr>
                    );
                  })
                : "No Complaints found"}
            </tbody>
          </table>
        </div>
      </div>
    </>

    //      }

    // </>
  );
}
