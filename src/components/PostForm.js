import React, { useState } from "react";

export const PostForm = ({ addPost, isLoading }) => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    if (!title.trim() && !body.trim()) {
      alert("Please, fill all fields");
      return;
    }

    let userId = Math.ceil(Math.random() * 100);
    let data = {
      title,
      body,
      userId
    };
    addPost(data);
    setTitle("");
    setBody("");
  };

  return (
    <div className="d-flex mb-4 flex-column">
      <div className="mb-4 h2">Add post</div>
      <form onSubmit={event => handleSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={title}
            className="form-control"
            placeholder="Title"
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="body"
            value={body}
            className="form-control"
            placeholder="Body"
            onChange={event => setBody(event.target.value)}
          />
        </div>
        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
