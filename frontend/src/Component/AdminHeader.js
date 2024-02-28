import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {signOut} from 'firebase/auth'
import { auth } from "../config/firebase";

export default function AdminHeader() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  const Logout=async()=> {
    localStorage.clear();
    const res=await signOut(auth)
    navigate("/");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <form class="form-inline">
                  <Link to="/userListing" className="p-5">UserListing</Link>
                  <Link to="/compaintListing">ComplaintListing</Link>
                </form>
              </>
            ) : (
              <>
                {/* <div className="ml-auto">
                  <Link to="/login" className="p-5">Login</Link>
                  <Link to="/">Register</Link>
                </div> */}
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
