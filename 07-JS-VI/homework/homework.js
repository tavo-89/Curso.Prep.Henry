// Do not change any of the function names

//La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
//ej: Recibe "mario" ----> Devuelve "Mario"
//Tu código:
function mayuscula(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1)
}

// Invoca al callback `cb`
//Tu código:
function invocarCallback(cb) {
  return cb()
}

//Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
//Devolver el callback pasándole como argumentos los números recibidos.
//Tu código:
function operacionMatematica(n1, n2, cb) {
  return cb(n1,n2)
}

// Suma todos los números enteros (int/integers) de un array ("numeros")
// Pasa el resultado a `cb`
// No es necesario devolver nada
//Tu código:
function sumarArray(numeros, cb) {
  let suma = 0
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
  }
  cb(suma)
}

// Itera sobre la matriz "array" y pasa los valores al callback uno por uno
// Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
//Tu código:
function forEach(array, cb) {
  array.forEach((e)=>{
    cb(e)
  })
}

// Crea un nuevo array
// Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
// El nuevo array debe tener la misma longitud que el array del argumento
//Tu código:
function map(array, cb) {
  let nuevoArray = array.map((e)=>{
    return cb(e)
  })
  return nuevoArray
}

//Filtrar todos los elementos del array que comiencen con la letra "a".
//Devolver un nuevo array con los elementos que cumplen la condición
//Tu código:
function filter(array) {
  let nuevo = []
  array.forEach((e)=>{
    if(e[0]==='a'){
      nuevo.push(e)
    }
  })
  return nuevo
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
