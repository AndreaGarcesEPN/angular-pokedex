import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = [
    {
      id: '1',
      name: 'Normal',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=normal',
    },
    {
      id: '2',
      name: 'Fighting',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=fighting',
    },
    {
      id: '3',
      name: 'Flying',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=flying',
    },
    {
      id: '4',
      name: 'Poison',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=poison',
    },
  ];

  constructor() { }

  getPokemonTypes(): any {
    return this.categories;
  }

}
