import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  categoryList: any[];

  constructor(private categoriesService: CategoryService) { }

  suscriberCategoryList: Subscription;

  ngOnInit(): void {
    //console.log(this.categoriesService.getPokemonTypes());
    //this.categoryList = this.categoriesService.getPokemonTypes();
    this.suscriberCategoryList = this.categoriesService.getPokemonTypes().subscribe({
      next: (data) => (this.categoryList = data)
    });
    console.log(JSON.stringify(this.categoryList));
  }

  ngOnDestroy(): void {
    if(this.suscriberCategoryList){
      this.suscriberCategoryList.unsubscribe();
    }
  }

}
