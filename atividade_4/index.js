// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nome = rs.question("Qual o seu nome?\n")

let mes = rs.questionInt("Qual mes voce nasceu?(usar numeros)\n")

let dia = rs.questionInt("Qual o dia em que voce nasceu?\n")

console.log("============================================")

switch (mes) {
    case 1: 
        dia >= 21 ? console.log(nome + ", seu signo é Aquario") : console.log(nome + ", seu signo é Capricornio");
    break;
    case 2:
        dia >= 19 ? console.log(nome + ", seu signo é Peixes") : console.log(nome + ", seu signo é Aquario");
    break;
    case 3: 
        dia >= 21 ? console.log(nome + ", seu signo é Aries") : console.log(nome + ", seu signo é Peixes");
    break;    
    case 4:
        dia >= 21 ? console.log(nome + ", seu signo é Touro") : console.log(nome + ", seu signo é Aries");
    break;
    case 5: 
        dia >= 21 ? console.log(nome + ", seu signo é Gemeos") : console.log(nome + ", seu signo é Touro");
    break;    
    case 6:
        dia >= 21 ? console.log(nome + ", seu signo é Cancer") : console.log(nome + ", seu signo é Gemeos");
    break;
    case 7: 
        dia >= 23 ? console.log(nome + ", seu signo é Leao") : console.log(nome + ", seu signo é Cancer");
    break;   
    case 8:
        dia >= 23 ? console.log(nome + ", seu signo é Virgem") : console.log(nome + ", seu signo é Leao");
    break;
    case 9: 
        dia >= 23 ? console.log(nome + ", seu signo é Libra") : console.log(nome + ", seu signo é Virgem");
    break    
    case 10:
        dia >= 23 ? console.log(nome + ", seu signo é Escorpiao") : console.log(nome + ", seu signo é Libra");
    break;
    case 11: 
        dia >= 22 ? console.log(nome + ", seu signo é Sagitario") : console.log(nome + ", seu signo é Escorpiao");
    break;    
    case 12:
        dia >= 22 ? console.log(nome + ", seu signo é Capricornio") : console.log(nome + ", seu signo é Sagitario");
    break;
    default:
        console.log(nome + ", a data não corresponde a nenhum signo")
    break;
}

        console.log("============================================\n")
