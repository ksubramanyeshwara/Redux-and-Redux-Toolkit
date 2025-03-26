import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";

/*
reducers are functions that specify how the state of your application change in response to an action
reducer function take two arguments: state and action
state is the current state of the application
action is the action that was dispatched/happened
since reducers are pure functions, they do not modify the state directly, but instead return a new state object

since reducers can be big, it is a good practice to create a separate slice file for the reducer
*/

export const store = configureStore({
  reducer: {
    moviesLists: movieReducer,
  },
});
