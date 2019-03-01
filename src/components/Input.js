import React from "react";

const Input = ({ newItemText, onNewItemTextChange, onItemAdded }) => (
  <>
    <input
      type="text"
      className="Todo__input"
      value={newItemText}
      onChange={event => {
        onNewItemTextChange(event.target.value);
      }}
      defaultChecked
    />
    <button className="Todo__add-button btn" onClick={() => onItemAdded()}>
      Add
    </button>
  </>
);

export default Input;
