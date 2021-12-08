import { Link } from "gatsby";
import React from "react";
import "../style.css";

export default function Footer() {
  const today = new Date();
  return (
    <div className="footer">
      <div className="background-circle"></div>
      <div className="row">
        <div className="left-column">
          <img
            className="footer-image"
            src="./images/iso.png"
            alt="footer-img"
            loading="lazy"
          />
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
              <Link to="#proveedores">Proveedores</Link>
            </li>
          </ul>
          <h2>Contacto</h2>
          <Link to="#hero">
            <img
              src="./images/logo.png"
              alt="logo"
              width="200px"
              loading="lazy"
            />
          </Link>
          <ul className="contact-data">
            <li>
              <p>ventas@grupofarmafr.com</p>
            </li>
            <li>
              <p>443 396 0900</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <small>© Copyright {today.getFullYear()}, Grupo Farma</small>
      </div>
    </div>
  );
}
