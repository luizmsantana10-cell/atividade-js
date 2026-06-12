/*2. Faça um algoritmo que leia a largura e altura de uma
parede, calcule e mostre a área a ser pintada e a
quantidade de tinta necessária para o serviço. Considere
que cada litro de tinta pinta uma área de 2metros
quadrados.
*/
const prompt=require('prompt-sync')();

let alt = Number(prompt('Digite a Altura: '));
let larg = Number(prompt('Digite a Largura: '));

let area = alt * larg;

let tinta =  area / 2;

console.log("Area da parede é: " + area+ " metros quadrados");
console.log("A tinta necessaria é: " + tinta + " Litros de tinta");

