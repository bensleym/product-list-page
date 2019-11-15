import React, { Component } from "react";
import FormControl from "./FormControl";
import Rules from "./../../data/Rules";

class Form extends Component {
  state = { firstName: "", lastName: "", email: "", phone: "", password: "" };
  componentDidMount() {
    this.handleInputError();
  }

  handleSubmit() {
    event.preventDefault();
    new FormControl();
    console.log("submit");
  }

  handleChange = () => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  rulesChecker(id, value) {
    for (let i = 0; i < Rules.length; i += 1) {
      if (id === Rules[i].id) {
        const pattern = new RegExp(Rules[i].rule);
        const ruleError = {
          testRes: pattern.test(value),
          message: Rules[i].message
        };
        return ruleError;
      }
    }
  }

  displayErrorMessage(input, valid, el) {
    if (valid.testRes) {
      input.setAttribute("data-required", "false");
      input.classList.remove("form__input--error");
      return (el.innerHTML = "");
    } else {
      input.setAttribute("data-required", "true");
      if (!input.value) {
        input.classList.add("form__input--error");
        return (el.innerHTML = `*Required`);
      }
      input.classList.add("form__input--error");
      return (el.innerHTML = `${valid.message}`);
    }
  }

  handleInputError() {
    const textInput = document.querySelectorAll("[data-form-control]");
    for (let i = 0; i < textInput.length; i += 1) {
      const inputId = textInput[i].id;
      const inputErrorDom = document.querySelector(
        `[data-form-error=${inputId}]`
      );
      textInput[i].addEventListener("blur", () => {
        const rulesValid = this.rulesChecker(
          textInput[i].id,
          textInput[i].value
        );

        this.displayErrorMessage(textInput[i], rulesValid, inputErrorDom);
      });
    }
  }

  render() {
    const { firstName, lastName, email, phone, password } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span id="formSuccess" className="form__success form__success--hide">
          The form was submitted Successfully
        </span>
        <label
          htmlFor="firstName"
          className="form__label form__label--required"
        >
          Name
        </label>
        <input
          id="firstName"
          className="form__input"
          type="text"
          data-required="true"
          data-form-control
          value={firstName}
          onChange={this.handleChange}
        ></input>
        <span className="form__error" data-form-error="firstName"></span>

        <label htmlFor="lastName" className="form__label form__label--required">
          Surname
        </label>
        <input
          id="lastName"
          className="form__input"
          type="text"
          data-required="true"
          data-form-control
          value={lastName}
          onChange={this.handleChange}
        ></input>
        <span className="form__error" data-form-error="lastName"></span>

        <label htmlFor="email" className="form__label form__label--required">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="text"
          data-required="true"
          data-form-control
          value={email}
          onChange={this.handleChange}
        ></input>
        <span className="form__error" data-form-error="email"></span>

        <label htmlFor="phone" className="form__label form__label--required">
          Phone Number
        </label>
        <input
          id="phone"
          className="form__input"
          type="text"
          data-required="true"
          data-form-control
          value={phone}
          onChange={this.handleChange}
        ></input>
        <span className="form__error" data-form-error="phone"></span>

        <label htmlFor="password" className="form__label form__label--required">
          Password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          data-required="true"
          data-form-control
          value={password}
          onChange={this.handleChange}
        ></input>
        <span className="form__error" data-form-error="password"></span>

        <button className="form__submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
