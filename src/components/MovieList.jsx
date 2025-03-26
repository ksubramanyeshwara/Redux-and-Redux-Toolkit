import React from "react";
// used to get data from state
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../features/movieSlice";

function MovieList() {
  // state is the current state of the application
  // state.moviesLists.movies here moviesLists is the name of the slice and movies is the name of the reducer
  const movies = useSelector((state) => state.moviesLists.movies);

  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div className="flex flex-col items-center">
      <h1>movieList</h1>
      {movies.map((movie) => (
        <div
          className="w-40 m-2 p-3 rounded-2xl bg-cyan-500 text-amber-50"
          key={movie.id}
        >
          {movie.name}
          <button
            onClick={() => handleRemoveMovie(movie.id)}
            className="ml-8 cursor-pointer"
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
