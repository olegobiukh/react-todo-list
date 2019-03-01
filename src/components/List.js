import React from "react";

const filterItems = (items, filterValue) => {
  if (filterValue === "all") {
    return items;
  } else if (filterValue === "active") {
    return items.filter(item => {
      return item.done === false;
    });
  } else if (filterValue === "completed") {
    return items.filter(item => {
      return item.done;
    });
  }
};

const List = ({ todos, filterValue, onChange, archiveItems }) => {
  const items = filterItems(todos, filterValue);
  const itemsArr =
    filterValue === "archived" ? archiveItems : !items ? todos : items;

  return (
    <div className="Todo__list">
      {itemsArr.map(item => (
        <label
          key={item.id}
          className={
            item.done
              ? "Todo__Item-checked checkbox-custom-label"
              : "checkbox-custom-label"
          }
        >
          <input
            className="checkbox-custom"
            type="checkbox"
            checked={item.done}
            onChange={() => onChange(item.id)}
          />
          <span className="check" />
          {item.text}
        </label>
      ))}
    </div>
  );
};

export default List;
