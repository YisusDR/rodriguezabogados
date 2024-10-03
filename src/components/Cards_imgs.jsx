import React from "react";
import bg1 from "../imagenes/reco1.jpg";
import bg2 from "../imagenes/medio.jpg";
import bg3 from "../imagenes/reco3.jpg";

const Cards_imgs = () => {
  return (
    <div className="row ">
      <div className="col-sm-12 col-md-8 col-lg-4">
        <div className="card text-center">
          <div className="card-body bg-dark text-white">
            <img src={bg1} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title fw-bold my-2">Nosotros</h2>
              <p className="card-text my-2">
                Somos una firma legal de abogados constituida en Venezuela, con
                una destacada trayectoria con muchos años de experiencia…
              </p>
              <a href="#" className="btn btn-outline-primary my-5 ">
                ver mas
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-8 col-lg-4">
        <div className="card text-center">
          <div className="card-body  bg-dark text-white">
            <img src={bg2} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title fw-bold my-2">Areas de practica</h2>
              <p className="card-text my-2">
                Brindamos servicio legal de defensa y asesoría en procesos
                judiciales a personas particulares y jurídicas a nivel nacional
                e internacional, vía online, telefónica y presencial…
              </p>
              <a href="#" className="btn btn-outline-primary my-5">
                ver mas
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-sm-12 col-md-8 col-lg-4 ">
        <div className="card text-center ">
          <div className="card-body  bg-dark text-white">
            <img src={bg3} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title fw-bold my-2">Contacto</h2>
              <p className="card-text my-2">
                Para mayor información sobre nuestros servicios, contacte con
                nuestros asesores….
              </p>
              <a href="#" className="btn btn-outline-primary my-5">
                ver mas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards_imgs;
