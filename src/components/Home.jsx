import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import styled from "styled-components";

function Home() {
  const [like1, setLike1] = useState(0);
  const [liked1, setLiked1] = useState(false);
  
  const [like2, setLike2] = useState(0);
  const [liked2, setLiked2] = useState(false);
  
  const [like3, setLike3] = useState(0);
  const [liked3, setLiked3] = useState(false);

  const toggleLike1 = () => {
    if (liked1) {
      setLike1(like1 - 1);
    } else {
      setLike1(like1 + 1);
    }
    setLiked1(!liked1);
  };

  const toggleLike2 = () => {
    if (liked2) {
      setLike2(like2 - 1);
    } else {
      setLike2(like2 + 1);
    }
    setLiked2(!liked2);
  };

  const toggleLike3 = () => {
    if (liked3) {
      setLike3(like3 - 1);
    } else {
      setLike3(like3 + 1);
    }
    setLiked3(!liked3);
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
                onClick={toggleLike1}
                style={{ border: "none", background: "transparent" }}
              >
              {liked1 ? "❤️" : "👍"} <span>{like1  ? like1: ""}</span>
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
              onClick={toggleLike2}
              style={{ border: "none", background: "transparent" }}
            >
              {liked2 ? "❤️" : "👍"}<span>{like2  ? like2: ""}</span>
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
              onClick={toggleLike3}
              style={{ border: "none", background: "transparent" }}
            >
              {liked3 ? "❤️" : "👍"}<span>{like3  ? like3: ""}</span>
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
