
calcular();
let saldoVitorias = 100
let saldoDerrotas = 20

function  calcular (saldoVitorias , saldoDerrotas)  {
            return saldoVitorias - saldoDerrotas
    
}

let nivel = " "
let resultadoCalculo = saldoVitorias

if (resultadoCalculo <= 10) {
    nivel = "Ferro"
}
else if (resultadoCalculo > 11 && resultadoCalculo <= 20) {
    nivel = "Bronze"
}
else if (resultadoCalculo > 21 && resultadoCalculo <= 50) {
    nivel = "Prata"
}
else if (resultadoCalculo > 51 && resultadoCalculo <= 80) {
    nivel = "Ouro"
}
else if (resultadoCalculo > 81 && resultadoCalculo <= 90) {
    nivel = "Diamante"
}
else if (resultadoCalculo > 91 && resultadoCalculo <= 100) {
    nivel = "Lendário"
}
else if (resultadoCalculo > 101) {
    nivel = "Imortal"
}
console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível " + nivel)
