import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import React, { useState, useEffect, useRef } from 'react';

export default function UserListing() {
    const [userListing, setUserListing] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const records = userListing.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
    const number_page = Math.ceil(userListing.length / recordsPerPage);
    const numbers = [...Array(number_page).keys()].map((num) => num + 1);
    const componentPDF = useRef();

    let admin_id = localStorage.getItem('admin_id');
    const navigate = useNavigate();

    useEffect(() => {
        if (!admin_id) {
            navigate('/login');
        }
        getUserListing();
    }, [admin_id]);

    const getUserListing = async () => {
        let response = await fetch('http://localhost:2001/api/v1/user/getuserdata', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'vycxBkcWz3L8iHy8/RHOf+j2Z/5g7CwwVQ81fln9Zak=',
            },
        });
        let result = await response.json();
        console.log(result.data);
        setUserListing(result.data);
    }

    function perePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changePage(id) {
        setCurrentPage(id);
    }

    function nextPage() {
        if (currentPage < number_page) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <AdminHeader />
            <div className="mt-5">
                <div className="container">
                    <div ref={componentPDF}>
                        <table className="table">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records && records.length > 0 ? (
                                    records.map((element, id) => {
                                        return (
                                            <tr key={id}>
                                                <th scope="row">{(currentPage - 1) * recordsPerPage + id + 1}</th>
                                                <td>{element.username}</td>
                                                <td>{element.email}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="3">No User found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" onClick={perePage}>Previous</a>
                            </li>
                            {numbers.map((n) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={n}>
                                    <a className="page-link" href="#" onClick={() => changePage(n)}>{n}</a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link" href="#" onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
