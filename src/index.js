import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

import "./styles.css";

class App extends React.Component {
  state = {
    todos: [],
    checkedtodos: [],
    newItemText: "",
    oldItems: [],
    uniqueId: 0,
    active: [],
    checkedItems: [],
    all: true,
    allItems: [],
    uniqueIds: []
  };

  remove = (array, element) => {
    array.splice(element, 1);
  };

  gatherNew = (todos, element) => {
    return todos.filter(todo => {
      return todo.value !== element;
    });
  };

  findWithProp = (array, attr, value) => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  };

  handleItemSelection = value => {
    const updatedTodos = [...this.state.todos];
    const updatedAll = [...this.state.allItems];

    let theTodo = this.findWithProp(updatedTodos, "value", +value);
    const isDone = this.state.todos[theTodo].done;
    const { active, checkedItems, todos } = this.state;

    updatedTodos[theTodo] = {
      ...updatedTodos[theTodo],
      done: !isDone
    };

    updatedAll[theTodo] = {
      ...updatedAll[theTodo],
      done: !isDone
    };

    if (!isDone) {
      checkedItems.push(updatedTodos[theTodo]);
      this.remove(active, theTodo);
    } else {
      this.remove(checkedItems, theTodo);
      active.push(updatedTodos[theTodo]);
    }

    this.setState({
      todos: updatedTodos,
      checkedItems,
      active,
      allItems: updatedAll
    });
  };

  handleItemAdded = () => {
    let {
      active,
      uniqueId,
      todos,
      newItemText,
      allItems,
      uniqueIds
    } = this.state;

    uniqueId = uniqueId + Math.floor(Math.random() * 100);

    if (newItemText) {
      let newTodo = {
        value: uniqueId,
        text: newItemText,
        done: false
      };

      this.setState(({ uniqueIds }) => {
        return {
          todos: [...todos, newTodo],
          newItemText: "",
          uniqueIds: [...uniqueIds, uniqueId],
          uniqueId: uniqueId,
          active: [...active, newTodo],
          allItems: [...allItems, newTodo]
        };
      });
    }
  };

  handleNewItemTextChange = text => {
    this.setState({
      newItemText: text
    });
  };

  handleItemsArchive = () => {
    this.setState(({ active }) => {
      return {
        todos: active
      };
    });
  };

  handleAll = () => {
    this.setState(({ checkedItems, active }) => {
      return {
        todos: [...checkedItems, ...active]
      };
    });
  };

  handleActive = () => {
    this.setState(({ active }) => {
      return {
        todos: active
      };
    });
  };

  handleCompleted = () => {
    this.setState(({ checkedItems }) => {
      return {
        todos: checkedItems
      };
    });
  };

  handleCleanCompleted = () => {
    this.setState(({ active }) => {
      return {
        todos: active,
        checkedItems: []
      };
    });
  };

  render() {
    const { uniqueId, todos, newItemText } = this.state;

    return (
      <div className="App">
        <Todo
          newItemText={newItemText}
          todos={todos}
          uniqueId={uniqueId}
          onItemSelected={this.handleItemSelection}
          onItemAdded={this.handleItemAdded}
          onItemsArchive={this.handleItemsArchive}
          onNewItemTextChange={this.handleNewItemTextChange}
          onItemsAll={this.handleAll}
          onItemsActive={this.handleActive}
          onItemsCompleted={this.handleCompleted}
          onCleanCompleted={this.handleCleanCompleted}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
