import { v4 as uuidv4 } from "uuid";
import { createReducer, createAction } from "@reduxjs/toolkit";
const initialState = {
  contacts: [],
  filter: "",
  showError: false,
};
export const getContacts = createAction("GET_CONTACTS", (contacts) => ({
  payload: {
    contacts,
  },
}));
export const addContact = createAction("ADD_CONTACT", (name, number) => ({
  payload: {
    contact: { name, number, id: uuidv4() },
    showError: false,
  },
}));
export const deleteContact = createAction("DELETE_CONTACT");
export const changeFilter = createAction("CHANGE_FILTER");
export const toggleError = createAction("TOGGLE_ERROR");

const onGetContacts = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, ...payload.contacts],
});

const onAddContact = (state, { payload }) => {
  const newContact = {
    name: payload.contact.name,
    number: payload.contact.number,
    id: payload.contact.id,
  };
  return {
    ...state,
    contacts: [...state.contacts, newContact],
  };
};

const onDeleteContact = (state, { payload }) => ({
  ...state,
  contacts: state.contacts.filter((contact) => contact.id !== payload),
});

const onChangeFilter = (state, { payload }) => ({
  ...state,
  filter: payload,
});

const onToggleError = (state, { payload }) => ({
  ...state,
  showError: payload,
});

const phoneBookReducers = createReducer(initialState, {
  [getContacts.type]: onGetContacts,
  [addContact.type]: onAddContact,
  [deleteContact.type]: onDeleteContact,
  [changeFilter.type]: onChangeFilter,
  [toggleError.type]: onToggleError,
});

export default phoneBookReducers;
