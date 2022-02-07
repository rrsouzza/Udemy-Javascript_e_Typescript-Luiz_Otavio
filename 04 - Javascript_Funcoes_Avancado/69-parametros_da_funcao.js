function funcao(){
    console.log(arguments); //arguments é um objeto que engloba todos os parâmetros recebidos pela função. Não funciona com arrow functions.
    console.log("argumento na posição 4: ", arguments[4]);
}
funcao("Arg1", "Arg2", 3, 4, 5, 6, 7, 8);

function funcaoSomarArgumentos(a, b, c){   //Essa função soma o valor de todos os argumentos que ela recebe, mesmo não tendo parâmetros declarados.
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log("Total da soma dos argumentos: ", total + "  a: ", a + "  b: ", b + "  c: ", c);
}
funcaoSomarArgumentos(1, 2, 3, 4, 5, 6, 7);

function funcaoComArgumentosExtras(a, b, c, d, e, f, g){    //Caso a função esteja esperando certos argumentos, mas nem todos sejam passados, os argumentos que não recebere, valores serão undefined.
    console.log("argumentos: ", a, b, c, d, e, f, g);
}
funcaoComArgumentosExtras(1, 2, 3);

function argumentoComValorCasoVazio(a = 1, b = 2){  //Caso o argumento a não seja referenciado, ele irá assumir o valor de 1. Caso o argumento b não seja referenciado, ele irá assumir o valor de 2.
    console.log("Soma: ", a + b);
}
argumentoComValorCasoVazio(2);

function argumentoComReferenciaSelecionada(a = 0, b = 2, c = 4){
    console.log("Soma: ", a + b + c);
}
argumentoComReferenciaSelecionada(2, undefined, 6); //A única maneira de escolher quais argumentos queremos passar um valor ou não (no caso, se for de passar valor pra a e c mas não pra b), é definir seu valor como undefined. No caso da função acima, b irá assumir o valor 2, conforme declarado no escopo dos argumentos da função.


//Desestruturação dos argumentos (ex: objeto):
function argumentosComDesestruturaçãoObjeto( {nome, sobrenome, idade} ){  //No caso o argumento esperado é um objeto que contenha as propriedades nome, sobrenome e idade.
    console.log(nome, sobrenome, idade + " anos.");
}
//let objetoNome = {nome: "Ricardo", sobrenome: "Rodrigues", idade: 23};
//argumentosComDesestruturaçãoObjeto(objetoNome);
argumentosComDesestruturaçãoObjeto({nome: "Ricardo", sobrenome: "Rodrigues", idade: 23});

//Desestruturação dos argumentos (ex: array):
function argumentosComDesestruturaçãoArray( [valor1, valor2, valor3] ){
    console.log(valor1, valor2, valor3);
}
argumentosComDesestruturaçãoArray(["Ricardo", "Rodrigues", "de Souza"]);


//Rest operator: ... antes de um argumento indica que ele deverá receber todos os parâmetros restantes passados para a função.
function funcaoComRestOperator(operador, acumulador, ...numeros){   //... indica que numeros receberá todos os argumentos restantes/passados após o acumulador. Logicamente, o rest operator deve ser o último argumento, já que ele irá receber os argumentos restantes.
    console.log(operador, acumulador, "Números passados com rest operator: ", numeros); //numeros armazena todos os argumentos passados após o acumulador.
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log("Resultado da operação: ", acumulador);
}
funcaoComRestOperator('-', 200, 20, 30, 40, 50);

const conta = function(operador, acumulador, ...numeros){   //O rest operator também funciona com function expressions. Inclusive o arguments inclui também o argumento com rest operator. Arguments não funciona/existe em arrow functions =>.
    console.log(arguments);
}
conta('+', 0, 10, 20, 30);
//Uma alternativa em usar o arguments (que funciona em arrow functions):
const teste = (...args) => {
    console.log(args);
}
teste('+', 0, 10, 20, 30);