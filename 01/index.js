const numeros = [2, 3, 4, 6];

//****************Utilizando while*************

let indice = 0;

let contador = 0;

while (indice < numeros.length) {
  contador = contador + numeros[indice];
  indice++;
}
console.log(contador);

//************Utilizando for********************

// let contador = 0;

// for (i = 0; i < numeros.length; i++) {
//   contador = contador + numeros[i];
//   //Ou contador += numeros[i]
// }

// console.log(contador);
