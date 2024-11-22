
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  invalidCredentials = false;
  errorMessage: string | null = null;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(): void {
    const { userName, password } = this.loginFormGroup.value;
  
    this.authService.login(userName, password).subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['cart']);
          alert('Vous êtes maintenant connecté');
        } else {
          this.invalidCredentials = true;
          this.errorMessage = "L'identification ou le mot de passe n'est pas valide";
        }
      },
      error: (err) => {
        this.invalidCredentials = true;
        this.errorMessage = "L'identification ou le mot de passe n'est pas valide.";
        console.error('Login impossible', err);
      },
      complete: () => {
        console.log('Login attempt complete.');
      }
    });
  }
}  