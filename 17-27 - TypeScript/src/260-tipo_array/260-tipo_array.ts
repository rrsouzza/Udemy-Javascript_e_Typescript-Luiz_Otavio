// Array[T] ou T[]
export function multiplicaArgs(...args: Array<number>): number {
  //export faz com que a função deixe o escopo global e rode no escopo module, permitindo que exista outra função com o mesmo nome em arquivos diferentes.
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  //export faz com que a função deixe o escopo global e rode no escopo module, permitindo que exista outra função com o mesmo nome em arquivos diferentes.
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  //export faz com que a função deixe o escopo global e rode no escopo module, permitindo que exista outra função com o mesmo nome em arquivos diferentes.
  return args.map((valor) => valor.toUpperCase());
}

console.log('4 * 2 * 6 * 1 = ', multiplicaArgs(4, 2, 6, 1));
console.log('Concatenação: ', concatenaStrings('Oi', 'como', 'vai', '?'));
console.log(toUpperCase('teste1', 'teste2', 'oi', 'olá'));
