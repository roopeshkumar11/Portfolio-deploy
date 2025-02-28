import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-300 shadow-lg px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <p  className="text-2xl font-bold text-gray-300">Roopesh</p>

      {/* Middle - Navigation Menu (Desktop) */}
      <ul className="hidden md:flex gap-x-6">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
    
          
         
          <li><Link to="/" className="hover:text-white">Project</Link></li>
        {/* <li><Link to="/" className="hover:text-white">Service</Link></li> */}
        <li><Link to="/" className="hover:text-white">Resume</Link></li>
        <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
        <li>
  {localStorage.getItem("token") ? (
    <Link to="/addminm" className="hover:text-white">Admin</Link>
  ) : (
    <Link to="/login" className="hover:text-white">Admin Login</Link>
  )}
</li>

      </ul>

     
      {/* <Link to="/" className="hidden md:block btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl">
        Contact Us
      </Link> */}

<p  className=" hidden md:block  btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl">
            <Logout/>
          </p>
    

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-gray-300 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Project</Link>
          {/* <Link to="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Service</Link> */}
          <Link to="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/" className="hover:text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/admin" className="hover:text-white" onClick={() => setIsOpen(false)}>Admin Login</Link>
          {/* <Link to="/" className="btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link> */}

<p  className="btn btn-outline border-gray-300 text-gray-300 hover:bg-gray-700 text-xl">
            <Logout/>
          </p>
        </div>
      )}
    </nav>
  );
}
