import React from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error.jsx";
import { CSSTransition } from "react-transition-group";
import fadeStyles from "./css/fade.module.css";
import errorFadeStyles from "./css/errorFadeStyles.module.css";
import "./App.css";
import { connect } from "react-redux";

const App = ({ filter, contacts, showError }) => {
  return (
    <div className="App">
      <CSSTransition
        in={showError}
        timeout={250}
        classNames={errorFadeStyles}
        unmountOnExit
      >
        <Error />
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={400}
        classNames={fadeStyles}
        unmountOnExit
      >
        <h1 className="main-title">PhoneBook</h1>
      </CSSTransition>
      <ContactForm />

      <CSSTransition
        in={contacts && contacts.length > 0}
        appear={true}
        timeout={400}
        classNames={fadeStyles}
        unmountOnExit
      >
        <section>
          <h2>Contacts</h2>

          <CSSTransition
            in={contacts && contacts.length > 1}
            appear={true}
            timeout={400}
            classNames={fadeStyles}
            unmountOnExit
          >
            <Filter value={filter} />
          </CSSTransition>

          <CSSTransition
            in={contacts.length === 0}
            appear={true}
            timeout={400}
            classNames={fadeStyles}
            unmountOnExit
          >
            <p>no results were found for your search</p>
          </CSSTransition>

          <ContactList contacts={contacts} />
        </section>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.phoneBook.contacts,
    showError: state.phoneBook.showError,
  };
};

export default connect(mapStateToProps, null)(App);
