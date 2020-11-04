import React from "react";
import ContactsListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import styles from './ContactList.module.css'
import { connect } from "react-redux";
import {deleteContact} from '../../redux/phoneBook/phoneBookActions'

const ContactList = ({ contacts, onDeleteContact }) => {
 
  return <TransitionGroup component='ul' className={`${styles.contactList} `}>
        {contacts.map(({ id, name, number }) => (
              <CSSTransition  key={id}
              timeout={250}
              classNames={styles}>
                <ContactsListItem
                  name={name}
                  number={number}
                  onDeleteContact={() => onDeleteContact(id)}
                />
              </CSSTransition>
    )
  )}
        </TransitionGroup>;
};

const mapStateToProps = (state) => {
  return {
    contacts: state.phoneBook.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.phoneBook.filter.toLowerCase())
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onDeleteContact: (id)=>dispatch(deleteContact(id)) 
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



export default connect(mapStateToProps,mapDispatchToProps)(ContactList)


