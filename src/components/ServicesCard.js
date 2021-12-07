import React from "react"
import "../style.css"

export default function ServicesCard(props) {
  return (
    <div className="card">
      <i className={props.icon}></i>
      <h3>{props.description}</h3>
      <p>{props.info}</p>
    </div>
  )
}
