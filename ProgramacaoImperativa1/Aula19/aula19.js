// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

function Pessoas(altura,sexo){
    this.altura=altura;
    this.sexo=sexo;
    };
    // instanciar objeto da funcao carro
let pessoa1 = new Pessoas(1.55, 'M');
let pessoa2 = new Pessoas(1.45, 'M');
let pessoa3 = new Pessoas(1.65, 'F');
let pessoa4 = new Pessoas(1.95, 'F');
let pessoa5 = new Pessoas(1.75, 'M');
let pessoa6 = new Pessoas(1.77, 'M');
let pessoa7 = new Pessoas(1.99, 'M');
let pessoa8 = new Pessoas(1.55, 'F');
let pessoa9 = new Pessoas(1.47, 'M');
let pessoa10 = new Pessoas(1.49, 'M');
let pessoa11 = new Pessoas(1.63, 'F');
let pessoa12 = new Pessoas(1.69, 'M');
let pessoa13 = new Pessoas(1.78, 'F');
let pessoa14 = new Pessoas(1.79, 'M');
let pessoa15 = new Pessoas(1.89, 'F');

let grupo = [pessoa1, pessoa2, pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9,pessoa10,pessoa11,pessoa12,pessoa13,pessoa14,pessoa15]
// console.log(grupo)

function retornaIdade(array) {
    let maior='';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i] > maior[i]){
        maior[i] += array[i]

        }
    }return maior
}

console.log(retornaIdade(grupo))