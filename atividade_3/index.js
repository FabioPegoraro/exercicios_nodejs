// ## Importe a biblioteca ##
let rs= require ("readline-sync")


// ## Faça o código ##

let nome = rs.question("Ola, qual o seu nome?\n")

let base = rs.question(nome+", qual a medida da base do quadrado?\n")

let altura = rs.question("Qual a medida da altura do quadrado?\n")

let area = base*altura

console.log("====================================")

console.log(nome+", a area do quadrado é "+area)

console.log("====================================")
