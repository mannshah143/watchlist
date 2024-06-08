import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const movieText = useRef(null);

  useEffect(() => {
    const existingMovies = localStorage.getItem("movies");
    setMovies(existingMovies ? JSON.parse(existingMovies) : []);
  }, []);

  function addMovie(e) {
    e.preventDefault();
    const newMovie = movieText.current.value.trim();
    if (newMovie) {
      const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
    }
    movieText.current.value = "";
  }

  function deleteMovie(movie) {
    const updatedMovies = movies.filter((m) => m !== movie);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  }

  return (
    <>
      <header>
        <p id="p1" className="roboto-regular">
          Your Watchlist
        </p>
      </header>

      <p id="p2" className="roboto-thin">
        Your Watchlist is the place to track the titles you want to watch.
      </p>

      <form>
        <input
          className="movie-input roboto-thin"
          type="text"
          ref={movieText}
        />
        <button className="movie-button" type="submit" onClick={addMovie}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>

      <div className="movie-container">
        <ul className="movie-list">
          {movies.map((movie) => (
            <div className="movie">
              <li className="movie-item">{movie}</li>
              <button className="cross-btn" onClick={() => deleteMovie(movie)}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
