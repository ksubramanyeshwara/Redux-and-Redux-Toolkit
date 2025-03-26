import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      name: "KGF",
    },
    {
      id: 2,
      name: "Bahubali",
    },
  ],
};

const movieSlice = createSlice({
  name: "Movie",
  initialState,
  // reducers here is used to tell that what to do when the state changes
  reducers: {
    // state is the current state of the application/ the state of the movies array
    // action is the action that was dispatched/happened
    // since reducers are pure functions, they do not modify the state directly, but instead return a new state object
    addMovie: (state, action) => {
      const newMovie = {
        id:
          state.movies.length > 0
            ? state.movies[state.movies.length - 1].id + 1
            : 1,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
