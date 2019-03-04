import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
