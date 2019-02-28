import React from "react";

const List = ({ todos, filterValue, filterItems, onChange }) => {
  const items = filterItems(todos, filterValue);

  items.map(item => (
    <label>
      <input type="checkbox" onChange={() => onChange(item.id)} />
      {item.value}
    </label>
  ));
};

export default List;
