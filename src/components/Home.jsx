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
  },
];

function Home({ searchTerm }) {
  const [likes, setLikes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [liked, setLiked] = useState({ 1: false, 2: false, 3: false });

  const toggleLike = (id) => {
    setLikes((likes) => ({
      ...likes,
      [id]: liked[id] ? likes[id] - 1 : likes[id] + 1
    }));
    setLiked((liked) => ({
      ...liked,
      [id]: !liked[id]
    }));
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="counterContainer">
      <div className="card">
        {filteredProjects.map((project) => (
          <div className="cardItem" key={project.id}>
            <img src={project.image} alt={project.title} className="cardImgTop" />
            <div className="cardBody">
              <h4 className="cardTitle">{project.title}</h4>
              <p className="cardText">See the project and choose what you need!</p>
              <button onClick={() => toggleLike(project.id)} className="counterButton">
                {liked[project.id] ? "❤️ Liked" : "Like👍"} <span>{likes[project.id]}</span>
              </button>
              <span><br /></span>
              <Link to={project.link} className="btn btn-primary">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
