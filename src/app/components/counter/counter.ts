// 🔢 Counter Component - Two-Way Binding Example

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  // ⭐ Two-way binding pattern: property + propertyChange
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  
  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.valueChange.emit(this.value);
    }
  }
  
  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.valueChange.emit(this.value);
    }
  }
  
  reset() {
    this.value = 0;
    this.valueChange.emit(this.value);
  }
}
