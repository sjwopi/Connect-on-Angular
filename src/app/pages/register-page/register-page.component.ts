import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm!: FormGroup;
  messageErr: string = "";
  isLoad: boolean = true;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  submitRegister() {
    if (this.registerForm.value.password !== this.registerForm.value.password2) {
      console.log("asdfsa")
      this.messageErr = "Пароли должны совпадать"
      return;
    }
    this.authService.register(this.registerForm.value).subscribe(() => {
      while (!this.authService.isLoggedIn()) {
        this.isLoad = false;
      }
      this.router.navigate([''])
      this.isLoad = true;
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'password2': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate([''])
    }
  }
}
