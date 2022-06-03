// No cambies los nombres de las funciones.

// Devuelve el primer elemento de un array
// Tu código:
function devolverPrimerElemento(array) {
  return array.shift(array)
}


// Devuelve el último elemento de un array
// Tu código:
function devolverUltimoElemento(array) {
  return array.pop(array)
}


// Devuelve el largo de un array
// Tu código:
function obtenerLargoDelArray(array) {
  return array.length
}


// "array" debe ser una matriz de enteros (int/integers)
// Aumenta cada entero por 1
// y devuelve el array
// Tu código:
function incrementarPorUno(array) {
  let resultado = []
  array.filter((e) => {
    if (Number.isInteger(e))
      resultado.push(e)
  })
  let entero = []
  resultado.forEach((e) => {
    e = e + 1
    entero.push(e)
  })
  return entero
}


// Añade el "elemento" al final del array
// y devuelve el array
// Tu código:
function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento)
  return array
}


// Añade el "elemento" al comienzo del array
// y devuelve el array
// Pista: usa el método `.unshift`
// Tu código:
function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  return array
}


// "palabras" es un array de strings/cadenas
// Devuelve un string donde todas las palabras estén concatenadas
// con espacios entre cada palabra
// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
// Tu código:
function dePalabrasAFrase(palabras) {
  return palabras.join(' ')
}


// Comprueba si el elemento existe dentro de "array"
// Devuelve "true" si está, o "false" si no está
// Tu código:
function arrayContiene(array, elemento) {
  return array.includes(elemento) ? true : false;
}


// "numeros" debe ser un arreglo de enteros (int/integers)
// Suma todos los enteros y devuelve el valor
// Tu código:
function agregarNumeros(numeros) {
  let total = numeros.reduce((a, b) => a + b);
  return total
}


// "resultadosTest" debe ser una matriz de enteros (int/integers)
// Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
// Tu código:
function promedioResultadosTest(resultadosTest) {
  let suma = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  let promedio = suma / resultadosTest.length;
  return promedio

}


// "numeros" debe ser una matriz de enteros (int/integers)
// Devuelve el número más grande
// Tu código:
function numeroMasGrande(numeros) {
  return Math.max(...numeros)
}


// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí:
function multiplicarArgumentos() {
  let arg = Array.from(arguments)
  let resultado = 0

  if (arg == 0) {
    return 0
  } else {
    return resultado = arg.reduce((a, b) => a * b)
  }
}


//Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
//Escribe tu código aquí
function cuentoElementos(arreglo) {
  let mayor18 = []
  arreglo.map((e) => {
    e > 18 ? mayor18.push(e) : null
  })
  return mayor18.length


}


//Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
//Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
//Escribe tu código aquí 
function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia == 2 || numeroDeDia == 3 || numeroDeDia == 4 || numeroDeDia == 5 || numeroDeDia == 6) {
    return 'Es dia Laboral'
  } else {
    return 'Es fin de semana'
  }


}


//Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//inicia con 9 y false en otro caso.
//Escribe tu código aquí
function empiezaConNueve(n) {
  let array = [...n + ''].map(num => +num)

  if (array[0] == 9) {
    return true
  } else {
    return false
  }
}


//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//retornar true, caso contrario retornar false.
//Escribe tu código aquí  
function todosIguales(arreglo) {
  return arreglo.every((e) => arreglo[0] == e)

}


//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
// Tu código:
function mesesDelAño(array) {
  let meses = []
  if (array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre')) {
    array.forEach((e) => {
      if (e == 'Enero' || e == 'Marzo' || e == 'Noviembre') {
        meses.push(e)
      }
    })
    return meses
  } else {
    return 'No se encontraron los meses pedidos'
  }


}


//La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
//valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
// Tu código:
function mayorACien(array) {
  let newArr = []
  array.forEach((e) => {
    if (e > 100) {
      newArr.push(e)
    }
  })
  return newArr
}


//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array. 
//Devolver el array
//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
//devolver: "Se interrumpió la ejecución"
//Pista: usá el statement 'break'
// Tu código:
function breakStatement(numero) {
  let array = [];
  let suma = numero;
  for (var i = 1; i <= 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return array;
  }

}


//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array.    
//Devolver el array
//Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
//Pista: usá el statement 'continue'
// Tu código:
function continueStatement(numero) {

  let i = 1;
  let newArray = [];
  do {
    numero += 2;
    newArray.push(numero);
    i++;
    if(numero === 5) {
      continue;
    }
  }
  while(i < 10);

  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
