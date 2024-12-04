import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/perfil.png"
              alt="perfil"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              ¡Hola!👋🏻 Soy <strong>Thomas</strong>, un programador y diseñador
              web que vive en <strong>Buenos Aires, Argentina.</strong> Me
              considero un tipazo, me gusta programar, aprender y construir
              nuevas relaciones.
            </p>
            <p className="text-lg mb-4">
              <strong>Mi objetivo es simple: </strong>
              crecer en una empresa para poder vivir de lo que me apasiona y
              usar la tecnología para mejorar la vida de las personas.
            </p>
            <a
              href="#contact"
              className="inline-block border text-white py-2 px-4 rounded hover:bg-red-950 transition font-bold"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
