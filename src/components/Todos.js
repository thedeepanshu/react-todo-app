import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div style={{ padding: "20px 0 100px 0" }}>
      <h5 style={{ textAlign: "center", fontWeight: "bold", margin: "30px 0" }}>
        Todos List
      </h5>
      <div className="container">
        {props.todos.length === 0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  handleDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Todos;
