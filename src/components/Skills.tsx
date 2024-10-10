import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: <Code size={40} />,
    items: ['React','HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js'],
  },
  {
    name: 'Backend',
    icon: <Server size={40} />,
    items: ['Node.js', 'Express'],
  },
  {
    name: 'Bases de Datos',
    icon: <Database size={40} />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'Móvil',
    icon: <Smartphone size={40} />,
    items: ['React Native'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.name}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
