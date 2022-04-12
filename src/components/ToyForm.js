import React, { useState } from "react";

function ToyForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleNewToy = (e) => {
    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    fetch(`http://localhost:3001/toys/${e.target.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newToy),
    });
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToy}>
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
