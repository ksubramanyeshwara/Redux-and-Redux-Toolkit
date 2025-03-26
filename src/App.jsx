import "./style.css";
import MovieList from "./components/movieList";
import MovieInput from "./components/MovieInput";

function App() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1>Movie Input</h1>
      <MovieInput />
      <MovieList />
    </div>
  );
}

export default App;
