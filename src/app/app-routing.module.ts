import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { EventsPageComponent } from './pages/product-page/events-page.component'
import { EventComponent } from './components/event/event.component'

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: 'login', component: EventComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
