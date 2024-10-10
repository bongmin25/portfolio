import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">Mi Portafolio</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-300 transition">Sobre Mí</a>
          <a href="#projects" className="text-white hover:text-gray-300 transition">Proyectos</a>
          <a href="#skills" className="text-white hover:text-gray-300 transition">Habilidades</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition">Contacto</a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <a href="#about" className="block py-2 text-white hover:text-gray-300 transition">Sobre Mí</a>
          <a href="#projects" className="block py-2 text-white hover:text-gray-300 transition">Proyectos</a>
          <a href="#skills" className="block py-2 text-white hover:text-gray-300 transition">Habilidades</a>
          <a href="#contact" className="block py-2 text-white hover:text-gray-300 transition">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;