import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import Toolbar from "./components/Toolbar";

const TodoApp = ({
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
  uniqueId,

  changeFIlter,
  filterValue,
  filterItems
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
      <List
        todos={todos}
        filterValue={filterValue}
        onChange={handleItemClick}
        filterItems={filterItems}
      />

      <br />
      <Input
        newItemText={newItemText}
        onNewItemTextChange={onNewItemTextChange}
        onItemAdded={onItemAdded}
      />
      <br />
      <Toolbar changeFIlter={changeFIlter} />
      <p>{todos.length} has left</p>
    </div>
  );
};

export default TodoApp;
