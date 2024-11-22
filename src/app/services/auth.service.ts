import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

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
      localStorage.setItem('user', JSON.stringify(user));
    }
    /**
    * Récupérer les informations du user
    */
    getUser(): { email: string, roles: string[] } | null {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
     }

    /**
     * Logout le user en effacant ses données personnelles 
     */ 
    logout(): void {
      localStorage.removeItem('user');
    }

    login(email: string, password: string): Observable<any> {
      return this.http.get<any>('http://localhost:3000/users').pipe(
        map(users => {
          const user = users.find((u: any) => u.email === email && u.password === password);
          if (user) {
            this.setUser({ email: user.email, roles: user.roles });
            return user;
          } else {
            throw new Error('Identifiants incorrects');
          }
        }),
        catchError(err => {
          return throwError(() => new Error('Erreur lors de l\'authentification : ' + err));
        })
      );
  }
}
