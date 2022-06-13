const compra = ["Carne", "Ketchup", "Mayonesa", "Pan con semillas", "Leche"];

console.log('Una variable que contenga la lista de la compra (mínimo 5 elementos): ' + compra.join(', ') + '\n')

compra.push("Aceite de Girasol");
console.log('Modifica la lista de la compra y añádele "Aceite de Girasol": ' + compra.join(', ') + '\n')

compra.pop("Aceite de Girasol");
console.log('Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol": ' + compra.join(', ') + '\n')

const peliculas = [
  {
    titulo: "Mi vecino Totoro",
    director: "Hayao Miyazaki",
    fecha: new Date(2009, 10, 30),
  },
  {
    titulo: "Esperando la carroza",
    director: "Alejandro Doria",
    fecha: new Date(1985, 5, 6),
  },
  {
    titulo: "Dark Phoenix",
    director: "Simon Kinberg",
    fecha: new Date(2019, 6, 7),
  },
];

console.log("Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha): ")
console.table(peliculas)

const peliPost2010 = peliculas.filter(
  pelicula => pelicula.fecha > new Date(2010, 1, 1)
);

const directores = peliculas.map((pelicula) => {
  return ' ' +pelicula.director;
});

const titulos = peliculas.map((pelicula) => {
  return ' ' + pelicula.titulo;
});

const directoresMasTitulos = directores.concat(titulos);

const dirsTitsProps = [...directores, ...titulos];


console.log('Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)": ' + peliPost2010.map(pelicula => pelicula.titulo) + '\n')

console.log('Una nueva lista que contenga los directores de la lista de películas original (utilizando map): ' + directores + '\n')

console.log('Una nueva lista que contenga los títulos de la lista de películas original (utilizando map): ' + titulos + '\n')

console.log('Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat): ' + directoresMasTitulos + '\n')

console.log('Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación): ' + dirsTitsProps + '\n')


