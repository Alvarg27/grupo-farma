import React from "react";
import "../style.css";

export default function AboutCard(props) {
  return (
    <div className="card-container">
      <div className="about-card">
        <img src={props.img} loading="lazy" alt="about-image" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
