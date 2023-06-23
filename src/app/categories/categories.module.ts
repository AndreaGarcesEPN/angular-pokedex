import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryListComponent, 
    CategoryCardComponent
  ]
})
export class CategoriesModule { }
