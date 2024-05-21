import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import project1Image from "../Images/callback.gif";
import project2Image from "../Images/table.gif";
import project3Image from "../Images/redux.gif";


const projects = [
  {
    id: 1,
    title: "Callback Task",
    image: project1Image,
    link: "/calling"
  },
  {
    id: 2,
    title: "Table Generation",
    image: project2Image,
    link: "/Table"
  },
  {
    id: 3,
    title: "Redux",
    image: project3Image,
    link: "/counter-redux"
  }
];

function Home({ searchTerm }) {
  const [likes, setLikes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [liked, setLiked] = useState({ 1: false, 2: false, 3: false });

  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: liked[id] ? prevLikes[id] - 1 : prevLikes[id] + 1
    }));
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id]
    }));
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 style={{ textAlign: "center",color:"#001878e8;" }}>MY PROJECTS</h1>
      <div className="row">
        {filteredProjects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card post-card">
              <div className="card-header">
                <h5 className="card-title">{project.title}</h5>
              </div>
              <img src={project.image} alt={project.title} className="card-img-top" />
              <div className="card-body">
                <button
                  onClick={() => toggleLike(project.id)}
                  className="like-button"
                >
                  {liked[project.id] ? "❤️" : "Like👍"} <span>{likes[project.id] ? likes[project.id] : ""}</span>
                </button>
              </div>
              <div className="card-footer">
                <Link to={project.link} className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
