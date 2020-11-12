import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteContact} from '../../../redux/phoneBook/phoneBookActions'

const ContactsListItem = ({ contact: { name, number } , onDeleteContact }) => {


 
  return (
    <li className={`basic`}> 
      <div>
      <p>
        <span>Name:</span> {name} 
      </p>
      <p>
        <span>Number:</span> {number}
      </p>
      </div>
      <button type="button" onClick={ onDeleteContact}>
      </button>
    </li>
  );
};

ContactsListItem.defaultProps = {
  contact: {
    name: "anonymous",
  number: "888888888",
  },
  onDeleteContact: () => {},
};

ContactsListItem.propTypes = {
 contact: PropTypes.object,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = (state, { id }) => ({
    contact: state.phoneBook.contacts.find(contact => contact.id === id)
})

const mapDispatchToProps = (dispatch,ownProps)=> {
  return {
    onDeleteContact: ()=> dispatch(deleteContact(ownProps.id)) 
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactsListItem)

