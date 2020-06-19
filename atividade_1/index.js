// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let numVoo = rs.question("Qual o número do seu vôo?\n")

let fileira = rs.question("Em qual fileira você deseja sentar, A, B, C, D ou F? \n")

console.log("________________")
console.log("Cartão de embarque para o vôo de número: "+numVoo)

console.log("Sua fileira será: "+fileira)
console.log("________________")