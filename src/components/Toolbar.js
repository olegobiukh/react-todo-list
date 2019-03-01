import React from "react";

const Toolbar = ({ changeFIlter, onCleanArchived }) => (
  <div>
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
    <button
      className="Todo__archived-button btn"
      onClick={() => changeFIlter("archived")}
    >
      Archived
    </button>
    <button
      className="Todo__clean-button btn"
      onClick={() => onCleanArchived()}
    >
      Clean archived
    </button>
  </div>
);

export default Toolbar;
