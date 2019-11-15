import React, { Component } from "react";
import Form from "./Form";

class MainContent extends Component {
  render() {
    return (
      <main className="main-content">
        <section className="main-content__content">
          <Form />
        </section>
      </main>
    );
  }
}

export default MainContent;
