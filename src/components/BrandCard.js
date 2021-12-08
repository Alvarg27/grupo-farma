import React from "react";
import "../style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function BrandsCard(props) {
  return (
    <div className="brand-card">
      <img src={props.img} alt="brand" />
    </div>
  );
}
