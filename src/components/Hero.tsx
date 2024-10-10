import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold mb-4">Thomas Dantas</h1>
        <p className="text-2xl mb-6">Desarrollador Web Full Stack</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/bongmin25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/thomdantas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="tom.dantas25@gmail.com"
            className="text-white hover:text-gray-300 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
