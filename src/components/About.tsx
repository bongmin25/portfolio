import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/prefil.png"
              alt="Tu foto"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Soy un desarrollador web apasionado con experiencia en la creación
              de aplicaciones web modernas y escalables. Me especializo en
              tecnologías como React, Next.js, Express y PostgreSQL.
            </p>
            <p className="text-lg mb-4">
              Mi objetivo es crear soluciones innovadoras que mejoren la vida de
              las personas y contribuyan al avance tecnológico. Siempre estoy
              buscando nuevos desafíos y oportunidades para aprender y crecer
              profesionalmente.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
