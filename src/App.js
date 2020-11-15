import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { getContacts } from "./redux/phoneBook/phoneBookActions";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error.jsx";
import fadeStyles from "./css/fade.module.css";
import errorFadeStyles from "./css/errorFadeStyles.module.css";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(({ phoneBook }) => phoneBook.contacts);
  const filter = useSelector(({ phoneBook }) => phoneBook.filter);
  const showError = useSelector(({ phoneBook }) => phoneBook.showError);

  useEffect(() => {
    if (localStorage.getItem("contacts") !== null) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      dispatch(getContacts(contacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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

export default App;
