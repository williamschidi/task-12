import { createStore } from "redux";
import rootReducer from "./reducers";
import { saveNote } from "./localStorage";

const store = createStore(rootReducer);

store.subscribe(() => {
  const notes = store.getState().notes;
  saveNote(notes);
});

export default store;
