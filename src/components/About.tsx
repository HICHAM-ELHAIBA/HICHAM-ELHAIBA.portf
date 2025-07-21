import React from 'react';
import { Building2, Calculator, FileText, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Conception Structures",
      description: "Conception et modélisation de plans béton armé"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Analyse Parasismique",
      description: "Modélisation et vérification parasismique avec RSA"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Études Techniques",
      description: "Métré, estimation des coûts et dimensionnement"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Formation Solide",
      description: "DUT + Licence Professionnelle en Génie Civil"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technicien Supérieur en Génie Civil passionné par la conception de structures et l'innovation technique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Expertise en Génie Civil et Conception Structurelle
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Titulaire d'un DUT en Génie Civil (EST Fkih Ben Salah) et d'une Licence Professionnelle 
                en Génie Civil (EST Salé), j'ai développé une expertise solide en conception de structures 
                et études techniques à travers des formations académiques rigoureuses et des stages pratiques.
              </p>
              <p>
                Mon expérience comprend la conception de plans béton armé, la modélisation parasismique, 
                et l'utilisation d'outils professionnels comme AutoCAD, RSA, et CBS. J'ai travaillé sur 
                des projets variés allant de bâtiments R+2 à des infrastructures publiques comme des lycées.
              </p>
              <p>
                Je souhaite intégrer un environnement professionnel qui combine bureau d'études et 
                visites de chantier pour développer mes compétences pratiques en coordination et 
                gestion de projets de construction.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Collaborons Ensemble
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;