/*Lectura y manejo de la variable tipo de comparación*/
var urlParams = new URLSearchParams(window.location.search);
let typeOfComparison = urlParams.get("compare");
console.log(typeOfComparison);

let movieSearch1 = "";
let movieSearch2 = "";

document.getElementById("compareButton").addEventListener("click", () => {
  movieSearch1 = document.getElementById("movieSearch1").value;
  movieSearch2 = document.getElementById("movieSearch2").value;
  console.log(movieSearch1);
  console.log(movieSearch2);
  listadoPeliculas(movieSearch1, typeOfComparison);
  listadoPeliculas(movieSearch2, typeOfComparison);
});
