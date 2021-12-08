import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import "../style.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <nav>
        <Link to="#hero">
          <img src="./images/logo.png" />
        </Link>
        <ul className="nav-links">
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
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:m.ventas@grupogarmafr.com";
          }}
        >
          Contacto
        </button>
        <div className="nav-icon" onClick={(e) => setIsActive(!isActive)}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      <div onClick={(e) => setIsActive(!isActive)}>
        {isActive && Dropdown()}
      </div>
    </header>
  );
}
function Dropdown() {
  return (
    <div className="dropdown">
      <div>
        <ul className="nav-links">
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
          <li>
            {" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:m.ventas@grupogarmafr.com";
              }}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
