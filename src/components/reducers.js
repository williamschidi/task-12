import { loadNote } from "./localStorage";

const initialState = {
  notes: loadNote(),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, text: action.payload.newText }
            : note
        ),
      };

    case "TOGGLE_CHECK":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload
            ? { ...note, isChecked: !note.isChecked }
            : note
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
