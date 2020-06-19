// ## Importe a biblioteca ##
let rs= require("readline-sync")


// ## Faça o código ##

let usandomascara = rs.question("Voce esta usando mascara quando precisa sair de casa? (sim ou nao?)\n")

let lavandomaos = rs.question("Lava as maos freguentemente? (sim ou nao?)\n")

console.log("===================================")

if ( usandomascara == "sim" && lavandomaos == "sim"){
    console.log("Parabens, voce e demais muito obrigado por estar ajudando a combater o COVID, continue assim.")
} else if( usandomascara == "sim" && lavandomaos == "nao"){
    console.log("Que bom que esta usando mascara, porem voce precisar lavar as maos, precisamos de voce para pdoer combater essa pandemia.")
} else if( usandomascara == "nao" && lavandomaos == "sim"){
    console.log("Que bom que esta lavando as maos, porem voce precisar usar mascara quando sair de casa, precisamos de voce para pdoer combater essa pandemia.")
} else if ( usandomascara == "nao" && lavandomaos == "nao"){
    console.log("Voce precisa começar a fazer, precisamos de voce para poder combater essa pandemia.")
}
console.log("===================================")
