import React from "react";
import "../style.css";
import { useState, useEffect } from "react";
import AboutCard from "./AboutCard";

export default function About() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="about" className="about">
      <div
        style={{ transform: `translateX(${offsetY - 2500 * 0.5}px)` }}
        className="background-circle"
      ></div>
      <div className="left-column">
        <div>
          <h2>
            Acerca de
            <br />
            grupo farma
          </h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:ventas@grupogarmafr.com";
            }}
          >
            Contacto
          </button>
        </div>
      </div>
      <div className="right-column">
        <div className="interior-left-column">
          <AboutCard
            img="./images/mision.webp"
            title="Misión"
            description="Empresa responsable con el manejo de los productos de la salud, con un nivel de atención de primer nivel, para el alcance de toda la población a precios justos."
          />
          <AboutCard
            img="./images/vision.webp"
            title="Visión"
            description="Ser una empresa líder en la industria farmacéutica, con un alcance a nivel nacional, tanto a nivel gobierno, como a nivel privado."
          />
        </div>
        <div className="interior-right-column">
          <AboutCard
            img="./images/valores.webp"
            title="Valores"
            description="Honestidad, compromiso, lealtad, servicio, trato humano."
          />
        </div>
      </div>
    </div>
  );
}
