import React from "react";
import Footer from "../components/Footer";
import Records from "../components/Recorders";
import Lists from "../components/Lists";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__list">
        <Lists />
      </div>
      <div className="layout__main">
        <Main />
      </div>
      <div className="layout__recorders">
        <Records />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
