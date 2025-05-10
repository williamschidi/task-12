import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, updateNote, toggleCheck } from "./actions";
import Note from "./Note";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;

  @media (max-width: 750px) {
    gap: 1.5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 80%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify: center;
  }
`;

const Input = styled.input`
  padding: 0.7rem 1.4rem;
  width: 80%;
  margin-right: 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  @media (max-width: 500px) {
    padding: 0.6rem 1rem;
  }
`;
const Button = styled.button`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  width: 10rem;
  font-weight: bold;
  background: linear-gradient(to right, #495057, #adb5bd);
  color: #fff;
  border: 0.1rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  box-shadow: 0 0.2rem 0.3rem #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgb(74, 82, 90);
    color: #fff;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.6rem;
  }
`;

const List = styled.ol`
  font-size: 1.6rem;
  align-self: flex-start;
  padding: 0 3rem;
  width: 100%;
  @media (max-width: 600px) {
  }
`;

const H2 = styled.h2`
  margin: 4rem 0 3rem 0;
  @media (max-width: 750px) {
    margin: 2rem 0 1rem 0;
  }
  @media (max-width: 600px) {
    margin: 1.4rem 0 0.8rem 0;
    font-size: 1.8rem;
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.4rem;
  max-width: 60rem;
  @media (max-width: 750px) {
  }
`;

const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

const NotePad = () => {
  const [inputValue, setInputValue] = useState("");
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== "") {
      dispatch(
        addNote({
          id: Date.now(),
          text: inputValue,
          isChecked: false,
        })
      );
    }
    setInputValue("");
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleUpdateNote = (id, newText) => {
    dispatch(updateNote(id, newText));
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Add Your To-Does"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddNote}>Add To-Do</Button>
      </InputContainer>
      <List>
        <H2>My To-Do items</H2>
        {notes.map((note) => (
          <Li key={note.id}>
            <Checkbox
              type="checkbox"
              checked={note.isChecked}
              onChange={() => dispatch(toggleCheck(note.id))}
            />
            <Note
              note={note}
              onDelete={handleDeleteNote}
              onSave={handleUpdateNote}
            />
          </Li>
        ))}
      </List>
    </Container>
  );
};

export default NotePad;
