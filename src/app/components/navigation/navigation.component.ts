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
    this.authService.delToken();
  }
}
