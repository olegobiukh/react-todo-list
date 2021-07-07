import React from "react";

const Input = ({ newItemText, onNewItemTextChange, onItemAdded }) => (
  <>
    <form onSubmit={event => onItemAdded(event)}>
      <input
        type="text"
        className="Todo__input"
        value={newItemText}
        onChange={event => {
          onNewItemTextChange(event.target.value);
        }}
        defaultChecked
      />
      <button
        className="Todo__add-button btn"
        onClick={event => onItemAdded(event)}
      >
        Add
      </button>
    </form>
  </>
);

export default Input;
