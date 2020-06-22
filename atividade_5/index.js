// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let numCaracteres = rs.question("Digite qualquer coisa\n")

resultado = numCaracteres.length;

console.log("====================================\n")

console.log("Você digitou " + resultado+ " caracteres\n")

console.log("====================================")
