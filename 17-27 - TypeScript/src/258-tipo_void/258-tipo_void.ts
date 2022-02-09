function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('Ricardo', 'Rodrigues');

const pessoa = {
  nome: 'Ricardo',
  sobrenome: 'Rodrigues',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
pessoa.exibirNome();

export { pessoa };
