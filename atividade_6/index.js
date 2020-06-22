// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nome1 = rs.question("Qual o seu nome?\n")
let nome2 = rs.question("E o do seu parceiro?\n");

let numCaracteres1 = rs.question(nome1 + ", digite qualquer coisa\n");
let numCaracteres2 = rs.question(nome2 + ", digite qualquer coisa\n");

resultado1 = numCaracteres1.length;
resultado2 = numCaracteres2.length;

console.log("========================================\n")
console.log(nome1 + ", voce digitou um total de " + resultado1 + " caracteres\n")
console.log(nome2 + ", voce digitou um total de " + resultado2 + " caracteres\n")

console.log("========================================")
if (resultado1 > resultado2){
    console.log("Parabens " + nome1 + ", voce digitou mais caracteres")
} else {
    console.log("Parabens " + nome2 + ", voce digitou mais caracteres")
}
console.log("========================================")
