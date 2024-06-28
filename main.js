// 1. Tabla de multiplicar
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 2. Acumulador de números
let suma = 0;
let input;

do {
  input = parseInt(prompt("Ingrese un número (0 para terminar):"));
  suma += input;
} while (input !== 0);

console.log("La suma total es:", suma);

// 3. Adivinar el número
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza;

do {
  adivinanza = parseInt(prompt("Adivine el número (entre 1 y 100):"));
  intentos++;
  if (adivinanza < numeroSecreto) {
    console.log("El número es mayor.");
  } else if (adivinanza > numeroSecreto) {
    console.log("El número es menor.");
  } else {
    console.log(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
  }
} while (adivinanza !== numeroSecreto);

// 4. Número primo  
let numero = parseInt(prompt("Ingrese un número:"));
let esPrimo = true;

if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

console.log(`El número ${numero} ${esPrimo ? "es primo" : "no es primo"}.`);

// 5. Divisores de un número
let numero = parseInt(prompt("Ingrese un número:"));

console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}

// 6. Recorrer un array y mostrar elementos
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 7. Doble de cada elemento en un array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
}

// 8. Presentación de objetos en un array
let familia = [
    { nombre: "Juan", edad: 35, rol: "Padre", ciudad: "Madrid" },
    { nombre: "Ana", edad: 32, rol: "Madre", ciudad: "Madrid" },
    { nombre: "Carlos", edad: 10, rol: "Hijo", ciudad: "Madrid" },
    { nombre: "Lucia", edad: 7, rol: "Hija", ciudad: "Madrid" },
    { nombre: "Abuela", edad: 70, rol: "Abuela", ciudad: "Madrid" }
  ];
  
  for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy el/la ${persona.rol} y vivo en ${persona.ciudad}.`);
  }

// 9. Mostrar números impares de un array 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}

// 10. Suma de números pares e impares
let sumaPares = 0;
let sumaImpares = 0;
let input;

do {
  input = parseInt(prompt("Ingrese un número (0 para terminar):"));
  if (input % 2 === 0) {
    sumaPares += input;
  } else {
    sumaImpares += input;
  }
} while (input !== 0);

console.log("Suma de números pares:", sumaPares);
console.log("Suma de números impares:", sumaImpares);

// 11. Número más grande en un array
let array = [3, 7, 1, 9, 12, 4, 8, 2, 6, 10];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("El número más grande es:", max);
let array = [3, 7, 1, 9, 12, 4, 8, 2, 6, 10];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("El número más grande es:", max);

// 12. Número más pequeño en un array
let array = [3, 7, 1, 9, 12, 4, 8, 2, 6, 10];
let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log("El número más pequeño es:", min);

// 13. Juego de piedra, papel o tijeras
let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

let mano1, mano2;
let empate = true;

while (empate) {
  mano1 = prompt(`${jugador1}, ingrese su jugada (piedra, papel o tijeras):`).toLowerCase();
  mano2 = prompt(`${jugador2}, ingrese su jugada (piedra, papel o tijeras):`).toLowerCase();

  if (mano1 === mano2) {
    console.log("Empate, jueguen nuevamente.");
  } else if ((mano1 === "piedra" && mano2 === "tijeras") || (mano1 === "tijeras" && mano2 === "papel") || (mano1 === "papel" && mano2 === "piedra")) {
    console.log(`¡${jugador1} gana!`);
    empate = false;
  } else {
    console.log(`¡${jugador2} gana!`);
    empate = false;
  }
}

// 14. Triángulo de 5 asteriscos
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }

// 15. Triángulo invertido de 5 asteriscos
for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
  }

// 16. Array ordenado sin usar sort
let array = [3, 7, 1, 9, 12, 4, 8, 2, 6, 10];
let n = array.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log("Array ordenado:", array);

