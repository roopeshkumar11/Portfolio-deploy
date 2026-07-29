import React from "react";
import axios from "axios";


const Logout = () => {


  const handleLogout = async () => {
    try {
     
      await axios.post("https://portfoliobackend-92m1.onrender.com/api/admin/logout");

     
      localStorage.removeItem("token");

    
      delete axios.defaults.headers.common["Authorization"];

    
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600/15 border border-red-500/30 hover:bg-red-600/20 text-red-400 hover:text-red-300 font-bold rounded-xl transition duration-300 uppercase tracking-widest text-[11px] font-mono whitespace-nowrap cursor-pointer"
    >
      [ LOGOUT ]
    </button>
  );
};

export default Logout;
