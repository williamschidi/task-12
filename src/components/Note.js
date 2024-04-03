import React, { useState } from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid #b3afaf;
`;

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
        <TextContainer>
          <textarea value={editedText} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </TextContainer>
      ) : (
        <TextContainer>
          <div>{note.text}</div>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        </TextContainer>
      )}
    </div>
  );
};

export default Note;
