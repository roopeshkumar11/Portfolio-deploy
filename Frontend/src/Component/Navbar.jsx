import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "../Pages/Logout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glassmorphism-dark border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left - Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink hover:opacity-80 transition duration-300 font-mono"
        >
          ROOPESH //
        </Link>

        {/* Middle - Navigation Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-x-8 text-sm font-medium tracking-widest font-mono text-gray-300">
          <li>
            <Link
              to="/#home"
              onClick={() => handleNavClick("home")}
              className="hover:text-cosmic-cyan transition duration-300"
            >
              [ HOME ]
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => handleNavClick("about")}
              className="hover:text-cosmic-cyan transition duration-300"
            >
              [ ABOUT ]
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              onClick={() => handleNavClick("services")}
              className="hover:text-cosmic-cyan transition duration-300"
            >
              [ SERVICES ]
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              onClick={() => handleNavClick("projects")}
              className="hover:text-cosmic-cyan transition duration-300"
            >
              [ PROJECTS ]
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={() => handleNavClick("contact")}
              className="hover:text-cosmic-cyan transition duration-300"
            >
              [ CONTACT ]
            </Link>
          </li>
          {/* <li>
            {isLoggedIn ? (
              <Link
                to="/addminm"
                className="text-cosmic-purple hover:text-cosmic-pink transition duration-300"
              >
                [ ADMIN ]
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:text-cosmic-purple transition duration-300"
              >
                [ LOGIN ]
              </Link>
            )}
          </li> */}
        </ul>

        {/* Logout (Desktop) */}
        {isLoggedIn && (
          <div className="hidden md:block font-mono text-sm">
            <Logout />
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cosmic-cyan transition focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glassmorphism-dark border-b border-white/10 flex flex-col items-center py-6 space-y-4 md:hidden animate-fade-in font-mono text-sm">
          <Link
            to="/#home"
            className="hover:text-cosmic-cyan py-1"
            onClick={() => handleNavClick("home")}
          >
            [ HOME ]
          </Link>
          <Link
            to="/#about"
            className="hover:text-cosmic-cyan py-1"
            onClick={() => handleNavClick("about")}
          >
            [ ABOUT ]
          </Link>
          <Link
            to="/#services"
            className="hover:text-cosmic-cyan py-1"
            onClick={() => handleNavClick("services")}
          >
            [ SERVICES ]
          </Link>
          <Link
            to="/#projects"
            className="hover:text-cosmic-cyan py-1"
            onClick={() => handleNavClick("projects")}
          >
            [ PROJECTS ]
          </Link>
          <Link
            to="/#contact"
            className="hover:text-cosmic-cyan py-1"
            onClick={() => handleNavClick("contact")}
          >
            [ CONTACT ]
          </Link>
          {/* {isLoggedIn ? (
            <>
              <Link
                to="/addminm"
                className="text-cosmic-purple py-1"
                onClick={() => setIsOpen(false)}
              >
                [ ADMIN ]
              </Link>
              <div className="w-2/3 flex justify-center py-1">
                <Logout />
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="hover:text-cosmic-purple py-1"
              onClick={() => setIsOpen(false)}
            >
              [ ADMIN LOGIN ]
            </Link>
          )} */}
        </div>
      )}
    </nav>
  );
}

