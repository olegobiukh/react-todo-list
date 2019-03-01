import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import Toolbar from "./components/Toolbar";

const TodoApp = ({
  todos,
  newItemText,
  onItemSelected,
  onItemAdded,
  onNewItemTextChange,
  onItemsArchive,
  onCleanArchived,
  uniqueId,
  changeFIlter,
  filterValue,
  filterItems,
  archiveItems
}) => {
  const handleItemClick = id => {
    onItemSelected(id);
  };

  const handleItemsLeft = items => {
    const itemsLeft = items.filter(item => {
      return item.done === false;
    });
    return itemsLeft.length;
  };

  return (
    <div className="Todo">
      <div className="Todo-center">
        <h2 className="Todo__title">My Todo</h2>
        <button
          className="Todo__archive-button btn"
          onClick={() => onItemsArchive()}
        >
          Archive
        </button>
      </div>
      <List
        todos={todos}
        archiveItems={archiveItems}
        filterValue={filterValue}
        onChange={handleItemClick}
        filterItems={filterItems}
      />
      <div className="Todo-center">
        <Input
          newItemText={newItemText}
          onNewItemTextChange={onNewItemTextChange}
          onItemAdded={onItemAdded}
        />
        <Toolbar
          changeFIlter={changeFIlter}
          onCleanArchived={onCleanArchived}
        />

        <p className="Todo__items-left">{handleItemsLeft(todos)} has left</p>
      </div>
    </div>
  );
};

export default TodoApp;
