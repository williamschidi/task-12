import React, { useState } from "react";
import styled from "styled-components";
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

function setting() {
  const [settings, setSettings] = useState({
    bold: false,
    italic: false,
    underline: false,
    fontSize: 16,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : parseInt(value, 10),
    }));
  }

  return (
    <div>
      <CheckBoxContainer>
        <LabelContainer>
          <Label>
            <input
              name="bold"
              type="checkbox"
              checked={settings.bold}
              onChange={handleChange}
            />
            Bold
          </Label>
          <Label>
            <input
              type="checkbox"
              name="italic"
              checked={italic}
              onChange={handleChange}
            />
            Italic
          </Label>
          <Label>
            <input
              name="underline"
              type="checkbox"
              checked={underline}
              onChange={handleChange}
            />
            Underline
          </Label>
        </LabelContainer>
        <Label>
          Font Size:
          <select value={fontSize} onChange={handleChange}>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
          </select>
        </Label>
      </CheckBoxContainer>
    </div>
  );
}

export default setting;
