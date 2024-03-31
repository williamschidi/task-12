// import React from 'react';

// const Note = ({ note, onDelete }) => {
//   return (
//     <div
//       style={{
//         marginBottom: '10px',
//         fontWeight: note.bold ? 'bold' : 'normal',
//         fontStyle: note.italic ? 'italic' : 'normal',
//         textDecoration: note.underline ? 'underline' : 'none',
//         fontSize: `${note.fontSize}px`,
//       }}
//     >
//       <div>{note.text}</div>
//       <button onClick={() => onDelete(note.id)}>Delete</button>
//     </div>
//   );
// };

// export default Note;

import React, { useState } from 'react';

const Note = ({ note, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(note.id, editedText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

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
      {isEditing ? (
        <div>
          <textarea value={editedText} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {note.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Note;
