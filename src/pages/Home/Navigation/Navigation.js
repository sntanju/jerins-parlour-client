import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand ><img className= "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkX0IAy0w9bC3asPcpAR5tAzwApTcDDGEuQ&usqp=CAU" alt="" /></Navbar.Brand>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>

                    <Nav className="link-style">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;

// https://docs.google.com/document/d/1vN1KMPvyi2V_7PQrVYR06h0tVmI4rBW1LeqAasAqi3A/edit?fbclid=IwAR2Nxsx5vVvx40YaqHIJ2dZr31fYOT0vTWcre_S6mZNXvP48dfzYwbgZJ8Y