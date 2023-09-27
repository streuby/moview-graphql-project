import { gql } from "@apollo/client";

export const GET_DIRECTORS_QUERY = gql`
  {
    directors {
      name
      id
    }
  }
`;

export const GET_MOVIES_QUERY = gql`
  {
    movies {
      name
      genre
      id
    }
  }
`;

export const GET_MOVIE_QUERY = gql`
  query ($id: ID) {
    movie(id: $id) {
      id
      name
      genre
      director {
        id
        name
        age
        movies {
          name
          id
        }
      }
    }
  }
`;

export const ADD_MOVIE_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      id
    }
  }
`;
