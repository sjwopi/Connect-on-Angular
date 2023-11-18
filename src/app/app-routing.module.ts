import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { EventsPageComponent } from './pages/events-page/events-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component'

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
