/*
Fazer um algoritmo que apresente o nome do paciente
e sua faixa de risco, baseando-se na seguinte
tabela:
IMC FAIXA DE RISCO
Abaixo de 20 abaixo do peso
A partir de 20 até 25 normal
A partir de 25 até 30 excesso de peso
A partir de 30 até 35 obesidade
Acima de 35 obesidade mórbida
*/
const prompt=require('prompt-sync')();
 let altura = Number(prompt('Digite sua altura: ').replace(',', '.'));
 let peso = Number(prompt('Digite seu peso: ').replace(',', '.'));

 let imc = peso/(altura ** 2);

if (imc < 20 ){
    console.log("Abaixo do Peso")

} else if ( imc <= 25 ) {  
    console.log("Normal")

} else if ( imc <= 30 ) {
    console.log("excesso de peso")

} else if ( imc <= 35 ) {
    console.log("obesidade")

} else {
    console.log("obesidade mórbida")

}
