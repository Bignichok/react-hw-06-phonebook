import React from "react";
import { connect } from "react-redux";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import PropTypes from "prop-types";

import ContactsListItem from "./ContactListItem/ContactListItem";

import styles from './ContactList.module.css'



const ContactList = ({ contacts }) => {
 
  return <TransitionGroup component='ul' className={`${styles.contactList} `}>
        {contacts.map(({ id }) => (
              <CSSTransition  key={id}
              timeout={250}
              classNames={styles}>
            <ContactsListItem id={id}/>
              </CSSTransition>
    )
  )}
        </TransitionGroup>;
};


const mapStateToProps = (state) => {
  const { contacts, filter } = state.phoneBook
  const lowerCaseFilter = filter.toLowerCase()
  return {
    contacts: contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    )
  }
}

ContactList.defaultProps = {
  contacts: [],
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps,null)(ContactList)

