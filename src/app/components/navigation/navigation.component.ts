import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(
    public authService: AuthService
  ) { }
  onLogOut() {
    let id: string = "id" + Math.random().toString(16).slice(2)
    console.log(id)
    let idq: string = "id" + Math.random().toString(16).slice(2)
    console.log(idq)
    this.authService.delToken();
  }
}
