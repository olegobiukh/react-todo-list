import React from "react";

const Toolbar = ({ changeFIlter }) => (
  <>
    <button
      className="Todo__all-button btn"
      onClick={() => changeFIlter("all")}
    >
      All
    </button>
    <button
      className="Todo__active-button btn"
      onClick={() => changeFIlter("active")}
    >
      Active
    </button>
    <button
      className="Todo__completed-button btn"
      onClick={() => changeFIlter("completed")}
    >
      Completed
    </button>
    <br />
    <button
      className="Todo__clean-button btn"
      onClick={() => changeFIlter("clean")}
    >
      Clean completed
    </button>
  </>
);

export default Toolbar;
