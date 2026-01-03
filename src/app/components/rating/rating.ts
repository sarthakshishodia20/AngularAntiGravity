// ⭐ Rating Component - Interactive Component

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() readonly: boolean = false;
  
  @Output() ratingChange = new EventEmitter<number>();
  
  hoveredRating: number = 0;
  
  stars: number[] = [];
  
  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }
  
  onStarClick(star: number) {
    if (!this.readonly) {
      this.rating = star;
      this.ratingChange.emit(this.rating);
    }
  }
  
  onStarHover(star: number) {
    if (!this.readonly) {
      this.hoveredRating = star;
    }
  }
  
  onMouseLeave() {
    this.hoveredRating = 0;
  }
  
  getStarClass(star: number): string {
    const currentRating = this.hoveredRating || this.rating;
    return star <= currentRating ? 'filled' : 'empty';
  }
}
