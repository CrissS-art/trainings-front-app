import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/training.model.ts/training.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Training[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
  removeTraining(id: number): void {
    this.cartService.removeTraining(id);
    this.cartItems = this.cartService.getCart();
    console.log('Training removed from cart:', id);
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    console.log('Cart has been cleared');
  }
}



//   onAddToCart(training: any) {
//     this.cartItems.push();
//     this.router.navigate(['cart']);
//     this.router.navigateByUrl('cart');
//     console.log('Training added to cart:', training);
//   }

