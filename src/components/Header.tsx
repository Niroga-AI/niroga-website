import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/images/NirogaRectangularLogo.png" alt="Niroga" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/about" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">About</Link>
          <Link to="/technology" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Technology</Link>
          <Link to="/devices" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Devices</Link>
          <Link to="/solutions" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Solutions</Link>
          <Link to="/blog" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Blog</Link>
          <Link to="/contact" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="px-4 lg:px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-fadeIn">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link 
              to="/about" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/technology" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/devices" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Devices
            </Link>
            <Link 
              to="/solutions" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://orders.niroga.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-4 py-3 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
