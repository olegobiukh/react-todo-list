import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Toolbar from "./components/Toolbar";
import randomstring from "randomstring";
import { findWithProp, findWithPropForArchive } from "./findWithProp";

class TodoApp extends Component {
  state = {
    todos: [],
    newItemText: "",
    filterValue: ""
  };

  handleItemSelection = id => {
    const updatedTodos = [...this.state.todos];

    let theTodo = findWithProp(updatedTodos, "id", id);

    const isDone = this.state.todos[theTodo].done;

    updatedTodos[theTodo] = {
      ...updatedTodos[theTodo],
      done: !isDone
    };

    this.setState({
      todos: updatedTodos
    });
  };

  handleItemAdded = event => {
    event.preventDefault();

    let { newItemText } = this.state;

    const uniqueId = randomstring.generate(7);

    if (newItemText) {
      let newTodo = {
        id: uniqueId,
        text: newItemText,
        done: false,
        archived: false
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
    const updatedTodos = [...this.state.todos];

    let theTodos = findWithPropForArchive(updatedTodos, "done", true);

    theTodos.map(
      theTodo =>
        (updatedTodos[theTodo] = {
          ...updatedTodos[theTodo],
          archived: true
        })
    );

    this.setState({
      todos: updatedTodos
    });
  };

  handleFIlterChange = filterValue => {
    this.setState({ filterValue });
  };

  handleCleanArchive = () => {
    const updatedTodos = [...this.state.todos];
    const todosWithoutArchived = updatedTodos.filter(item => {
      return !item.archived;
    });

    this.setState({
      todos: todosWithoutArchived
    });
  };

  handleItemsLeft = items => {
    const itemsLeft = items.filter(item => {
      return item.done === false;
    });
    return itemsLeft.length;
  };

  render() {
    const { todos, newItemText, filterValue } = this.state;
    return (
      <div className="Todo">
        <div className="Todo-center">
          <h2 className="Todo__title">My Todo</h2>
          <button
            className="Todo__archive-button btn"
            onClick={() => this.handleItemsArchive()}
          >
            Archive
          </button>
        </div>
        <List
          todos={todos}
          filterValue={filterValue}
          onChange={this.handleItemSelection}
          filterItems={this.handleFilterItems}
        />
        <div className="Todo-center">
          <Input
            newItemText={newItemText}
            onNewItemTextChange={this.handleNewItemTextChange}
            onItemAdded={this.handleItemAdded}
          />
          <Toolbar
            changeFIlter={this.handleFIlterChange}
            onCleanArchived={this.handleCleanArchive}
          />

          <p className="Todo__items-left">
            {this.handleItemsLeft(todos)} has left
          </p>
        </div>
      </div>
    );
  }
}

export default TodoApp;
