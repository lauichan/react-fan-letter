import { fanLetters } from "static/data";

const ADD_FANLETTER = "fanletters/ADD_FANLETTER";
const DELETE_FANLETTER = "fanletters/DELETE_FANLETTER";
const UPDATE_FANLETTER = "fanletters/UPDATE_FANLETTER";

const initialState = fanLetters;

export const addFanLetter = (payload) => {
  return {
    type: ADD_FANLETTER,
    payload,
  };
};

export const updateFanLetter = (payload) => {
  return {
    type: UPDATE_FANLETTER,
    payload,
  };
};

export const deleteFanLetter = (payload) => {
  return {
    type: DELETE_FANLETTER,
    payload,
  };
};

const fanletter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FANLETTER:
      return [...state, action.payload];
    case DELETE_FANLETTER:
      return state;
    case UPDATE_FANLETTER:
      return state.map((comment) => (comment.id === action.payload.id ? action.payload : comment));
    default:
      return state.filter((comment) => comment.id !== action.payload);
  }
};

export default fanletter;
