import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { Training } from 'src/app/model/training.model.ts/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  cartItems: Training[] = [];
  constructor(private cartService : CartService, private router : Router) { }


  ngOnInit(): void {
    this.listTrainings = [
      {id:1,name:'Java',description:'Formation Java SE 8 sur 5 jours',price:1500,quantity:1},
      {id:2,name:'DotNet',description:'Formation DotNet sur 5 jours',price:1000,quantity:1},
      {id:3,name:'Python',description:'Formation Python/Django sur 5 jours',price:1500,quantity:1}
    ];
  }
  addToCart(training: Training) {
    this.cartService.addTraining(training);
    this.router.navigate(['cart']);
    this.router.navigateByUrl('cart');
    console.log('Training added to cart:', training);
  }
  removeTraining(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    console.log('Training removed from cart:', id);
  }
  // emptyCart(): void {
  //   this.cartService.clearCart();
  //   console.log('Cart has been cleared');
}

