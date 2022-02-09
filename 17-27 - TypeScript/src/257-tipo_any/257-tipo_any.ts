function showMessage(msg: any) {
  //Não é ideal usar o tipo any no TS
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
