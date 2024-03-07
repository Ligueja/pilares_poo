import { publicEncrypt } from "crypto";

class Animal {
  constructor(protected qtdPatas: number, protected mamifero: string) {}
  protected correr(): void {}
}

export class Cachorro extends Animal {
  constructor(qtdPatas: number, mamifero: string) {
    super(qtdPatas, mamifero);
  }

  public correr(): void {
    console.log(
      `O cachorro corre, tem ${this.qtdPatas} patas e é um ${this.mamifero}`
    );
  }

  public latir(): void {
    console.log("O cachorro late!!!");
  }
}

export class Cavalo extends Animal {
  constructor(qtdPatas: number, mamifero: string) {
    super(qtdPatas, mamifero);
  }

  public correr(): void {
    console.log(
      `O cavalo corre, tem ${this.qtdPatas} patas e é um ${this.mamifero}`
    );
  }

  public coice(): void {
    console.log("O cavalo dá coice!!!");
  }
}

export class Gato extends Animal {
  constructor(qtdPatas: number, mamifero: string) {
    super(qtdPatas, mamifero);
  }

  public correr(): void {
    console.log(
      `O gato corre, tem ${this.qtdPatas} patas e é um ${this.mamifero}`
    );
  }

  public miar(): void {
    console.log("O gato mia!!!");
  }
}
