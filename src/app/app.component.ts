import { Injectable } from '@angular/core'; 
import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app';
  
  constructor (private localStorageService: LocalStorageService) {}

saveToLocalStorage() {
  this.localStorageService.setItem('myKey', "Hello, Local Storage");
}
retrieveFromLocalStorage() {
  const value = this.localStorageService.getItem('myKey');
  console.log(value);
}
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Constructor() { }
}