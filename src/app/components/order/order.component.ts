import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/training.model.ts/customer.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

/**
 * Composant de gestion du récapitulatif d'une commande + validation
 */
export class OrderComponent implements OnInit {
  dateOrder : Date = new Date();
  customer : Customer | undefined;
  constructor(public cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
  }

  /**
   * Méthode appelé en cas de validation d'une commande
   * si user confirme alors l'appli est remise dans son état initial
   */
  onOrder(){
    if(confirm("Votre commande a bien été prise en compte, nous vous recontacterons sous peu !")){
        this.cartService.sendOrderToLocaleStorage();
        this.cartService.clearLocalStorage();
        this.router.navigateByUrl('');
    }
  }
}
