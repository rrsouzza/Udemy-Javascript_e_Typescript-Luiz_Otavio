/* eslint-disable */    //desabilita o eslint nesse arquivo
let nome: string = 'Ricardo';   //Qualquer tipo de strings: "", '', ``
            //type annotation == : string
            //type annotation diz explicitamente qual o tipo do dado.
let idade: number = 23; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true ou false
let simbolo: symbol = Symbol('qualquer-symbol');    //symbol
//let big: bigint = 10n; -> disponível a partir do ES2020.

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];
let arrayDeBoolean: Array<boolean> = [true, false, true];
let arrayDeBoolean2: boolean[] = [true, false, true];

//Objetos
let pessoa : {nome: string, idade: number, adulto?: boolean} = {    // ? indica que essa propriedade é opcional
    nome: 'Ricardo',
    idade: 23
}

//Funções
function soma(x: number, y:number){
    return x + y;
}
console.log(soma(2, 2));
    //Tipagem com arrow function:
        const soma2: (x: number, y: number) => number = (x, y) => x + y;
