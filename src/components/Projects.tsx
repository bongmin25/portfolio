import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce | TechMobile",
    description: "Aplicación de e-commerce desarrollada con Express y Next.js",
    image: "/ecommerce.png",
    github: "https://github.com/bongmin25/e-commerce",
    live: "https://github.com/bongmin25/e-commerce",
  },
  {
    title: "Appointment App",
    description:
      "Plataforma de e-commerce TechShop hecha con Node.js, Express y MongoDB.",
    image: "appointment.png",
    github: "https://github.com/bongmin25/Appointment-App/",
    live: "https://github.com/bongmin25/Appointment-App/",
  },
  {
    title: "Cinema",
    description:
      "Aplicación de Cine para agregar películas y verlas en la lista",
    image: "/cinema.png",
    github: "https://github.com/bongmin25/Cinema",
    live: "https://github.com/bongmin25/Cinema",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-500 hover:text-orange-800 transition"
                  >
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-rose-900 hover:text-rose-600 transition"
                  >
                    <ExternalLink size={20} className="mr-1" /> Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
