import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (title[0] == null || desc[0] == null) {
      alert("Title or desc cannot be blank");
    } else {
      props.addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Add New To-Do's</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            style={{ width: "100%", margin: "10px 0 20px 0" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
            style={{ width: "100%", margin: "10px 0 25px 0" }}
          />
        </div>
        <button type="btn" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
