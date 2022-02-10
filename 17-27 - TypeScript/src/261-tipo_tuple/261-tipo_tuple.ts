//Tupla: tamanho fixo, índices de tipo fixo.
const dadosCliente1: readonly [number, string] = [1, 'Ricardo'];
const dadosCliente2: [number, string, string] = [1, 'Ricardo', 'Rodrigues'];
const dadosCliente3: [number, string, string?] = [1, 'Ricardo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Ricardo', 'Rodrigues', 'stringQualquer1', 'stringQualquer2'];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'José';
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['Ricardo', 'Rodrigues'];
const array2: ReadonlyArray<string> = ['Ricardo', 'Rodrigues'];

console.log(array1);
console.log(array2);
