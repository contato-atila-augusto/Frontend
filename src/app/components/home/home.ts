import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nomeProduto: string = "Curso de Angular";
  anuncio: string = "O " + this.nomeProduto + " está em promoção";
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string ="img/crud.png"


  testeVariaveis(): void {
    console.log(`Nome Produto: ${this.nomeProduto}`);
    console.log(`${this.anuncio} está em promoção`);
    console.log(`ID: ${this.idProduto}`);
    console.log(`Preço: ${this.precoProduto}`);
    console.log(`Promoção: ${this.promocao}`);


  }

}
