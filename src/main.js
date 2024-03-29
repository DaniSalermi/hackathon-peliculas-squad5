function listadoPeliculas(title, type) {
  return fetch(
    `https://www.omdbapi.com/?apikey=3f6e7988&s=${title}&type=${type}&page=1`
  )
    .then(success => {
      return success.json();
    })
    .then(movies => {
      return movies;
    })
    .catch(error => {
      console.error(error);
    });
}

function mostrarDetallePelicula(id) {
  return fetch(`https://www.omdbapi.com/?apikey=3f6e7988&i=${id}`)
    .then(success => {
      return success.json();
    })
    .then(movies => {
      return movies;
    })
    .catch(error => {
      console.error(error);
    });
}

function compareRating(movie1, movie2) {
  return parseInt(movie1.imdbRating) > parseInt(movie2.imdbRating) ? 1 : 2;
}
