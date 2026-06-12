/*1 Ler três números inteiros e informar a média desses
números.
*/

const prompt=require('prompt-sync')();

let n1 = Number(prompt("digite um numero: "))
let n2 = Number(prompt("digite um numero: "))
let n3 = Number(prompt("digite um numero: "))

let media = (n1 + n2 + n3) / 3

console.log("Sua media é: "+ media )
