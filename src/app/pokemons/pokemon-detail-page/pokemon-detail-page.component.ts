import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddCommentComponent } from '../pokemon-add-comment/pokemon-add-comment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss']
})
export class PokemonDetailPageComponent implements OnInit, OnDestroy {
  
  pokemonData: any;
  comments: any[] = [];
  pokemonSubscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private dialog: MatDialog,
    private firestore: AngularFirestore,
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if(id){
        //console.log('id:', id);
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((ret) => {
          this.pokemonData = ret;
          this.loadComments();
          //console.log(JSON.stringify(this.pokemonData));
        });
      }
    });
  }

  showDialog() {
    let dialogRef = this.dialog.open(PokemonAddCommentComponent);
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(JSON.stringify(result));
      let commentsToInsert = this.comments;
      commentsToInsert.push(result);
      this.firestore
      .collection("pokemons")
      .doc(this.pokemonData.id.toString())
      .update({
        comments: commentsToInsert,
      });
      /*let comments=[];
      comments.push(result);
      this.firestore
      .collection("pokemons")
      .doc(this.pokemonData.id.toString())
      .update({
        comments: comments,
      });*/
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

  private loadComments(){
    let document = this.firestore
    .collection("pokemons")
    .doc(this.pokemonData.id.toString())
    .valueChanges();
    this.pokemonSubscription = document.subscribe((ret: any) => {
      console.log('[loadComments]', JSON.stringify(ret));
      if (ret.comments) {
        this.comments = ret.comments;
      }
    });
  }

  ngOnDestroy(): void {
      if (this.pokemonSubscription) {
        this.pokemonSubscription.unsubscribe();
      }
  }

}
