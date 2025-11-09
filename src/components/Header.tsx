import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/src/assets/NirogaRectangularLogo.png" alt="Niroga" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Link to="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/technology" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">Technology</Link>
          <Link to="/devices" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">Devices</Link>
          <Link to="/solutions" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">Solutions</Link>
          <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://order.niroga.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Order Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link to="/about" className="block px-4 py-2 text-sm font-medium text-gray-700">About</Link>
            <Link to="/technology" className="block px-4 py-2 text-sm font-medium text-gray-700">Technology</Link>
            <Link to="/devices" className="block px-4 py-2 text-sm font-medium text-gray-700">Devices</Link>
            <Link to="/solutions" className="block px-4 py-2 text-sm font-medium text-gray-700">Solutions</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm font-medium text-gray-700">Contact</Link>
            <a href="https://order.niroga.ai" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-blue-600 text-white rounded font-medium text-center">Order Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
