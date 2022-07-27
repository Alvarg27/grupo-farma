import { Link } from "gatsby";
import React from "react";
import "../style.css";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const today = new Date();
  return (
    <div className="footer">
      <div className="background-circle"></div>
      <div className="row">
        <div className="left-column">
          <img
            className="footer-image"
            src="./images/iso.webp"
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
              src="./images/logo.webp"
              alt="logo"
              width="200px"
              loading="lazy"
            />
          </Link>
          <div className="footer-icons-container">
            <Link
              to="https://www.facebook.com/profile.php?id=100083714029696"
              target="_blank"
            >
              <FaFacebookSquare className="footer-icon" />
            </Link>
            <Link to="https://www.instagram.com/grupofarmafr/" target="_blank">
              <FaInstagram className="footer-icon" />
            </Link>
          </div>
          <ul className="contact-data">
            <li>
              <p>ventas@grupofarmafr.com</p>
            </li>
            <li>
              <p>+52 442 225 3435</p>
            </li>
            <li>
              <p>+52 443 396 0900</p>
            </li>
            <li>
              <p>+52 442 620 3885</p>
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
