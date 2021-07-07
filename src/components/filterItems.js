const filterItems = (items, filterValue) => {
  filterValue = filterValue || "all";

  switch (filterValue) {
    case "all":
      return items.filter(item => {
        return !item.archived;
      });
    case "active":
      return items.filter(item => {
        return item.done === false;
      });
    case "completed":
      return items.filter(item => {
        return item.done && !item.archived;
      });
    case "archived":
      return items.filter(item => {
        return item.archived;
      });
  }
};

export default filterItems;
