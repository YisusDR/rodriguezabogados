import React from "react";
import headerImg from "../imagenes/headerimg2.png";

const Carta_inicio = () => {
  return (
    <div className="card text-center my-5">
      <div className="text-white">
        <img srcSet={headerImg} alt="justice" className="card-img" />
        <div className="card-img-overlay">
          <div className="card-title ">
            <h5>A B O G A D O S</h5>
          </div>
          <div className=" lineab"></div>
          <div className="card-text ">
            <p>
              Orientados e inspirados a la sostenibilidad, la innovación y la
              excelencia
            </p>
          </div>
          <a href="#" className="btn btn-outline-primary">
            Conocenos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carta_inicio;
