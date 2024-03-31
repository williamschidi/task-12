import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div
      style={{
        marginBottom: '10px',
        fontWeight: note.bold ? 'bold' : 'normal',
        fontStyle: note.italic ? 'italic' : 'normal',
        textDecoration: note.underline ? 'underline' : 'none',
        fontSize: `${note.fontSize}px`,
      }}
    >
      <div>{note.text}</div>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
