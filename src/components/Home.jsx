import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>MY PROJECTS</h1>
      <div >
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Callback Task</h5>
                <p className="card-text"></p>
                <Link to="/calling" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Table Generation</h5>
                <p className="card-text"></p>
                <Link to="/Table" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Redux</h5>
                <p className="card-text"></p>
                <Link to="/counter-redux" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
      
      
    </>
  );
}

export default Home;
