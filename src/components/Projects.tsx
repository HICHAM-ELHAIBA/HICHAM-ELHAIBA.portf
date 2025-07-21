import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Étude Technique d'un Lycée",
      description: "Conception complète d'un lycée incluant plans de coffrage, modélisation parasismique avec RSA, et estimation détaillée des coûts. Projet réalisé lors du stage à l'ANEP Marrakech.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "RSA", "CBS", "Plans BA", "Analyse Parasismique"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Projet Bâtiment R+2",
      description: "Conception de plans béton armé (coffrage et ferraillage), prédimensionnement des éléments porteurs et quantification des matériaux. Calculs manuels et vérification avec RSA.",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "RSA", "CBS", "Ferraillage", "Dimensionnement"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Modélisation Parasismique",
      description: "Analyse parasismique avancée utilisant la méthode des éléments finis avec Robot Structural Analysis pour vérifier la résistance aux séismes.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["RSA", "Analyse Sismique", "Éléments Finis", "Modélisation 3D"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Plans de Coffrage",
      description: "Élaboration de plans de coffrage détaillés pour structures en béton armé, incluant les détails de construction et spécifications techniques.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "Plans Techniques", "Béton Armé", "Détails Construction"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Métré et Estimation",
      description: "Quantification précise des matériaux et estimation des coûts pour projets de construction, incluant analyse économique comparative.",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Excel", "Estimation Coûts", "Quantification", "Analyse Économique"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Modélisation BIM",
      description: "Utilisation de Revit pour la modélisation BIM de structures complexes, permettant une meilleure coordination entre les différents corps de métier.",
      image: "https://images.pexels.com/photos/8293701/pexels-photo-8293701.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Revit", "BIM", "Modélisation 3D", "Coordination"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aperçu de mes projets académiques et expériences professionnelles
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                       <span>Détails</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                       <span>Plans</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Autres Projets
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      <span>Voir</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm font-medium"
                    >
                      <Github size={14} />
                      <span>Plans</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Discutons de Vos Projets</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;