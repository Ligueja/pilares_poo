class Imovel {
  constructor(protected endereco: string, protected preco: number) {}
}

export class imovelNovo extends Imovel {
  constructor(endereço: string, preco: number, private precoAdicinal: number) {
    super(endereço, preco);
  }

  public imprimeValor(): void {
    const valorNovo = this.preco + this.precoAdicinal;
    console.log(`O valor do imóvel novo é R$ ${valorNovo.toFixed(3)}`);
  }
}

export class imovelVelho extends Imovel {
  constructor(endereço: string, preco: number, private desconto: number) {
    super(endereço, preco);
  }

  public imprimeValor(): void {
    const valorNovo = this.preco - this.desconto;
    console.log(
      `O valor do imóvel velho com desconto é R$ ${valorNovo.toFixed(3)}`
    );
  }
}


