const findWithProp = (array, attr, id) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][attr] === id) {
      return i;
    }
  }
  return -1;
};

const findWithPropForArchive = (array, attr, id) => {
  let arr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][attr] === id) {
      arr.push(i);
    }
  }
  return arr ? arr : null;
};

export { findWithProp, findWithPropForArchive };
