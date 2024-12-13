import React from "react";
import movies from "../components/movies";
import "../components/cardsComp.css"

function CardsComp() {
  return (
    <div className="cards-container">
      {movies.map((movie) => (
        <div key={movie.id} className="card-comp">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Language: {movie.language}</p>
          <p>Price: {movie.cost}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsComp;
