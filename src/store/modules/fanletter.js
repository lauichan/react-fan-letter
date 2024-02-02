import { fanLetters } from "static/data";

const ADD_FANLETTER = "fanletter/ADD_FANLETTER";
const DELETE_FANLETTER = "fanletter/DELETE_FANLETTER";
const UPDATE_FANLETTER = "fanletter/UPDATE_FANLETTER";

const initialState = JSON.parse(localStorage.getItem("fanletters")) || fanLetters;

export const addFanLetter = (payload) => {
  return { type: ADD_FANLETTER, payload };
};

export const updateFanLetter = (payload) => {
  return { type: UPDATE_FANLETTER, payload };
};

export const deleteFanLetter = (payload) => {
  return { type: DELETE_FANLETTER, payload };
};

const fanletter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FANLETTER:
      localStorage.setItem("fanletters", JSON.stringify([...state, { ...action.payload }]));
      return [...state, action.payload];

    case DELETE_FANLETTER:
      const deleted = state.filter((letter) => letter.id !== action.payload);
      localStorage.setItem("fanletters", JSON.stringify(deleted));
      return deleted;

    case UPDATE_FANLETTER:
      const updated = state.map((letter) =>
        letter.id === action.payload.id ? action.payload : letter
      );
      localStorage.setItem("fanletters", JSON.stringify(updated));
      return updated;

    default:
      return state;
  }
};

export default fanletter;
