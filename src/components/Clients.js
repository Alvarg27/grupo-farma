import React from "react"
import "../style.css"
import BrandsCard from "./BrandCard"
import { useState, useEffect } from "react"

export default function Clients() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="card-container">
        <BrandsCard img="./images/clientes/sedena.png" />
        <BrandsCard img="./images/clientes/imss.png" />
        <BrandsCard img="./images/clientes/queretaro.png" />
      </div>
      <div className="card-container">
        <BrandsCard img="./images/clientes/centrum.png" />
        <BrandsCard img="./images/clientes/michoacan.png" />
      </div>
      <h2 id="proveedores">Proveedores</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="card-container">
        <BrandsCard img="./images/proveedores/pfizer.png" />
        <BrandsCard img="./images/proveedores/bayer.png" />
        <BrandsCard img="./images/proveedores/pisa.png" />
      </div>
      <div className="card-container">
        <BrandsCard img="./images/proveedores/fisiolab.png" />
        <BrandsCard img="./images/proveedores/oamp.png" />
        <BrandsCard img="./images/proveedores/ultra.png" />
      </div>
    </div>
  )
}
