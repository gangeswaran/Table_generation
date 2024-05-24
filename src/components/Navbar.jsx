import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../styles/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../components/project_3/counterSlice';

function Navb({ setSearchTerm }) {
  const count = useSelector((state) => state.counter.value);
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          {path === "/" ? <h1>"-"Gangeswaran"-"</h1> : <h1>←Back</h1>}
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto d-flex align-items-center">
            {path === "/" && (
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="search-projects"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={handleSearch}
                  style={{ fontFamily: "monospace" }}
                />
              </Form>
            )}
            <button className="signup me-2">Signup</button>
            <button className="login">Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {path === "/counter-redux" && (
        <a onClick={handleCartClick}>
          Cart {count}
        </a>
      )}
    </Navbar>
  );
}

export default Navb;
