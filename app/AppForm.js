import React from "react";
import { render } from "react-dom";
import Header from "../src/js/header/header";
import Footer from "../src/js/footer/Footer";
import MainContent from "../src/js/form/MainContent";

const AppForm = () => {
  return (
    <React.StrictMode>
      <Header page="form" />
      <MainContent />
      <Footer page="form" />
    </React.StrictMode>
  );
};

render(<AppForm />, document.getElementById("root"));
