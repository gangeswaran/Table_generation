import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import styled from "styled-components";

function Home() {
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  const [like3, setLike3] = useState(0);

  const liked1 = () => {
    setLike1(like1 + 1);
  };

  const liked2 = () => {
    setLike2(like2 + 1);
  };

  const liked3 = () => {
    setLike3(like3 + 1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>MY PROJECTS</h1>
      <div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Callback Task</h5>
              <button
                onClick={liked1}
                style={{ border: "none", background: "transparent" }}
              >
                👍
                <p>{like1}</p>
              </button>
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
            <button
              onClick={liked2}
              style={{ border: "none", background: "transparent" }}
            >
              👍
              <p>{like2}</p>
            </button>
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
            <button
              onClick={liked3}
              style={{ border: "none", background: "transparent" }}
            >
              👍
              <p>{like3}</p>
            </button>
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
