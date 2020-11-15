import { v4 as uuidv4 } from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  TOGGLE_ERROR,
  GET_CONTACTS,
} from "./phoneBookActionsTypes";

export const getContacts = (contacts) => {
  return {
    type: GET_CONTACTS,
    payload: {
      contacts,
    },
  };
};

export const addContact = (name, number) => {
  return {
    type: ADD_CONTACT,
    payload: {
      contact: { name, number, id: uuidv4() },
      showError: false,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};

export const toggleError = (showError) => {
  return {
    type: TOGGLE_ERROR,
    payload: {
      showError,
    },
  };
};
