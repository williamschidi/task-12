import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0;
  border-bottom: 0.1rem solid #b3afaf;
`;

const Input = styled.input`
  width: 40rem;
  padding: 0.3rem 0.7rem;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  &:focus {
    background: transparent;
    color: #fff;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 0 0 2rem;
`;

const Btn = styled.button`
  padding: 0.4rem 1rem;
  color: #fff;
  background: transparent;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  transition: all 0.3s;
  &:hover {
    background: rgb(74, 82, 90);
    color: #fff;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    padding: 0.3rem 0.7rem;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
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
    <Container>
      {isEditing ? (
        <TextContainer>
          <Input type="text" value={editedText} onChange={handleInputChange} />
          <Btn onClick={handleSave}>Save</Btn>
        </TextContainer>
      ) : (
        <TextContainer>
          <Text
            style={{
              textDecoration: note.isChecked ? "line-through" : "none",
            }}
          >
            {note.text}
          </Text>
          <BtnContainer>
            <Btn onClick={handleEdit}>Edit</Btn>
            <Btn onClick={() => onDelete(note.id)}>Delete</Btn>
          </BtnContainer>
        </TextContainer>
      )}
    </Container>
  );
};

export default Note;
