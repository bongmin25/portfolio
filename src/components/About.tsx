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
              ¡Hola! Soy un desarrollador web apasionado por crear aplicaciones
              modernas y escalables, me encanta lo que hago. Me siento muy
              cómodo con tecnologías como React, Next.js, Express y PostgreSQL.
            </p>
            <p className="text-lg mb-4">
              Mi objetivo es simple: hacer que la tecnología funcione para las
              personas, no al revés. No me dedico a resolver problemas, sino a
              crear soluciones. Siempre estoy en busca de proyectos interesantes
              y desafiantes que me ayuden a seguir aprendiendo y mejorando. ¡Si
              hay una manera de hacer algo mejor o más eficiente, ahí estaré
              metido!
            </p>
            <a
              href="#contact"
              className="inline-block border text-white py-2 px-4 rounded hover:bg-red-950 transition"
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
