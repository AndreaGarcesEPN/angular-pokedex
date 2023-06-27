import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [
    CategoryListComponent, 
    CategoryCardComponent
  ]
})
export class CategoriesModule { }
