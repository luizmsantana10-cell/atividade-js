/*
O usuário deverá informar:
● A distância a ser percorrida (em quilômetros);
● O consumo médio do veículo (em km/l);
● O preço do litro do combustível.
Com base nessas informações, o algoritmo deve calcular e
exibir:
● A quantidade de combustível necessário para percorrer
o trajeto;
● O valor total a pagar com combustível para esse
deslocamento.
*/

const prompt=require('prompt-sync')();

let dist = Number(prompt('Informe a Distância em KM: '));
let consu = Number(prompt('Informe o consumo km/l: '));
let prec = Number(prompt('Informe a o preço do combustivel: '));
 
let quant = dist / consu;

let valor = prec *  quant;

console.log("A quantidade de combustível necessário para percorrer o trajeto: " + quant + "litros");
console.log("O valor total a pagar com combustível para esse deslocamento é: " + valor + "R$");
