import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  pokemonType: any;

  imageUrl: String;

  categoryType: String;

  constructor() { }

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
    this.imageUrl = 
      `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
    /*this.categoryType = this.pokemonType.split('/')(6);
    console.log(this.categoryType);*/
    https: this.categoryType = this.pokemonType.url
      .slice(0, -1)
      .split('/')
      .pop();

      console.log('categoryType: ' + this.categoryType);
  }
}
