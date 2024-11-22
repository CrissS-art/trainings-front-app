import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private Base_URL = "http://localhost:4200/trainings/"
  // private http = inject(HttpClient);

  constructor(private http: HttpClient, private authService: AuthService) { }

    /**
   * Authenticate the user by checking their credentials
   * @param email - User's email
   * @param password - User's password
   * @returns Observable<any> - The user data if authenticated, otherwise an error
   */
    authenticateUser(email: string, password: string): Observable<any> {
      return this.http.get<any>('http://localhost:3000/users').pipe(
        catchError((error) => {
          console.error('Error fetching users', error);
          return of(null);
        })
      );
    }
  }