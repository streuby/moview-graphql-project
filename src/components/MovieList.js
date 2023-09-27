import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MOVIES_QUERY } from "../Queries/Queries";
import MovieDetails from "./MovieDetails";

const MovieList = () => {
  const [setselectedMovie, setSetselectedMovie] = useState(null);
  const { loading, data, error } = useQuery(GET_MOVIES_QUERY);
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (loading) return <p>Loading....</p>;
  const renderMovies = () => {
    return data.movies.map((movie) => (
      <li key={movie.id} onClick={(e) => setSetselectedMovie(movie.id)}>
        {movie.name} - {movie.genre}
      </li>
    ));
  };
  return (
    <div>
      <ul>{renderMovies()}</ul>
      <MovieDetails setselectedMovie={setselectedMovie} />
    </div>
  );
};

export default MovieList;
