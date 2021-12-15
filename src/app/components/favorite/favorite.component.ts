import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
