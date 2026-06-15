/*5. Escreva um programa que leia as medidas dos lados de um
triângulo e escreva se ele é equilátero, isósceles ou
escaleno. Sendo que:
• Triângulo Equilátero: possui os 3 lados iguais.
• Triângulo Isóscele: possui 2 lados iguais.
• Triângulo Escaleno: possui 3 lados diferentes
*/
const prompt=require('prompt-sync')();

let lado1 = Number(prompt('digite  medida do primeiro lado: '));
let lado2 = Number(prompt('digite  medida do segundo lado: '));
let lado3 = Number(prompt('digite  medida do terceiro lado: '));

if (lado1 == lado2 && lado3 == lado1){
    console.log("É um Triangulo Equilátero")
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("É um Triângulo Isóscele")
} else{
    console.log("É um Triangulo Escaleno")
}
