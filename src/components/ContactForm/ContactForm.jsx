import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { addContact} from '../../redux/phoneBook/phoneBookActions'

const ContactForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [number,setNumber] = useState('')

  const nameChangeHandler = (e) => setName(e.target.value)
  const numberChangeHandler =(e)=>setNumber(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addContact(name,number))
    setName('');
    setNumber('')
  }
  

  return (
      <form onSubmit={submitHandler} className={`${styles.phoneBookForm} basic`}>
        <label htmlFor="formName" className={styles.formLabel}> 
          Name
          <input
            className={styles.formInput}
            required
            id="formName"
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </label>
        <label htmlFor="formNumber" className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            id="formNumber"
            type="number"
            name="number"
            value={number}
            required
            onChange={numberChangeHandler}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func,
  };

export default ContactForm;
