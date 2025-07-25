import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${
        isHome ? "bg-transparent" : "bg-rose-900"
      } text-white px-6 py-4 flex justify-between items-center transition-all duration-300 relative z-10`}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">Yaanyo Fast-Food</Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-2 items-center">
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/menu" className="hover:underline">Menu</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
    
        <Link to="/" className="text-2xl  hover:text-yellow-400 ml-2">
          <FaShoppingCart size={18} />
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-rose-900 md:hidden flex flex-col gap-2 py-4 z-20 shadow-md">
          <Link to="/" onClick={closeMenu} className="px-4 py-2 hover:underline">Home</Link>
          <Link to="/menu" onClick={closeMenu} className="px-4 py-2 hover:underline">Menu</Link>
          <Link to="/about" onClick={closeMenu} className="px-4 py-2 hover:underline">About</Link>
          <Link to="/contact" onClick={closeMenu} className="px-4 py-2 hover:underline">Contact</Link>
          <Link to="/cart" onClick={closeMenu} className="px-4 py-2 hover:underline flex items-center gap-2">
            <FaShoppingCart /> Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
