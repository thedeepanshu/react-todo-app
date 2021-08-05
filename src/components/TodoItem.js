import React, { useState } from "react";

const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);
  const handleCompletedTodo = () => {
    setCompleted(true);
  };
  const cutLines = completed
    ? { textDecoration: "line-through", opacity: "0.4" }
    : { textDecoration: "none", opacity: "1" };
  return (
    <div>
      <h2
        className="mt-5 mb-3"
        id={completed ? "cutlines" : ""}
        style={cutLines}
      >
        {props.todo.title}
      </h2>
      <p id={completed ? "cutlines" : ""} style={cutLines}>
        {props.todo.description}
      </p>
      <button className="btn btn-sm btn-primary" onClick={handleCompletedTodo}>
        Completed
      </button>
      <button
        className="btn mx-2 btn-sm btn-danger"
        onClick={() => {
          props.handleDelete(props.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
