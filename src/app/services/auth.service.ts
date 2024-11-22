import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  /**
   * Vérification d'authentification
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

    /**
   * Sauvegarder les infos user dans le local storage
   * @param user - L'user qui contient email, roles, etc.
   */
    setUser(user: { email: string, roles: string[] }): void {
      localStorage.setItem('user', JSON.stringify(user));  // Save user info to localStorage
    }
  
    /**
     * Logout le user en effacant ses données personnelles 
     */ 
    logout(): void {
      localStorage.removeItem('user');
    }
  
    /**
     * Récupérer les informations du user
     */
    getUser(): { email: string, roles: string[] } | null {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
}
