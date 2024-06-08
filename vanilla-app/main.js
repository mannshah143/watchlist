const movieInput = document.querySelector(".movie-input");
const movieButton = document.querySelector(".movie-button");
const movieList = document.querySelector(".movie-list");
const crossButton = document.querySelector(".cross-btn");

document.addEventListener("DOMContentLoaded", getMovies);
movieButton.addEventListener("click", addMovie);

function addMovie(e) {
  e.preventDefault();
  movieInput.value = movieInput.value.trim();
  if (movieInput.value) {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const newMovie = document.createElement("li");
    newMovie.innerText = movieInput.value;
    newMovie.classList.add("movie-item");
    movieDiv.appendChild(newMovie);

    saveLocalMovies(movieInput.value);

    const crossButton = document.createElement("button");
    crossButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
    crossButton.classList.add("cross-btn");
    movieDiv.appendChild(crossButton);
    crossButton.addEventListener("click", deleteMovie);

    movieList.appendChild(movieDiv);
  }

  movieInput.value = "";
}

function deleteMovie(e) {
  const movie = e.target.parentElement;
  movie.remove();
  removeLocalMovies(movie);
}

function saveLocalMovies(movie) {
  const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
  existingMovies.push(movie);
  localStorage.setItem("movies", JSON.stringify(existingMovies));
}

function getMovies() {
  const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
  existingMovies.forEach(function (movie) {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const newMovie = document.createElement("li");
    newMovie.innerText = movie;

    newMovie.classList.add("movie-item");
    movieDiv.appendChild(newMovie);

    const crossButton = document.createElement("button");
    crossButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
    crossButton.classList.add("cross-btn");
    movieDiv.appendChild(crossButton);
    crossButton.addEventListener("click", deleteMovie);

    movieList.appendChild(movieDiv);
  });
}

function removeLocalMovies(movie) {
  const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const idx = movie.children[0].innerText;
  existingMovies.splice(existingMovies.indexOf(idx), 1);
  localStorage.setItem("movies", JSON.stringify(existingMovies));
}
