const letras = ["A", "a", "B", "C", "E", "e"]; //enunciado

let contador = 0;

for (let letra of letras) {
  if (letra === "E" || letra === "e") {
    contador = contador + 1;
  }
}

//console.log(contador);

if (contador === 0) {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada." =(`);
} else {
  console.log(`Foram encontradas ${contador} letras "E" ou "e". xD`);
}
