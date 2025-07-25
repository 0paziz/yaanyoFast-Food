import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link,} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-rose-950 text-white py-10 px-6 mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Yaanyo Fast-Food</h2>
          <p className="text-sm">
            Serving love, flavor, and freshness — one meal at a time. Proudly local. Always delicious.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm">Email: info@yaanyofood.com</p>
          <p className="text-sm mb-4">Phone: +256 700 123456</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-gray-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-gray-200">
        &copy; {new Date().getFullYear()} Yaanyo Fast Food. All rights reserved.
      </div>
    </footer>
  );
}
