import React, { useState } from "react";
import Logo from "../imagenes/Logo.png";
import Vzla from "../imagenes/vzla.png";
import Usa from "../imagenes/usa.png";
import "./LanguageSelector.css";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const languages = [
    { code: "es", name: "Español", flag: Vzla },
    { code: "en", name: "English", flag: Usa },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    // Aquí puedes agregar más lógica, como cambiar el idioma en tu app
    console.log("Idioma seleccionado:", code);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded">
        <div className="container-fluid">
          <nav className="navbar bg-body-tertiary">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Bootstrap" width="70" height="60" />
            </a>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Areas de practica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Conocenos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Equipo de trabajo
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                buscar
              </button>
              {/*Cambiar el IDIOMA DE LA PAGINA*/}

              <div className="language-selector">
                <div className="selected-language">
                  {/* Mostrar la bandera y nombre del idioma seleccionado */}
                  <img
                    src={
                      languages.find((lang) => lang.code === selectedLanguage)
                        .flag
                    }
                    alt={selectedLanguage}
                    className="flag"
                  />
                </div>
                <ul className="language-options">
                  {languages.map((language) => (
                    <li
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`language-option ${
                        selectedLanguage === language.code ? "selected" : ""
                      }`}
                    >
                      <img src={language.flag} className="flag" />
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
