/*
Entrar com Nome, 3 notas de um aluno. Ache a média. Caso
a média seja maior ou igual a 6, apresentar o texto
Aprovado, caso contrário apresentar o texto Reprovado
*/
const prompt=require('prompt-sync')();

let nome = prompt('Digite o nome do aluno: ')

let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))

let media = (nota1 + nota2 + nota3) / 3

    if (media >= 6 ){
        console.log("Aluno "+nome+" Aprovado" )
    }    else{
        console.log("Aluno "+nome+" Reprovado" )
    }

