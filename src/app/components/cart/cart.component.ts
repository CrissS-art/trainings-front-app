import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/training.model.ts/training.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Training[] | undefined;
  amount : number = 0;
  constructor(private cartService : CartService , private router : Router) { }

  /**
   * à l'initialisation du composant, récupération du panier
   */
  ngOnInit(): void {
    this.cart = this.cartService.getCart();       
    this.amount = this.cartService.getAmount();
  }

  /**
   * Méthode qui supprime une formation du panier et met à jour l'affichage du panier
   * @param training 
   */
  onRemoveFromCart(training : Training){
    this.cartService.removeTraining(training);
    this.cart = this.cartService.getCart();
  }

  /**
   * Méthode de gestion de l'étape suivante de la commande en renvoyant vers le composant de gestion client (formulaire)
   */
  onNewOrder(){
    this.router.navigateByUrl('customer');
  }
}
