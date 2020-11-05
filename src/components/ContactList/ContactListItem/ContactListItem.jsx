import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteContact} from '../../../redux/phoneBook/phoneBookActions'

const ContactsListItem = ({ name, number, onDeleteContact }) => {
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
  name: "anonymous",
  number: "888888888",
  onDeleteContact: () => {},
};

ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.phoneBook.contacts.find(contact => contact.id === ownProps.id)
  return {...contact}
  
}

const mapDispatchToProps = (dispatch,ownProps)=> {
  return {
    onDeleteContact: ()=>dispatch(deleteContact(ownProps.id)) 
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactsListItem)


