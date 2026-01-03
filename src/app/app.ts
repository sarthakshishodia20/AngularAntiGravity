// 📚 Lesson 3: Directives Examples

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  
  // ============================================
  // 1️⃣ *ngIf Examples
  // ============================================
  isLoggedIn = false;
  showMessage = true;
  hasData = false;
  isLoading = false;
  age = 25;
  isStudent = true;
  
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
  toggleData() {
    this.hasData = !this.hasData;
  }
  
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
  
  // ============================================
  // 2️⃣ *ngFor Examples
  // ============================================
  
  // Simple array
  fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🥭 Mango', '🍇 Grapes'];
  
  // Array of objects
  users = [
    { id: 1, name: 'Sarthak', role: 'Developer', active: true },
    { id: 2, name: 'Priya', role: 'Designer', active: true },
    { id: 3, name: 'Rahul', role: 'Manager', active: false },
    { id: 4, name: 'Ananya', role: 'Tester', active: true }
  ];
  
  // Products
  products = [
    { id: 1, name: 'Laptop', price: 50000, inStock: true },
    { id: 2, name: 'Phone', price: 20000, inStock: true },
    { id: 3, name: 'Tablet', price: 15000, inStock: false },
    { id: 4, name: 'Watch', price: 5000, inStock: true }
  ];
  
  // Colors
  colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  
  // TrackBy function for performance
  trackByUserId(index: number, user: any) {
    return user.id;
  }
  
  trackByProductId(index: number, product: any) {
    return product.id;
  }
  
  // ============================================
  // 3️⃣ *ngSwitch Examples
  // ============================================
  userRole: 'admin' | 'user' | 'guest' | 'unknown' = 'user';
  userStatus: 'online' | 'away' | 'offline' = 'online';
  
  setRole(role: 'admin' | 'user' | 'guest' | 'unknown') {
    this.userRole = role;
  }
  
  setStatus(status: 'online' | 'away' | 'offline') {
    this.userStatus = status;
  }
  
  // ============================================
  // 4️⃣ ngClass Examples
  // ============================================
  isActive = false;
  isSpecial = true;
  hasError = false;
  score = 75;
  
  toggleActive() {
    this.isActive = !this.isActive;
  }
  
  toggleError() {
    this.hasError = !this.hasError;
  }
  
  getScoreClass() {
    return {
      'score-excellent': this.score >= 80,
      'score-good': this.score >= 60 && this.score < 80,
      'score-average': this.score >= 40 && this.score < 60,
      'score-poor': this.score < 40
    };
  }
  
  // ============================================
  // 5️⃣ ngStyle Examples
  // ============================================
  textColor = '#667eea';
  fontSize = 16;
  temperature = 25;
  
  getTemperatureStyle() {
    return {
      'color': this.temperature > 30 ? '#dc3545' : this.temperature < 15 ? '#007bff' : '#28a745',
      'font-weight': this.temperature > 30 || this.temperature < 15 ? 'bold' : 'normal',
      'font-size': '18px'
    };
  }
  
  // ============================================
  // 🎯 TODO LIST Example (Practice)
  // ============================================
  todos = [
    { id: 1, text: 'Learn *ngIf directive', completed: true },
    { id: 2, text: 'Practice *ngFor with arrays', completed: true },
    { id: 3, text: 'Understand *ngSwitch', completed: false },
    { id: 4, text: 'Master ngClass and ngStyle', completed: false },
    { id: 5, text: 'Build a real project', completed: false }
  ];
  
  newTodoText = '';
  
  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodoText,
        completed: false
      });
      this.newTodoText = '';
    }
  }
  
  toggleTodo(todo: any) {
    todo.completed = !todo.completed;
  }
  
  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
  
  get completedCount() {
    return this.todos.filter(t => t.completed).length;
  }
  
  get pendingCount() {
    return this.todos.filter(t => !t.completed).length;
  }
  
  trackByTodoId(index: number, todo: any) {
    return todo.id;
  }
  
  // ============================================
  // 📊 Dynamic List Example
  // ============================================
  showCompleted = true;
  showPending = true;
  
  get filteredTodos() {
    return this.todos.filter(todo => {
      if (todo.completed && !this.showCompleted) return false;
      if (!todo.completed && !this.showPending) return false;
      return true;
    });
  }
}

