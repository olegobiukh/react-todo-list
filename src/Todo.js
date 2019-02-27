import React from "react";

const Todo = ({
  todos,
  newItemText,
  children,
  onItemSelected,
  onItemAdded,
  onNewItemTextChange,
  onItemsArchive,
  onItemsAll,
  onItemsActive,
  onItemsCompleted,
  onCleanCompleted,
  uniqueId
}) => {
  const handleItemClick = value => {
    onItemSelected(value);
  };

  return (
    <div className="Todo">
      <h2 className="Todo__title">My Todo</h2>
      <button
        className="Todo__archive-button btn"
        onClick={() => onItemsArchive()}
      >
        Archive
      </button>
      <br />
      <ul className="Todo__list">
        {todos.map(todo => (
          <Todo.Item
            key={todo.value}
            value={todo.value}
            done={todo.done}
            onClick={() => handleItemClick(todo.value)}
          >
            {todo.text}
          </Todo.Item>
        ))}
      </ul>
      <br />
      <input
        type="text"
        defaultChecked
        className="Todo__new-item-text"
        value={newItemText}
        onChange={event => {
          onNewItemTextChange(event.target.value);
        }}
      />

      <button className="Todo__add-button btn" onClick={() => onItemAdded()}>
        Add
      </button>
      <br />
      <button className="Todo__all-button btn" onClick={() => onItemsAll()}>
        All
      </button>
      <button
        className="Todo__active-button btn"
        onClick={() => onItemsActive()}
      >
        Active
      </button>
      <button
        className="Todo__completed-button btn"
        onClick={() => onItemsCompleted()}
      >
        Completed
      </button>
      <br />
      <button
        className="Todo__clean-button btn"
        onClick={() => onCleanCompleted()}
      >
        Clean completed
      </button>
      <p>{todos.length} has left</p>
    </div>
  );
};

Todo.Item = ({ value, children, done, onClick }) => {
  return (
    <li onClick={() => onClick(value)}>
      <input type="checkbox" className="checkbox-custom" checked={done} />
      <label className={"checkbox-custom-label"}>{children}</label>
    </li>
  );
};

export default Todo;
