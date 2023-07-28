import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddCommentComponent } from '../pokemon-add-comment/pokemon-add-comment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss']
})
export class PokemonDetailPageComponent implements OnInit {
  pokemonData: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private dialog: MatDialog,
    private firebase: AngularFirestore,
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if(id){
        //console.log('id:', id);
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((ret) => {
          this.pokemonData = ret;
          console.log(JSON.stringify(this.pokemonData));
        });
      }
    });
  }

  showDialog() {
    let dialogRef = this.dialog.open(PokemonAddCommentComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(JSON.stringify(result));
      let comments=[];
      comments.push(result);
      this.firebase
      .collection("pokemons")
      .doc(this.pokemonData.id.toString())
      .update({
        comments: comments,
      });
      /*.set(
        {
          comments: comments,
        },
        {
          merge: true,
        }
      );*/
    })
  }

}
