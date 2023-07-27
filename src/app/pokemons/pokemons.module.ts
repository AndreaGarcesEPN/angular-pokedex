import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonListByTypeComponent,
    PokemonDetailComponent,
    PokemonFavoriteComponent,
    MyFavoritesComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
      { path: 'pokemon-my-favorites', component: MyFavoritesComponent },
      {
        path: 'pokemon-list-by-type/:id',
        component: PokemonListByTypeComponent,
      },
    ]),
  ],
})
export class PokemonsModule {}
