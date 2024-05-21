import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ setSearchTerm }) {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {path === "/" ? <h1>"-"Gangeswaran"-"</h1> : <h1>←Back</h1>}
        </Link>
        <form >
          {path === "/" ? 
          <input 
            type="search" 
            placeholder='search-projects' 
            value={search}
            onChange={handleSearch}
            style={{fontFamily:"monospace"}}
          /> : ""}
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
