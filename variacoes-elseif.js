/* 
  Imagine que temos um outro número que vai de 0 a 10.
  Dessa vez esse número representa uma nota de uma prova.
  - Caso a nota seja 10, imprima "A"
  - Caso a nota seja maior que 8, imprima "B"
  - Caso a nota seja maior que 6, imprima "C"
  - Caso a nota seja maior que 4, imprima "D"
  - Caso a nota seja maior que 2, imprima "E"
  - Caso a nota seja menor que 2, imprima "F"
  Porém só queremos que o resultado da maior nota seja impresso.
  Desta forma caso a nota seja 10, somente "A" deverá ser impressso,
  não imprimindo as demais notas abaixo dele.
*/

// Código base para utilizar:
// const nota = Math.floor(Math.random() * 10)

// Crie sua solução abaixo:

let nota = 5;

if (nota => 10) {
    console.log("A");
} else if (nota => 8) {
    console.log("B");
} else if (nota => 6) {
    console.log("C");
} else if (nota => 4) {
    console.log("D");
} else if (nota => 2) {
    console.log("E");
} else if (nota < 2) {
    console.log("F");
} else {false}
