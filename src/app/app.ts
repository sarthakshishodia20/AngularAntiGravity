// 📚 Lesson 4: Components & Communication

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// ⭐ Child components ko import karo
import { ProductCard } from './components/product-card/product-card';
import { Counter } from './components/counter/counter';
import { Rating } from './components/rating/rating';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    ProductCard,  // ⭐ Yahan import karo
    Counter, 
    Rating
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ============================================
  // 📦 Product System (@Input/@Output Example)
  // ============================================
  products = [
    { 
      id: 1, 
      name: 'Gaming Laptop', 
      category: 'Electronics',
      price: 75000, 
      stock: 5,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop'
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      category: 'Audio',
      price: 3500, 
      stock: 0,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    },
    { 
      id: 3, 
      name: 'Smart Watch', 
      category: 'Wearables',
      price: 15000, 
      stock: 12,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
    },
    { 
      id: 4, 
      name: 'Bluetooth Speaker', 
      category: 'Audio',
      price: 5000, 
      stock: 3,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
    }
  ];
  
  cart: any[] = [];
  wishlist: any[] = [];
  
  // ⭐ Child se event receive karna (Parent ka method)
  handleBuy(product: any) {
    if (product.stock > 0) {
      product.stock--;
      this.cart.push({
        name: product.name,
        price: product.price
      });
      console.log(`✅ Bought: ${product.name}`);
    }
  }
  
  handleAddToWishlist(product: any) {
    if (!this.wishlist.find(p => p.id === product.id)) {
      this.wishlist.push(product);
      console.log(`❤️ Added to wishlist: ${product.name}`);
    }
  }
  
  get cartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  
  clearCart() {
    this.cart = [];
  }
  
  removeFromWishlist(productId: number) {
    this.wishlist = this.wishlist.filter(p => p.id !== productId);
  }
  
  // ============================================
  // 🔢 Counter System (Two-Way Binding)
  // ============================================
  counterValue1 = 10;
  counterValue2 = 50;
  counterValue3 = 0;
  
  // ============================================
  // ⭐ Rating System
  // ============================================
  productRating = 3;
  userExperience = 4;
  overallSatisfaction = 0;
  
  handleRatingChange(newRating: number, type: string) {
    console.log(`${type} rating changed to: ${newRating}`);
  }
}
