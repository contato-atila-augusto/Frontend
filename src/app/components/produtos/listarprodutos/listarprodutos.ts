import { Component } from '@angular/core';

@Component({
  selector: 'app-listarprodutos',
  standalone: false,
  templateUrl: './listarprodutos.html',
  styleUrl: './listarprodutos.css',
})
export class Listarprodutos {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: "Átila Augusto",
    idade: 16,
    altura: 1.85,
    graduado: false
  };

  listaProdutos: any[] = [
    { nome: 'Curso de Angular', precoProduto: 35.56, validade: '2026-10-01', id: 1 },
    { nome: 'Curso de Ionic', precoProduto: 50, validade: '2026-10-01', id: 2, promocao: true},
    { id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2026-10-01' },
  ];

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }

    for (const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

  }

}
