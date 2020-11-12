import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  TOGGLE_ERROR,
} from "./phoneBookActionsTypes";

const initialState = {
  contacts: [],
  filter: "",
  showError: false,
};

const phoneBookReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContact = {
        name: payload.contact.name,
        number: payload.contact.number,
        id: payload.contact.id,
      };
      if (
        state.contacts &&
        state.contacts.some((contact) => contact.name === payload.contact.name)
      ) {
        return {
          ...state,
          showError: !payload.showError,
        };
      } else {
        return {
          ...state,
          showError: payload.showError,
          contacts: [...state.contacts, newContact],
        };
      }

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload.id),
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.filter,
      };

    case TOGGLE_ERROR:
      return {
        ...state,
        showError: payload.showError,
      };

    default:
      return state;
  }
};

export default phoneBookReducers;
