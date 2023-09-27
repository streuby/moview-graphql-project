import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MOVIE_QUERY } from "../Queries/Queries";

const MovieDetails = ({ setselectedMovie }) => {
  const { data } = useQuery(GET_MOVIE_QUERY, {
    variables: { id: setselectedMovie },
  });
  const renderMovieDetails = () => {
    const { movie } = data || {};
    if (movie) {
      return (
        <div>
          <h2>{movie.name}</h2>
          <p>{movie.genre}</p>
          <p>Directed By: {movie.director.name}</p>
          <p>ALL movies by this director</p>
          <ul>
            {movie.director.movies.map((m) => (
              <li key={m.id}>{m.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h3>No Movie Selected. Please select a movie</h3>
        </div>
      );
    }
  };
  return <div>{renderMovieDetails()}</div>;
};

export default MovieDetails;
