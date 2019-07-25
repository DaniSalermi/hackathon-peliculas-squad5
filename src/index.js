/*Lectura y manejo de la variable tipo de comparación*/
var urlParams = new URLSearchParams(window.location.search);
let typeOfComparison = urlParams.get("compare");

let movieSearch1 = "";
let movieSearch2 = "";

let movie1;
let movie2;

function createButtons(movies, id) {
  document.getElementById(id).innerHTML = "";
  selectMovie.style.display = "block";
  movieCompare.style.display = "none";
  movie1 = null;
  movie2 = null;
  movies.Search.forEach(movie => {
    let btn = document.createElement("button");
    btn.innerHTML = movie.Title;
    btn.value = movie.imdbID;
    btn.className = "btn btn-sm";
    document.getElementById(id).append(btn);
  });
}

document
  .getElementById("searchMoviesButton")
  .addEventListener("click", async () => {
    movieSearch1 = document.getElementById("movieSearch1").value;
    movieSearch2 = document.getElementById("movieSearch2").value;
    let firstMovieResults = await listadoPeliculas(
      movieSearch1,
      typeOfComparison
    );
    let secondMovieResults = await listadoPeliculas(
      movieSearch2,
      typeOfComparison
    );

    createButtons(firstMovieResults, "nameMovies1");
    createButtons(secondMovieResults, "nameMovies2");
  });

nameMovies1.addEventListener("click", async e => {
  e["srcElement"].className = "btn btn-sm btn-success";
  let id = e["srcElement"].value;
  movie1 = await mostrarDetallePelicula(id);
  console.log(movie1, movie2);
  if (movie1 && movie2) {
    compareRating(movie1, movie2);
    showMovies(movie1, "1");
    showMovies(movie2, "2");
  }
});

nameMovies2.addEventListener("click", async e => {
  e["srcElement"].className = "btn btn-sm btn-success";
  let id = e["srcElement"].value;
  movie2 = await mostrarDetallePelicula(id);
  console.log(movie1, movie2);
  if (movie1 && movie2) {
    compareRating(movie1, movie2);
    showMovies(movie1, "1");
    showMovies(movie2, "2");
    movieCompare.style.display = "block";
    selectMovie.style.display = "none";
  }
});

function showMovies(movie, id) {
  document.getElementById("poster" + id).setAttribute("src", movie.Poster);
  document.getElementById("title" + id).innerText = movie.Title;
  document.getElementById("rating" + id).innerText = movie.imdbRating;
  document.getElementById("genre" + id).innerText = movie.Genre;
  document.getElementById("actors" + id).innerText = movie.Actors;
  document.getElementById("director" + id).innerText = movie.Director;
  document.getElementById("rated" + id).innerText = movie.Rated;
  document.getElementById("duration" + id).innerText = movie.Runtime;
  document.getElementById("release" + id).innerText = movie.Released;
}
