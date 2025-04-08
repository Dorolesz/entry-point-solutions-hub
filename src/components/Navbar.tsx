
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <span className="ml-2 text-xl font-heading font-bold text-gray-800">AccessBizto</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Főoldal
            </Link>
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Termékek <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link to="/products/hardware" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Hardver eszközök
                  </Link>
                  <Link to="/products/software" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Szoftver megoldások
                  </Link>
                  <Link to="/products/services" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Szolgáltatások
                  </Link>
                </div>
              )}
            </div>
            <Link to="/download" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Letöltés
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Rólunk
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Kapcsolat
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm">Bejelentkezés</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Regisztráció</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Főoldal
            </Link>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Termékek <ChevronDown className="ml-1 h-4 w-4 inline" />
            </button>
            {dropdownOpen && (
              <div className="pl-4">
                <Link 
                  to="/products/hardware" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100"
                  onClick={() => {setIsOpen(false); setDropdownOpen(false);}}
                >
                  Hardver eszközök
                </Link>
                <Link 
                  to="/products/software" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100"
                  onClick={() => {setIsOpen(false); setDropdownOpen(false);}}
                >
                  Szoftver megoldások
                </Link>
                <Link 
                  to="/products/services" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100"
                  onClick={() => {setIsOpen(false); setDropdownOpen(false);}}
                >
                  Szolgáltatások
                </Link>
              </div>
            )}
            <Link 
              to="/download" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Letöltés
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Rólunk
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Kapcsolat
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Bejelentkezés
            </Link>
            <Link 
              to="/register" 
              className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Regisztráció
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
