import React from 'react';
import { ArrowDown, Phone, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hicham Elhaiba
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Technicien Supérieur en Génie Civil passionné par la conception de structures et l'innovation technique
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                Spécialisé en conception de structures et études techniques. Titulaire d'un DUT en Génie Civil 
                et d'une Licence Professionnelle, avec une expérience pratique en bureau d'études et modélisation parasismique.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="mailto:hichame.elhaiba1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+212622095283"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hicham-elhaiba-9a56b52b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800">
                <img
                  src="/1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;