export const saveNote = (notes) => {
  try {
    const serializedNote = JSON.stringify(notes);
    localStorage.setItem("notes", serializedNote);
  } catch (err) {
    console.error("Could not save node", err);
  }
};

export const loadNote = () => {
  try {
    const serializedNote = localStorage.getItem("notes");
    return serializedNote ? JSON.parse(serializedNote) : [];
  } catch (err) {
    console.error("Could not save node", err);
  }
};
