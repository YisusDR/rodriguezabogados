import React from "react";
import About from "../imagenes/medio2.jpg";

const Sobre_nosotros = () => {
  return (
    <div className="row my-5">
      <div className="col-xl-7 col-lg-7 col-md-6 my-5 fw-light">
        <h2 className="my-5 ">Sobre nosotros</h2>
        <hr />
        <p>
          Lunes Legal es una firma de abogados especializada en Propiedad
          Intelectual y Derecho Corporativo. Nuestro equipo está conformado por
          profesionales con amplia experiencia, siempre listos para brindar la
          mejor asesoría y asistencia legal, tanto en Venezuela como en el
          mundo.
        </p>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-6 my-5">
        <div className="img_medio_about  my-5">
          <img className="rounded " src={About} alt="About Lunes legal" />
        </div>
      </div>
    </div>
  );
};

export default Sobre_nosotros;
