const numeros = [54, 22, 14, 87, 10, 284];

let indice = 0;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    indice = i;
  }
}
//console.log(indice);

if (indice === 0) {
  console.log("-1");
} else {
  console.log(indice);
}
