import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_DIRECTORS_QUERY = gql`
  {
    directors {
      name
      id
    }
  }
`;

const AddMovie = () => {
  const { loading, data, error } = useQuery(GET_DIRECTORS_QUERY);

  const renderDirectors = () => {
    if (loading) return <option disbled>Loading...</option>;
    if (error) return <option disbled>Something went wrong!</option>;
    return data.directors.map((director) => (
      <option key={director.id}>{director.name}</option>
    ));
  };
  return (
    <form>
      <div>
        <label htmlFor="movie-name">Movie Name:</label>
        <input id="movie-name" name="movie-name" type="text" />
      </div>
      <div>
        <label htmlFor="gemre">Genre:</label>
        <input id="gemre" name="gemre" type="text" />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
        <select id="director" name="director">
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
