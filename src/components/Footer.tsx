import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/devices" className="hover:text-white">Devices</Link></li>
              <li><Link to="/technology" className="hover:text-white">Technology</Link></li>
              <li><a href="https://orders.niroga.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/docs" className="hover:text-white">Docs</Link></li>
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">&copy; 2025 Niroga.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
