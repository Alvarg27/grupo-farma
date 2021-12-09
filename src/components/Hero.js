import React from "react";
import "../style.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(offsetY);
  return (
    <div id="hero" className="hero">
      <div className="background-circle"></div>
      <div className="left-column">
        <div style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
          <h2>Venta de medicamento genérico y patente.</h2>
          <p>
            Medicamento genérico del cuadro básico y patente para el mayor
            alcance de la población. A un precio justo y con un servicio íntegro
            al cliente.
          </p>
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
      <div
        style={{ transform: `translateX(${offsetY * 0.5}px)` }}
        className="right-column"
      >
        <img
          className="hero-image"
          id="heroImage"
          src="./images/hero.webp"
          alt="hero-image"
        />
      </div>
    </div>
  );
}
