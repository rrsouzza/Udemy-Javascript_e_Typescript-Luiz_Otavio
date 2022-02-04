//Declaração de Função (Function hoisting)
//Function hoisting: declarando uma função de forma literal é a única maneira que faz com que as suas variáveis e componentes sejam "levados" pro topo da página. Isso permite, por exemplo, chamar a função mesmo ela tendo sido declarada mais embaixo no código.
falaOi();

function falaOi(){
    console.log("Oi");
}

//First-class Objects: Functions são objetos de primeira classe. Isso possibilita atribuir uma função à uma constante:
//Function expression
const souUmDado = function(){
    console.log("Sou um dado");
};

//Isso permite passar a variável/constante que possui uma função atrelada como parâmetro para outra função:

function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo:");
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
const arrowFunction = () => {
    console.log("Sou uma arrow function");
}

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log("Estou falando...");
    },
    falar2(){
        console.log("Estou falando 2...");
    }
}
obj.falar();
obj.falar2();