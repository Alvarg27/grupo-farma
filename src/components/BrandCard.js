import React from "react";
import "../style.css";

export default function BrandsCard(props) {
  return (
    <div className="brand-card">
      <img src={props.img} loading="lazy" alt="brand" />
    </div>
  );
}
