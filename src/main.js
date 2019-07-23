function listadoPeliculas(buscar) {
  fetch(`http://www.omdbapi.com/?apikey=3f6e7988&s=${buscar}&page=1`)
    .then(success => {
      return success.json();
    })
    .then(movies => {
      console.log(movies);
      movies.Search.forEach(e => mostrarDetallePelicula(e.imdbID));
    })
    .catch(error => {
      console.log(error);
    });
}

function mostrarDetallePelicula(id) {
  fetch(`https://yts.lt/api/v2/list_movies.json?minimun_rating=8`)
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

mostrarDetallePelicula("happy");
