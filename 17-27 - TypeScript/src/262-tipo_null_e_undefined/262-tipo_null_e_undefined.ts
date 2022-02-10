let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  //Parâmetros
  firstName: string,
  lastName?: string,
): {
  //Objeto de retorno
  firstName: string;
  lastName?: string;
} {
  return {
    //Corpo da função
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 2);
}
console.log(squareOfTwoNumber);
