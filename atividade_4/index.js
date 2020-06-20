// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nome = rs.question("Qual o seu nome?\n")

let mes = rs.question("Qual mes voce nasceu?(usar numeros) \n")

let dia = rs.question("Qual o dia em que voce nasceu?\n")

console.log("============================================")
if (mes == 1){
    if (dia <= 20){
    console.log(nome+", seu signo é Capricornio")
    } else {
    console.log(nome+", seu signo é Aquario")
    }
}    
else if (mes == 2){
    if (dia <= 18){
    console.log(nome+", seu signo é Aquario")
    } else {
    console.log(nome+", seu signo é Peixes")
    }
}
else if (mes == 3){
    if (dia <= 20){
    console.log(nome+", seu signo é Peixes")
    } else {
    console.log(nome+", seu signo é Aries")
    }
}
else if (mes == 4){
    if (dia <= 20){
    console.log(nome+", seu signo é Aries")
    } else {
    console.log(nome+", seu signo é Touro")
    }
}
else if (mes == 5){
    if (dia <= 20){
    console.log(nome+", seu signo é Touro")
    } else {
    console.log(nome+", seu signo é Gemeos")
    }
}
else if (mes == 6){
    if (dia <= 20){
    console.log(nome+", seu signo é Gemeos")
    } else {
    console.log(nome+", seu signo é Cancer")
    }
}
else if (mes == 7){
    if (dia <= 22){
    console.log(nome+", seu signo é Cancer")
    } else {
    console.log(nome+", seu signo é Leao")
    }
}
else if (mes == 8){
    if (dia <= 22){
    console.log(nome+", seu signo é Leao")
    } else {
    console.log(nome+", seu signo é Virgem")
    }
}
else if (mes == 9){
    if (dia <= 22){
    console.log(nome+", seu signo é Virgem")
    } else {
    console.log(nome+", seu signo é Libra")
    }
}
else if (mes == 10){
    if (dia <= 22){
    console.log(nome+", seu signo é Libra")
    } else {
    console.log(nome+", seu signo é Escorpiao")
    }
}
else if (mes == 11){
    if (dia <= 21){
    console.log(nome+", seu signo é Escorpiao")
    } else {
    console.log(nome+", seu signo é Sagitario")
    }
}
else if (mes == 12){
    if (dia <= 21){
    console.log(nome+", seu signo é Sagitario")
    } else {
    console.log(nome+", seu signo é Capricornio")
    }
}
console.log("============================================")