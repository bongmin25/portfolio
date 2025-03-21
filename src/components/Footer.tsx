import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Thomas Dantas. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/bongmin25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/thomdantas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tom.dantas25@gmail.com"
              className="text-white hover:text-gray-500 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
