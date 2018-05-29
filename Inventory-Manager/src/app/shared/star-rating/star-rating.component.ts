import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  constructor() { }

  rating: number = 4;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 92/5;
  }

}
