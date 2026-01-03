// 🎯 Product Card Component - Child Component with @Input and @Output

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  // ⭐ @Input - Parent se data receive karta hai
  @Input() product: any;
  
  // ⭐ @Output - Parent ko events bhejta hai
  @Output() buyClicked = new EventEmitter<any>();
  @Output() addToWishlist = new EventEmitter<any>();
  
  onBuy() {
    if (this.product.stock > 0) {
      this.buyClicked.emit(this.product);
    }
  }
  
  onAddToWishlist() {
    this.addToWishlist.emit(this.product);
  }
  
  get stockStatus(): string {
    if (this.product.stock === 0) return 'Out of Stock';
    if (this.product.stock < 5) return 'Low Stock';
    return 'In Stock';
  }
  
  get stockClass(): string {
    if (this.product.stock === 0) return 'out-of-stock';
    if (this.product.stock < 5) return 'low-stock';
    return 'in-stock';
  }
}
