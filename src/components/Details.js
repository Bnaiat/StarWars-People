import React from "react";

function Details({ details, setDetails }) {
  const backHandler = () => {
    setDetails("");
  };

  return (
    <div className="details_wrapper">
      <h3>Name: {details.result.properties.name}</h3>
      <h3>Birth Year: {details.result.properties.birth_year}</h3>
      <h3>Gender: {details.result.properties.gender}</h3>
      <h3>Height: {details.result.properties.height}</h3>
      <h3>Mass: {details.result.properties.mass}</h3>
      <h3>Hair Color: {details.result.properties.hair_color}</h3>
      <h3>Skin Color: {details.result.properties.skin_color}</h3>
      <h3>Eye Color: {details.result.properties.eye_color}</h3>
      <h3>Created: {details.result.properties.created}</h3>
      <h3>Edited: {details.result.properties.edited}</h3>

      <button onClick={backHandler}>Back</button>
    </div>
  );
}

export default Details;
