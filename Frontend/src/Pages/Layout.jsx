import React from "react";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div className="p-5">{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
