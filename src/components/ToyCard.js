import React, { useState } from "react";

function ToyCard({ toysList, toy, setToysList }) {
  const [likes, setLikes] = useState(toy.likes);

  const onDelete = (toy) => {
    const updatedToyList = toysList.filter((thisToy) => thisToy.id !== toy.id);
    setToysList(updatedToyList);
  };

  const handleDelete = () => {
    console.log(toy);
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(toy));
  };

  const handleLike = () => {
    const likeObj = { ...toy, likes: likes + 1 };
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likeObj),
    })
      .then((res) => res.json())
      .then((data) => {
        const toysAfterLike = toysList.map((toy) =>
          toy.id === data.id ? data : toy
        );
        setLikes(likes + 1);
        setToysList(toysAfterLike);
      });
  };

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
