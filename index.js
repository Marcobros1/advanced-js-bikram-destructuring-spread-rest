//1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Destructuración por posiciones: el hueco [ , ana] salta el primer elemento (Luis)
// y ana queda con el objeto completo { name: "Ana", email: "Ana@gmail.com" }.
const [ , ana] = empleados;

console.log("1. Objeto completo de Ana (saltando a Luis con el hueco [ , ana]):", ana);

//2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

// Desestructuramos el PRIMER empleado y renombramos su propiedad en el mismo paso:
// la sintaxis email: emailLuis guarda directamente el string 'Luis@gmail.com'.
const [{ email: emailLuis }] = empleados;

console.log("2. Email de Luis extraído con renombrado (email: emailLuis):", emailLuis);

//3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

/*
// Al final
let a = 3;
let b = 5;
*/

// Swap clásico con destructuración: [a, b] = [b, a] intercambia los valores en una
// sola línea, sin necesidad de una variable auxiliar.
[a,b] = [b,a];

console.log("3. Tras el swap [a, b] = [b, a], a = " + a + " y b = " + b);

//4.- Dado el objeto HIGH_TEMPERATURES, cambiar las siguientes líneas para guardar mediante
//    destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

/*
// Líneas a cambiar (sustitúyelas por destructuración):
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/

// Renombrado al desestructurar: la propiedad today se guarda en maximaHoy (35) y
// tomorrow en maximaManana (32), sin tocar el objeto original.
const {
  today: maximaHoy,
  tomorrow: maximaManana
} = HIGH_TEMPERATURES;

console.log("4. Máxima de hoy (propiedad today):", maximaHoy);
console.log("4. Máxima de mañana (propiedad tomorrow):", maximaManana);

//5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
/*
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
*/

// Rest (...numeros) convierte los argumentos sueltos en un array con todos ellos,
// así la función suma cualquier cantidad de números pase los que pase.
function sumEveryOther(...numeros) {
  let suma = 0;

  for (const numero of numeros) {
    suma += numero;
  }

  return suma;
}

console.log("5. sumEveryOther(6, 8, 2, 3, 1) = 6+8+2+3+1:", sumEveryOther(6, 8, 2, 3, 1));
console.log("5. sumEveryOther(11, 3, 12) = 11+3+12:", sumEveryOther(11, 3, 12));

//6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
/*
addOnlyNums(1, "perro", 2, 4); //7
*/

// Mismo esquema que la anterior, pero filtrando por tipo: solo se suma cuando
// typeof numero === 'number', de modo que los strings ("perro") se ignoran.
function addOnlyNums(...numeros) {
  let suma = 0;
  for (const numero of numeros) {
    if (typeof numero === 'number') suma += numero;
  }
  return suma;
}

console.log("6. addOnlyNums(1, 'perro', 2, 4) — suma solo los números, ignora 'perro':", addOnlyNums(1, "perro", 2, 4));

//7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
/*
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
*/

// Rest (...args) deja los argumentos recibidos como array; recorremos ese array
// contando uno a uno hasta devolver el total.
function countTheArgs(...args){
  let counter = 0;
    for (const indice of args) {
      counter ++;
    }
  return counter;
}

console.log("7. countTheArgs('gato', 'perro') devuelve:", countTheArgs("gato", "perro"));
console.log("7. countTheArgs('gato', 'perro', 'pollo', 'oso') devuelve:", countTheArgs("gato", "perro", "pollo", "oso"));

//8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

// Spread: ...arr1 y ...arr2 vuelcan los elementos de cada array dentro del nuevo.
// En vez de quedar [[1,2],[3,4]] (arrays anidados), queda [1, 2, 3, 4] concatenado.
function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log("8. combineTwoArrays([1, 2], [3, 4]) — un solo array concatenado:", combineTwoArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

//9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
/*
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
*/

// includes comprueba si el valor ya está en el array de resultado: solo se añade
// la primera aparición de cada elemento, y así no quedan repetidos.
function onlyUniques(...args) {
  const unique = [];

  for (const elemento of args) {
    if (!unique.includes(elemento)) {
      unique.push(elemento);
    }
  }

  return unique;
}

console.log("9. onlyUniques('gato', 'pollo', 'cerdo', 'cerdo') — sin repetidos:", onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log("9. onlyUniques(1, 1, 2, 2, 3, 6, 7, 8) — sin repetidos:", onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

//10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
/*
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
*/

// Rest recibe los N arrays como un array de arrays, y el spread dentro de push
// vuelca los elementos de cada uno en el acumulador finalArray.
function combineAllArrays(...arrays) {
  const finalArray = [];
  for (const array of arrays) {
    finalArray.push(...array);
  }
  return finalArray;
}

console.log("10. combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) — 2 arrays combinados:", combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log("10. combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]) — 3 arrays combinados:", combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

//11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

// Rest + operador de potencia: cada argumento se eleva al cuadrado y se acumula
// en la suma (sumAndSquare(5, 10) -> 25 + 100 = 125).
function sumAndSquare(...args){
  let suma = 0;
  for (const numero of args) {
    suma += numero ** 2;
  }
  return suma;
}

console.log("11. sumAndSquare(5, 10) = 5² + 10²:", sumAndSquare(5, 10));
