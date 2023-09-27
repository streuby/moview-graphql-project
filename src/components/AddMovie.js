import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_DIRECTORS_QUERY,
  ADD_MOVIE_MUTATION,
  GET_MOVIES_QUERY,
} from "../Queries/Queries";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [directorID, setDirectorID] = useState("");

  const [addMovie] = useMutation(ADD_MOVIE_MUTATION);
  const { loading, data, error } = useQuery(GET_DIRECTORS_QUERY);

  const renderDirectors = () => {
    if (loading) return <option disabled>Loading...</option>;
    if (error) return <option disabled>Something went wrong!</option>;
    return data.directors.map((director) => (
      <option key={director.id}>{director.name}</option>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({
      variables: { name, genre, directorId: directorID },
      refetchQueries: [{ query: GET_MOVIES_QUERY }],
    });
    console.log(name, genre, directorID);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="movie-name">Movie Name:</label>
        <input
          id="movie-name"
          name="movie-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gemre">Genre:</label>
        <input
          id="gemre"
          name="gemre"
          value={genre}
          type="text"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
        <select
          id="director"
          name="director"
          value={directorID}
          onChange={(e) => setDirectorID(e.target.value)}
        >
          <option>Select a Director</option>
          {renderDirectors()}
        </select>
      </div>
      <div>
        <button type="submit">Add New Movie</button>
      </div>
    </form>
  );
};

export default AddMovie;
