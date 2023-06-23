import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {
    console.log(this.categoriesService.getPokemonTypes());
  }

}
