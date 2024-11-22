import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/training.model.ts/training.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Training[] | undefined;
  amount : number = 0;
  constructor(private cartService : CartService , private router : Router, private authService: AuthService ) { }

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
   * vérification de la connexion du client, message si échec
   */
  onNewOrder(): void{
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('customer');
    } else {
      alert('Vous devez vous connecter avant de passer commande.');
    }
  }

    /**
   * Méthode permmettant de faire la redirection vers login Page depuis la page customer
   */
    fromCartToLoginPage() {
      this.router.navigate(['/login']);
    }
}

/*
oneworder
isconnected? passe par 
authService.isConnected

le tableau user est dans le service auth
auth injecté dans login avec methode pour verifier si l'user existe  user[]
methode login dans auth qui prend email et pswd                     login(email,passwd)
setUser
localstorage avec user.password= ....(user)
quand j'appuie sur commander, authservice verifie dans local starage si je suis connecte
*/