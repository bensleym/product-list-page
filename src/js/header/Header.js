import React from "react";

const Header = ({ page }) => {
  if (page === "form") {
    return (
      <header className="header">
        <h1 className="header__title">
          Envoy{" "}
          <span className="header__title--sub-title">Form validation</span>
        </h1>
      </header>
    );
  }
  return (
    <header className="header">
      <h1 className="header__title">
        Envoy <span className="header__title--sub-title">Shop A Lot</span>
      </h1>
    </header>
  );
};

export default Header;
