import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-gray-400 max-w-md">
              Creating beautiful digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Hicham Elhaiba</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hicham Elhaiba. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;