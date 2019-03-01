import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import "./styles.css";

class App extends React.Component {
  state = {
    todos: [],
    archiveItems: [],
    newItemText: "",
    uniqueId: 0,
    filterValue: ""
  };

  findWithProp = (array, attr, id) => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === id) {
        return i;
      }
    }
    return -1;
  };

  handleItemSelection = id => {
    const updatedTodos = [...this.state.todos];

    let theTodo = this.findWithProp(updatedTodos, "id", +id);
    const isDone = this.state.todos[theTodo].done;

    updatedTodos[theTodo] = {
      ...updatedTodos[theTodo],
      done: !isDone
    };

    this.setState({
      todos: updatedTodos
    });
  };

  handleItemAdded = () => {
    let { uniqueId, newItemText } = this.state;

    uniqueId += Math.floor(Math.random() * 100);

    if (newItemText) {
      let newTodo = {
        id: uniqueId,
        text: newItemText,
        done: false
      };

      this.setState(({ todos }) => {
        return {
          todos: [...todos, newTodo],
          newItemText: "",
          uniqueId: uniqueId
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
    const { todos } = this.state;
    const newArchivedItems = todos.filter(item => {
      return item.done === true;
    });

    const newItems = todos.filter(item => {
      return item.done === false;
    });

    this.setState(({ archiveItems }) => {
      return {
        todos: newItems,
        archiveItems: [...archiveItems, ...newArchivedItems]
      };
    });
  };

  handleFIlterChange = filterValue => {
    this.setState({ filterValue });
  };

  handleCleanArchive = () => {
    this.setState({
      archiveItems: []
    });
  };

  render() {
    const {
      uniqueId,
      todos,
      archiveItems,
      newItemText,
      filterValue
    } = this.state;

    return (
      <div className="App">
        <TodoApp
          todos={todos}
          archiveItems={archiveItems}
          newItemText={newItemText}
          onItemSelected={this.handleItemSelection}
          onItemAdded={this.handleItemAdded}
          onNewItemTextChange={this.handleNewItemTextChange}
          onItemsArchive={this.handleItemsArchive}
          onCleanArchived={this.handleCleanArchive}
          uniqueId={uniqueId}
          changeFIlter={this.handleFIlterChange}
          filterValue={filterValue}
          filterItems={this.handleFilterItems}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
