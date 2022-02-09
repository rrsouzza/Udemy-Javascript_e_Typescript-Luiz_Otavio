const objetoA: {
  //Podemos definir a tipagem do objeto da seguinte forma:
  chaveA: string; //ChaveA obrigatória
  readonly chaveB: string; //ChaveB obrigatória
  chaveC?: string; //ChaveC opcional -- readonly impede que o valor da propriedade seja alterado posteriormente
  [key: string]: unknown; //Index signature: propriedade de nome não definido, do tipo string, de valor associado desconhecido
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Novo valor';
objetoA.chaveC = 'Chave C';
//objetoA.chaveD = 'Novo valor';    //Não é possível criar propriedades de um objeto fora do escopo de instância do mesmo, a menos que ela tenha sido declarada como opcional, como no caso da Chave C.
