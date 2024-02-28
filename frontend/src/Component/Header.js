import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  function Logout() {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {

        localStorage.clear();
        navigate("/");

        Swal.fire(
          'Logout!',
          'You has been Logout.',
          'success'
        )
      }
    })




  
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>User portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <form class="form-inline">
                  <Link to="/addComplaint">Complaint</Link>
                </form>
              </>
            ) : (
              <>
                <div className="ml-auto">
                  <Link to="/login" className="p-5">Login</Link>
                  <Link to="/">Register</Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user.username}>
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Container>
    </Navbar>
  );
}
