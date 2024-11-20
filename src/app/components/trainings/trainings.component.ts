import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model.ts/training.model';
import { CartService } from 'src/app/services/cart.service';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})

/**
 * Composant de gestion des formations permettant l'affichage et l'ajout dans le panier de formation
 */
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  error : String | null;

  constructor(private cartService : CartService, 
    private router : Router, 
    private apiService: ApiServiceService) {
   }

  ngOnInit(): void {        
    this.getAllTrainings();
  }

/**Methode pour récupérer toutes les formations en lazy mode */
getAllTrainings() {
  this.apiService.getTrainings().subscribe({
    next : (data) => {
      console.log("Formations récupérées : ", data);
      this.listTrainings = data.listTrainings
    },
    error: (err) => {
      console.error('Erreur lors du chargement des formations:', err);
      this.error = err.message;
    },
    complete : () => this.error = null
  })
}


  /**
   * Méthode permettant l'ajout d'une formation au panier en utilisant le service dédié
   * @param training 
   */
  onAddToCart(training:Training){ //////////////ajouter des limites, nmbre entier etc
    if(training.quantity > 0) {
     this.cartService.addTraining(training);
     this.router.navigateByUrl('cart');
    }
  }
}
