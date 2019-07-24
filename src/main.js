function listadoPeliculas(title, type) {
  fetch(
    `http://www.omdbapi.com/?apikey=3f6e7988&s=${title}&type=${type}&page=1`
  )
    .then(success => {
      return success.json();
    })
    .then(movies => {
      console.log(movies);
      // movies.Search.forEach(e => mostrarDetallePelicula(e.imdbID));
    })
    .catch(error => {
      console.log(error);
    });
}

function mostrarDetallePelicula(id) {
  fetch(`http://www.omdbapi.com/?apikey=3f6e7988&i=${id}`)
    .then(success => {
      return success.json();
    })
    .then(movies => {
      console.log(movies);
    })
    .catch(error => {
      console.log(error);
    });
}
