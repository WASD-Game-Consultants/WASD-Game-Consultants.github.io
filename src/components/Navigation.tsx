
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/050603a7-51e2-4a7c-92d2-da8617d10a4d.png" alt="Game Development Consultancy" className="h-8 w-auto" />
              <span className="font-oswald font-semibold text-xl tracking-wider">WASD GAME CONSULTANTS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-lg">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
