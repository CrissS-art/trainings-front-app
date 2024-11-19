import { Injectable } from '@angular/core';
import { Training } from '../model/training.model.ts/training.model';
import { Customer } from '../model/training.model.ts/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {  
  private cart : Map<number,Training>;  // panier id, on va chercher les lignes de map qui sont dans le modèle

  constructor() {     
    // au démarrage du service, je récupère le contenu du LS : commande en cours
    let cart = localStorage.getItem('cart');
    if(cart){  // if exist cart
      this.cart = new Map(JSON.parse(cart));
    } // sinon il faut le créer
    else this.cart = new Map<number,Training>();
  }

  /**
   * Méthode qui ajoute une formation au panier puis ajoute le panier au local storage
   * @param training formation à ajouter
   */
  addTraining(training: Training) { 
    this.cart.set(training.id,training);
    this.saveCart();
  }

    /**
   * Méthode qui injecte le contenu du panier dans le local storage
   */
    saveCart() {
      localStorage.setItem('cart',JSON.stringify([...this.cart]));
    }
    
  /**
   * Méthode qui retire une formation au panier puis met à jour le LS
   * @param training 
   */
  removeTraining(training: Training) {
    this.cart.delete(training.id);
    this.saveCart();
  }

  /**
   * Méthode qui renvoi le contenu du panier sous forme de tableau
   * @returns Training [] | undefined
   */
  getCart() : Training [] | undefined {    
    if(this.cart.size > 0)
    return Array.from(this.cart.values());
    else return undefined;
  }

  /**
   * Méthode qui calcule et renvoi le montant total du panier
   * @return total amount
   */
  getAmount() : number {
    let amount : number = 0;
    this.cart.forEach(training => {
      amount += training.price * training.quantity;
    });
    return amount;    
  }

  getCustomer() : Customer {
    let customer = localStorage.getItem('customer');
    if(customer)  return  JSON.parse(customer);
    return new Customer("unknown","","","","");
  }

  saveCustomer(customer : Customer) {
    localStorage.setItem('customer',JSON.stringify(customer));
  }
  
  /**
   * Méthode qui supprime tous les éléments du panier dans la structure de données puis dans le LS
   */
  clearLocalStorage() {
    this.cart.clear();
    localStorage.setItem('cart','');    
  }

  /**
   * Méthode qui injecte la commande en locale storage
   */
  sendOrderToLocaleStorage() {
    let order = {cart : this.getCart(), total : this.getAmount()};
    localStorage.setItem('order',JSON.stringify(order));    
  }
}