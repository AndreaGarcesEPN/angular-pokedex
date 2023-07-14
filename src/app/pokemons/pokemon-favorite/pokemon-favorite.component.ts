import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit {

  @Input()
  pokemonData: any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.pokemonData.id);
    let document = this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .valueChanges();
    document.subscribe((res) => {
      console.log(JSON.stringify(res));
    })

  }

}
