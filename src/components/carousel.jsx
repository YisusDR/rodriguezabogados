import React from "react";
import Uno from "../imagenes/slider 1.jpg";
import Dos from "../imagenes/slider 2.jpg";
import Tres from "../imagenes/slider 3.jpg";
const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <img src={Uno} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>
                "Es un placer darles la bienvenida a todos los presentes. Esta
                reunión es una oportunidad para compartir conocimientos,
                experiencias y fortalecer nuestros lazos como comunidad legal."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Dos} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <p>
                "La abogacía es un camino lleno de desafíos, pero también de
                grandes recompensas. Cada obstáculo nos hace más fuertes y
                resilientes."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Tres} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>
                "La ley es más que un conjunto de reglas; es un reflejo de
                nuestros valores y aspiraciones como sociedad."
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
