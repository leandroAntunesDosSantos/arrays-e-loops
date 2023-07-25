const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let novoArrayNome = [];

for (let nome of nomes) {
  if (nome[0] === "a" || nome[0] === "A") {
    novoArrayNome.push(nome);
  }
}

console.log(novoArrayNome);
