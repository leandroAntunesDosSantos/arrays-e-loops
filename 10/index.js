const numeros = [8, 11, 4, 1];

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

for (let numero of numeros) {
  if (numero < menorNumero) {
    menorNumero = numero;
  }
}

const diferençaEntreMaioEMenor = maiorNumero - menorNumero;
console.log(diferençaEntreMaioEMenor);
