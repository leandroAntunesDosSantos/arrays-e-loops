const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let novoArrayNumeros = [];

for (let item of numeros) {
  if (item % 2 === 0) {
    novoArrayNumeros.push(item);
  }
}

//console.log(novoArrayNumeros);

let somaNovoArrayNumeros = 0;

for (let item of novoArrayNumeros) {
  somaNovoArrayNumeros = somaNovoArrayNumeros + item;
}

console.log(somaNovoArrayNumeros);
