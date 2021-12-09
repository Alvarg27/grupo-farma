import React from "react";
import "../style.css";
import BrandsCard from "./BrandCard";
import { useState, useEffect } from "react";

export default function Clients() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="clients" className="clients">
      <div
        className="background-circle1"
        style={{ transform: `translateY(-${offsetY - 4000 * 0.5}px)` }}
      ></div>
      <div
        className="background-circle2"
        style={{ transform: `translateY(-${offsetY - 5000 * 0.5}px)` }}
      ></div>
      <h2>Clientes</h2>
      <p>
        Estas son algunas de las instituciones a las que le prestamos nuestros
        servicios.
      </p>
      <div className="card-container">
        <BrandsCard img="./images/clientes/sedena.webp" />
        <BrandsCard img="./images/clientes/imss.webp" />
        <BrandsCard img="./images/clientes/queretaro.webp" />
      </div>
      <div className="card-container">
        <BrandsCard img="./images/clientes/centrum.webp" />
        <BrandsCard img="./images/clientes/michoacan.webp" />
        <BrandsCard img="./images/clientes/issste.webp" />
      </div>
      <h2 id="proveedores">Proveedores</h2>
      <p>
        Trabajamos de la mano con empresas del más alto nivel para ofrecerte el
        mejor servicio.
      </p>
      <div className="card-container">
        <BrandsCard img="./images/proveedores/pfizer.webp" />
        <BrandsCard img="./images/proveedores/bayer.webp" />
        <BrandsCard img="./images/proveedores/pisa.webp" />
      </div>
      <div className="card-container">
        <BrandsCard img="./images/proveedores/fisiolab.webp" />
        <BrandsCard img="./images/proveedores/oamp.webp" />
        <BrandsCard img="./images/proveedores/ultra.webp" />
      </div>
    </div>
  );
}
