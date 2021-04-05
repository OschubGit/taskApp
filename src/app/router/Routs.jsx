import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import Lists from "../../components/Lists";
import Layout from "../../containers/Layout";

const Routs = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default Routs;
