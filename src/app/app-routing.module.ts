import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { EventsPageComponent } from './pages/events-page/events-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'register', component: RegisterPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
