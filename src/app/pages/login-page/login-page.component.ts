import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  submitLogin() {
    this.authService.login(this.loginForm.value).pipe().subscribe();

    if(this.authService.user?.id) {
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }
  }
}