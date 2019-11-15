import React from "react";
import { render } from "react-dom";
import Header from "../src/js/header/Header";
import Footer from "../src/js/footer/Footer";
import MainContent from "../src/js/mainContent/MainContent";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <MainContent />
      <Footer />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
