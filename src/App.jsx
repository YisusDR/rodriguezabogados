import React from "react";
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import Carta_inicio from "./components/carta_inicio";
import Sobre_nosotros from "./components/Sobre_nosotros";
import Cards_imgs from "./components/Cards_imgs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
const App = () => {
  const phoneNumber = "584148963509"; // número de WhatsApp, sin el +
  const message = "Hola, necesito más información."; // Mensaje predefinido
  //funcion de whatsapp
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main className="container-fluid ">
      {/*Slider del inicio*/}
      <Carousel />
      {/*Navbar*/}
      <Navbar />
      {/*body*/}
      <div className="container ">
        <Carta_inicio />
        <div>
          <div className="container my-5">
            <Sobre_nosotros />
            <div className="container-fluid ">
              <Cards_imgs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton phoneNumber={phoneNumber} message={message} />
    </main>
  );
};

export default App;
