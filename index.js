calcular(50,50)

let saldoVitorias = 50
let nivel = " "

function  calcular ()  {
    
}

let resultadoCalculo = saldoVitorias

if (resultadoCalculo <= 10) {
    nivel = "Ferro"
}
else if (resultadoCalculo > 10 && resultadoCalculo <= 20) {
    nivel = "Bronze"
}
else if (resultadoCalculo > 20 && resultadoCalculo <= 50) {
    nivel = "Prata"
}
else if (resultadoCalculo > 50 && resultadoCalculo <= 80) {
    nivel = "Ouro"
}
else if (resultadoCalculo > 80 && resultadoCalculo <= 90) {
    nivel = "Diamante"
}
else if (resultadoCalculo > 90 && resultadoCalculo <= 100) {
    nivel = "Lendário"
}
else if (resultadoCalculo > 100) {
    nivel = "Imortal"
}
console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível " + nivel)