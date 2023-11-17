import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  messageErr: string = "";
  isLoad: boolean = true;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe(user => {
      if (user) {
        if (user[0].password !== this.loginForm.value.password) {
          console.log("asdfa")
          this.messageErr = "Неверный пароль"
        }
      }

      while (!this.authService.isLoggedIn()) {
        this.isLoad = false;
      }
      this.router.navigate([''])
      this.isLoad = true;
    })

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }
  }
}