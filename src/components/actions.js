export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});

export const updateNote = (id, newText) => ({
  type: "UPDATE_NOTE",
  payload: { id, newText },
});

export const toggleCheck = (id) => ({
  type: "TOGGLE_CHECK",
  payload: id,
});
