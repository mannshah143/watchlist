<template>
  <div>
    <header>
      <p id="p1" class="roboto-regular">Your Watchlist</p>
    </header>

    <p id="p2" class="roboto-thin">
      Your Watchlist is the place to track the titles you want to watch.
    </p>

    <form>
      <input class="movie-input roboto-thin" type="text" v-model="newMovie" />
      <button class="movie-button" type="submit" v-on:click.prevent="addMovie">
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>

    <div class="movie-container">
      <ul class="movie-list">
        <div v-for="movie in movies" class="movie">
          <li class="movie-item">{{ movie }}</li>
          <button class="cross-btn" v-on:click="deleteMovie(movie)">
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      newMovie: "",
    };
  },

  mounted() {
    const existingMovies = localStorage.getItem("movies");
    this.movies = existingMovies ? JSON.parse(existingMovies) : [];
  },
  methods: {
    addMovie() {
      const newMovie = this.newMovie.trim();
      if (newMovie) {
        this.movies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(this.movies));
      }
      this.newMovie = "";
    },

    deleteMovie(movie) {
      this.movies = this.movies.filter((m) => m !== movie);
      localStorage.setItem("movies", JSON.stringify(this.movies));
    },
  },
};
</script>