abstract class Ingresso {
  constructor(protected valor: number = 100.0) {}
  public imprimeValor(): void {}
}
export class ingressoNormal extends Ingresso {
  constructor(valor: number) {
    super(valor);
  }

  public imprimeValor(): void {
    console.log(`O valor do ingresso normal é R$ ${this.valor.toFixed(2)}`);
  }
}

export class ingressoVip extends Ingresso {
  constructor(valor: number, private valorAdiconal: number = 50.0) {
    super(valor);
  }

  public imprimeValor(): void {
    const valorVip = this.valor + this.valorAdiconal;
    console.log(`O valor do ingresso VIP é: R$ ${valorVip.toFixed(2)}`);
  }
}

export class ingressoCamarote extends Ingresso {
  constructor(valor: number, private valorAdiconal: number = 100.0) {
    super(valor);
  }

  public imprimeValor(): void {
    const valorCamarote = this.valor + this.valorAdiconal;
    console.log(
      `O valor do ingresso camarote é: R$ ${valorCamarote.toFixed(2)}`
    );
  }
}
