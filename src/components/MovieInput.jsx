import React, { useState } from "react";
import { addMovie } from "../features/movieSlice";
import { useDispatch } from "react-redux";

function MovieInput() {
  const [newMovie, setNewMovie] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewMovie(e.target.value)}
        value={newMovie}
        className="border-4 border-amber-600 rounded-xl"
      />
      <button
        onClick={handleAddMovie}
        className="bg-blue-600 p-1 rounded-xl text-amber-50 cursor-pointer"
      >
        Add Movie
      </button>
    </div>
  );
}

export default MovieInput;
