import React from "react";
import "../style.css";
import { useState, useEffect } from "react";
import ServicesCard from "./ServicesCard";

export default function Services() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(offsetY);
  return (
    <div id="services" className="services">
      <div
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        className="background-circle"
      ></div>
      <h2>Nuestros servicios</h2>
      <div className="card-container">
        <ServicesCard
          icon="fas fa-pills"
          description="Venta de medicamento genérico y patente."
        />
        <ServicesCard
          icon="fas fa-assistive-listening-systems"
          description="Venta de equipo audiovisual."
        />
        <ServicesCard
          icon="fas fa-microscope"
          description="Venta de equipo médico y de laboratorio."
        />
        <ServicesCard
          icon="fas fa-laptop-medical"
          description="Venta de material médico."
        />
      </div>
    </div>
  );
}
