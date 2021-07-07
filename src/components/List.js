import React from "react";
import filterItems from "./filterItems";

const List = ({ todos, filterValue, onChange }) => {
  const items = filterItems(todos, filterValue);
  const itemsArr = !items ? [] : items;

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
