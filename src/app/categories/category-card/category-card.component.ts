import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  pokemonType: any;

  constructor() { }

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
  }

}
