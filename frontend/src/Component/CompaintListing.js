import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader'
import React, { useState, useEffect } from "react"; that

export default function CompaintListing() {

    const [complaintListing, setComplaintListing] = useState([]);
    const [newStatus, setNewStatus] = useState({});
    let admin_id = localStorage.getItem('admin_id');
    const navigate = useNavigate()
    useEffect(() => {
        if (!admin_id) {
            navigate('/login')
        }
        getComplaints()
    }, [])


    const changeStatus = async (complaint_id, selectedStatus) => {
        console.log(selectedStatus, "selected status");
        let result = await fetch(`http://localhost:2001/api/v1/user/updatestatus/${complaint_id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
            },
            body: JSON.stringify({ selectedStatus })
        });
        const data = await result.json();
        return data;
    }

    const getComplaints = async () => {
        let response = await fetch(`http://localhost:2001/api/v1/user/getcomplaintData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": "vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=",
            }
        });
        let result = await response.json();
        console.log(result);
        setComplaintListing(result.data.result)
    }
    return (
        <>
            <AdminHeader />
            <div className="mt-5">
                <div className="container">
                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Ti me</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                complaintListing && complaintListing.length > 0 ? (
                                    complaintListing.map((element, id) => {
                                        return (
                                            <tr key={element.id}>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.subject}</td>
                                                <td>{element.description}</td>
                                                <td>{element.date}</td>
                                                <td>{element.time}</td>
                                                <td>
                                                    <select
                                                        value={newStatus[element.id] || element.status}
                                                        onChange={(e) => {
                                                            const selectedStatus = e.target.value;
                                                            setNewStatus((prevState) => ({
                                                                ...prevState,
                                                                [element.id]: selectedStatus,
                                                            }));
                                                            changeStatus(element.id, selectedStatus);
                                                        }}
                                                    >
                                                        <option value="PENDING">PENDING</option>
                                                        <option value="IN_PROCESS">In Progress</option>
                                                        <option value="RESOLVED">RESOLVED</option>
                                                    </select>
                                                </td>

                                            </tr>
                                        );
                                    })
                                ) : (
                                    "No Complaints found"
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
