import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import styled from "styled-components";

class Project {
  constructor(name) {
    this.name = name;
    this.likes = 0;
    this.liked = false; // New property to track whether the project is liked
  }

  toggleLike() {
    if (this.liked) {
      this.likes--;
    } else {
      this.likes++;
    }
    this.liked = !this.liked;
  }
}

function Home() {
  // Create instances of Project for each project
  const [projects] = useState([
    new Project("Callback Task"),
    new Project("Table Generation"),
    new Project("Redux"),
  ]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>MY PROJECTS</h1>
      <div>
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <button
                  onClick={() => project.toggleLike()}
                  style={{ border: "none", background: "transparent" }}
                >
                  {project.liked ? "Unlike" : "Like"}
                </button>
                <p>{project.likes}</p>
                <Link
                  to={`/${project.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="btn btn-primary"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
