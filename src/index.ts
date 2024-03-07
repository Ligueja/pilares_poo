// 1. Crie uma classe abstrata chamada Ingresso que possui um valor em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.

import { ingressoNormal, ingressoVip, ingressoCamarote } from "./ingresso";
import { imovelNovo, imovelVelho } from "./imovel";
import { Cachorro, Cavalo, Gato } from "./Animal";

// const normal = new ingressoNormal (100);
// normal.imprimeValor()

// const vip = new ingressoVip (100)
// vip.imprimeValor()

// const camarote = new ingressoCamarote (100)
// camarote.imprimeValor()

// const novo = new imovelNovo ("Rua Pau Brasil, 232", 150.000, 50.000)
// novo.imprimeValor()

// const velho = new imovelVelho ("Rua Pau Brasil, 232", 150.000, 50.000)
// velho.imprimeValor()

const cachorro = new Cachorro (4, "mamifero")
cachorro.correr()
cachorro.latir()

const cavalo = new Cavalo (4, "mamífero")
cavalo.correr()
cavalo.coice()

const gato = new Gato (4, "mamífero")
gato.correr()
gato.miar()



