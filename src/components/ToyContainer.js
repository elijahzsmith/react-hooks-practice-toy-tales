import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysList, setToysList }) {

const eachToy = toysList.map(toy => (
  <ToyCard key={toy.id} toy={toy} toysList={toysList} setToysList={setToysList}/>
))

  return (
    <div id="toy-collection">
      {eachToy}
      </div>
  );
}

export default ToyContainer;
