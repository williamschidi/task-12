import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from './actions';
import Note from './Note';

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

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Add Note</button>
      <div>
        <label>
          <input
            type="checkbox"
            checked={bold}
            onChange={() => setBold(!bold)}
          />
          Bold
        </label>
        <label>
          <input
            type="checkbox"
            checked={italic}
            onChange={() => setItalic(!italic)}
          />
          Italic
        </label>
        <label>
          <input
            type="checkbox"
            checked={underline}
            onChange={() => setUnderline(!underline)}
          />
          Underline
        </label>
        <label>
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
        </label>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onDelete={handleDeleteNote} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotePad;
