import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavUI() {

    const cartProducts = useSelector(state => state.cart.items)

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand to='/' as={Link}>
          <h1 className="display-6" style={{ color: "#fff" }}>
            Dragon Shop
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#fff" }} to='/' as={Link}>
              <h5>Products</h5>
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} to='/cart' as={Link}>
              <h5>Cart {cartProducts.length}</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavUI;
