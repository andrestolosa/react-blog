import React from "react";
import '../styles/Header.css';
import logo from '../assets/img/runner.gif';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="Logo del Blog"
          width="50"
          height="50"
        />
        
      </div>
      <div className="title">
        <h2>The Runner Blog</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
          <a href="#">Quines Somos</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>
    </header>
  );
}
