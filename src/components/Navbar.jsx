import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../styles/Navbar.css';

function Navbar({ setSearchTerm }) {
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Project Showcase</h1>
        </Link>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Form>
      </div>
    </nav>
  );
}

export default Navbar;
