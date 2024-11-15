import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model.ts/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: Training[] = [];

  constructor(private router: Router ) { }

  addTraining(training: Training): void {
    const existingTraining = this.cart.find(item => item.id === training.id);
    if (existingTraining) {
      existingTraining.quantity += training.quantity;
    } else {
      this.cart.push({ ...training });
    }
}
  removeTraining(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
  }
  getCart(): Training[] {
    return [...this.cart];
  }
  clearCart(): void {
    this.cart = [];
}
}