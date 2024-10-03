import React from "react";
import Face from "../imagenes/icons8-facebook-64.png";
import Insta from "../imagenes/icons8-instagram-64.png";
import Linke from "../imagenes/icons8-linkedin-64.png";
import Tele from "../imagenes/icons8-telegrama-64.png";

const Footer = () => {
  return (
    <div className="mt-5 p-4 bg-dark text-white text-center rounded">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-lg-4 col-md-8 col-sm-12">
          <div className="row">
            <h3 className="fw-bold my-5">Rodriguez abogados</h3>
            <div className="col-lg-5 col-md-8 col-sm-12">
              <div className="text-start">
                <a
                  href="https://www.google.com/maps/search/Calle+ventuari,+Residencias+Alta+vista,+Torre+A,+Piso+2,+Puerto+Ordaz,+Venezuela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white fw-bold"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, hic Lorem ipsum dolor sit amet.
                  </p>
                </a>
                <hr />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevenir navegación por defecto
                    openWhatsApp(); // Llamar a la función para abrir WhatsApp
                  }}
                  className="text-decoration-none text-white"
                >
                  <p>+58 (414) 896 35 xx </p>
                </a>
                <hr />
                <a
                  href="mailto:info@rodriguezabogados.com?subject=Consulta%20Legal&body=Hola,%20necesito%20ayuda%20con%20..."
                  className="text-decoration-none text-white"
                >
                  <p>info@rodriguezabogados.com</p>
                </a>
                <hr />
                <p>
                  Copyright © 2024 Rodriguez Abogados Todos los Derechos
                  Reservados
                </p>
                <hr />
                <p>Desarrollado por Yisus</p>
              </div>
            </div>
            <div className="col-lg-7 col-md-10 col-sm-12">
              <div className="text-start">
                <p className="fw-bold">Información</p>
                <p>
                  Rellena el formulario con las dudas y/o comentarios. Nosotros
                  te asistiremos.
                </p>
                <ul className="nav ">
                  <li className="nav-item face p-0">
                    <a href="#">
                      <img src={Face} alt="" srcSet="" />
                    </a>
                  </li>
                  <li className="nav-item insta p-0">
                    <a href="#">
                      <img src={Insta} alt="" srcSet="" />
                    </a>
                  </li>
                  <li className="nav-item linke p-0">
                    <a href="#">
                      <img src={Linke} alt="" srcSet="" />
                    </a>
                  </li>
                  <li className="nav-item tele p-0 ">
                    <a href="#">
                      <img src={Tele} alt="" srcSet="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 ">
          <h3 className="fw-bold my-5">Evaluación gratuita</h3>
          <form action="submit" className="form-control my-5 py-5">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Nombre Completo"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Correo"
                className="form-control"
              />
            </div>
            <div className="card text-start">
              <div className="card-header">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                >
                  Asesoria en material
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse "
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="firstCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="firstCheckbox"
                      >
                        Laboral
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="secondCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="secondCheckbox"
                      >
                        Civil
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="thirdCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="thirdCheckbox"
                      >
                        Mercantil
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="thirdCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="thirdCheckbox"
                      >
                        Familia
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <textarea
              placeholder="Descripcion"
              className="form-control my-3"
            ></textarea>
            <button type="submit" className="btn btn-primary my-2">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-0 col-sm-2"></div>
      </div>
    </div>
  );
};

export default Footer;
