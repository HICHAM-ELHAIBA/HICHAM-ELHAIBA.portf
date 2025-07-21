import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Logiciels CAO/DAO",
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "Robot Structural Analysis", level: 85 },
        { name: "CBS", level: 88 },
        { name: "Revit", level: 80 },
        { name: "MS Office 365", level: 95 },
      ]
    },
    {
      title: "Compétences Techniques",
      skills: [
        { name: "Conception Plans BA", level: 90 },
        { name: "Analyse Parasismique", level: 85 },
        { name: "Dimensionnement", level: 88 },
        { name: "Métré & Estimation", level: 85 },
        { name: "Modélisation 3D", level: 80 },
      ]
    },
    {
      title: "Langues",
      skills: [
        { name: "Arabe", level: 100 },
        { name: "Français", level: 85 },
        { name: "Anglais", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Outils et compétences techniques pour la réalisation de projets de génie civil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Formation Continue
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Le domaine du génie civil évolue constamment avec de nouvelles technologies et normes. 
              Je reste à jour avec les dernières innovations en conception structurelle et outils de modélisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;