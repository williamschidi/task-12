import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, updateNote } from './actions';
import Note from './Note';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.7rem 1.8rem;
  width: 47rem;
  margin-right: 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
`;
const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-weight: bold;
  background: #fff;
  color: #212529;
  border: none;
  border-radius: 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background: #eeeaea;
  }
  &:active {
    box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.6);
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
`;

const NotePad = () => {
  const [inputValue, setInputValue] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      dispatch(
        addNote({
          id: Date.now(),
          text: inputValue,
          bold,
          italic,
          underline,
          fontSize,
        })
      );
      setInputValue('');
    }
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleSaveNote = (id, newText) => {
    dispatch(updateNote(id, newText));
  };

  return (
    <Container>
      <InputContainer>
        <div>
          <Input type="text" value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleAddNote}>Add Note</Button>
        </div>

        <CheckBoxContainer>
          <LabelContainer>
            <Label>
              <input
                type="checkbox"
                checked={bold}
                onChange={() => setBold(!bold)}
              />
              Bold
            </Label>
            <Label>
              <input
                type="checkbox"
                checked={italic}
                onChange={() => setItalic(!italic)}
              />
              Italic
            </Label>
            <Label>
              <input
                type="checkbox"
                checked={underline}
                onChange={() => setUnderline(!underline)}
              />
              Underline
            </Label>
          </LabelContainer>
          <Label>
            Font Size:
            <select
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            >
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="24">24</option>
            </select>
          </Label>
        </CheckBoxContainer>
      </InputContainer>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note
              note={note}
              onDelete={handleDeleteNote}
              onSave={handleSaveNote}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default NotePad;
