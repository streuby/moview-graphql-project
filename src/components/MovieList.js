import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES_QUERY = gql`
  {
    movies {
      name
      genre
      id
    }
  }
`;

const MovieList = () => {
  const { loading, data, error } = useQuery(GET_MOVIES_QUERY);
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (loading) return <p>Loading....</p>;
  const renderMovies = () => {
    return data.movies.map((movie) => (
      <li key={movie.id}>
        {movie.name} - {movie.genre}
      </li>
    ));
  };
  return (
    <div>
      <ul>{renderMovies()}</ul>
    </div>
  );
};

export default MovieList;
