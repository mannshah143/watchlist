<script>
  import { onMount } from "svelte";

  let movies = [];
  let movieText = "";

  $: if (movies.length) localStorage.setItem("movies", JSON.stringify(movies));

  onMount(() => {
    const existingMovies = localStorage.getItem("movies");
    movies = JSON.parse(existingMovies) || [];
  });

  function addMovie() {
    movieText = movieText.trim();
    if (movieText) {
      movies = [...movies, movieText];
    }
    movieText = "";
  }

  function deleteMovie(movie) {
    movies = movies.filter((m) => m !== movie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }
</script>

<main>
  <header>
    <p id="p1" class="roboto-regular">Your Watchlist</p>
  </header>

  <p id="p2" class="roboto-thin">
    Your Watchlist is the place to track the titles you want to watch.
  </p>

  <form>
    <input class="movie-input roboto-thin" type="text" bind:value={movieText} />
    <button
      class="movie-button"
      type="submit"
      on:click|preventDefault={addMovie}
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </form>

  <div class="movie-container">
    <ul class="movie-list">
      {#each movies as movie}
        <div class="movie">
          <li class="movie-item">
            {movie}
          </li>
          <button class="cross-btn" on:click={() => deleteMovie(movie)}>
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
      {/each}
    </ul>
  </div>
</main>