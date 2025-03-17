import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce | TechMobile",
    description: "Aplicación de e-commerce",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Express",
      "Next.js",
      "PostgreSQL",
    ],
    image: "/ecommerce.png",
    github: "https://github.com/bongmin25/e-commerce",
    live: "https://github.com/bongmin25/e-commerce",
  },
  {
    title: "Appointment App",
    description: "Plataforma para agendar turnos",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "MongoDB",
      "Express",
      "PostgreSQL",
    ],
    image: "appointment.png",
    github: "https://github.com/bongmin25/Appointment-App/",
    live: "https://github.com/bongmin25/Appointment-App/",
  },
  {
    title: "DevNavigator",
    description: "Cursos del mundo IT",
    image: "/devNavigator.png",
    technologies: [
      "JavaScript",
      "React.js",
      "HTML",
      "Tailwind",
      "Express",
      "Next.js",
      "PostgreSQL",
    ],
    github: "https://github.com/DevNavigator/DevNavigatorProject",
    live: "https://dev-navigator.vercel.app/",
  },
  {
    title: "Jesca | E-commerce",
    description: "Emprendimiento de ropa",
    image: "/jesca.png",
    technologies: [
      "JavaScript",
      "React.js",
      "HTML",
      "Tailwind",
      "Nest.js",
      "Next.js",
    ],
    github: "https://github.com/bongmin25/Jesca",
    live: "https://jesca-ochre.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-600 text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-500 hover:text-orange-400 transition"
                  >
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-rose-500 hover:text-rose-400 transition"
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
