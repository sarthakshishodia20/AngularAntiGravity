// 📚 Lesson 2: Data Binding Examples

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
  // ============================================
  // 1️⃣ INTERPOLATION Examples
  // ============================================
  protected readonly title = signal('angular-tutorial');
  name = 'Sarthak';
  age = 25;
  city = 'Delhi';
  country = 'India';
  
  // Method for interpolation
  getFullInfo() {
    return `${this.name}, ${this.age} years old, from ${this.city}`;
  }
  
  // Calculation example
  price = 500;
  quantity = 3;
  
  // ============================================
  // 2️⃣ PROPERTY BINDING Examples
  // ============================================
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageAlt = 'Angular Logo';
  isButtonDisabled = false;
  isActive = true;
  textColor = '#dd0031';
  fontSize = '20px';
  
  // ============================================
  // 3️⃣ EVENT BINDING Examples
  // ============================================
  clickMessage = 'Click the button below!';
  clickCount = 0;
  
  onButtonClick() {
    this.clickCount++;
    this.clickMessage = `Button clicked ${this.clickCount} time(s)! 🎉`;
  }
  
  // Input event
  userInput = '';
  onInputChange(event: any) {
    this.userInput = event.target.value;
  }
  
  // Mouse events
  mouseStatus = 'Hover over the box below 👇';
  onMouseEnter() {
    this.mouseStatus = 'Mouse is hovering! 🖱️';
  }
  onMouseLeave() {
    this.mouseStatus = 'Mouse left the area 👋';
  }
  
  // Color selection
  selectedColor = 'none';
  selectColor(color: string) {
    this.selectedColor = color;
    this.textColor = color.toLowerCase();
  }
  
  // ============================================
  // 4️⃣ TWO-WAY BINDING Examples
  // ============================================
  username = '';
  email = '';
  
  // Form object
  user = {
    fullName: '',
    emailAddress: '',
    age: 0,
    city: ''
  };
  
  // ============================================
  // 🎯 COUNTER Example (Practice)
  // ============================================
  counter = 0;
  
  increment() {
    this.counter++;
  }
  
  decrement() {
    this.counter--;
  }
  
  reset() {
    this.counter = 0;
  }
  
  // ============================================
  // 📝 Form Submission
  // ============================================
  submitForm() {
    console.log('Form Submitted!', this.user);
    alert(`Form Submitted!\nName: ${this.user.fullName}\nEmail: ${this.user.emailAddress}`);
  }
  
  clearForm() {
    this.user = {
      fullName: '',
      emailAddress: '',
      age: 0,
      city: ''
    };
  }
}
