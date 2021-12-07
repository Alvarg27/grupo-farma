import { Link } from "gatsby"
import React from "react"
import "../style.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="background-circle"></div>
      <div className="row">
        <div className="left-column">
          <img className="footer-image" src="./images/iso.png" />
        </div>
        <div className="right-column">
          <ul className="footer-links">
            <li>
              <Link to="#services">Servicios</Link>
            </li>
            <li>
              <Link to="#about">Nosotros</Link>
            </li>
            <li>
              <Link to="#clients">Clientes</Link>
            </li>
            <li>
              <Link to="#proveedores">Provedores</Link>
            </li>
          </ul>
          <h2>Contacto</h2>
          <Link to="#hero">
            <img src="./images/logo.png" width="200px" loading="lazy" />
          </Link>
          <ul className="contact-data">
            <li>
              <Link>ventas@grupogarmafr.com</Link>
            </li>
            <li>
              <Link>443 396 0900</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2021, Grupo Farma</p>
      </div>
    </div>
  )
}
