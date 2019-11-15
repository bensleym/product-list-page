import React from "react";

const Footer = ({ page }) => {
  if (page === "form") {
    return (
      <footer className="footer">
        <p className="footer__text">Form validation</p>
      </footer>
    );
  }
  return (
    <footer className="footer">
      <p className="footer__text">PLP - product listing page</p>
    </footer>
  );
};

export default Footer;
