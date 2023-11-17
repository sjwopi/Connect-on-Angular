import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { EventComponent } from './components/event/event.component'
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterbarComponent } from './components/filterbar/filterbar.component';
import { FilterEventsPipe } from './pipes/filter-events.pipe';
import { FilterEventsFormatPipe } from './pipes/filter-events-format.pipe';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventsPageComponent,
    NavigationComponent,
    FilterbarComponent,
    FilterEventsPipe,
    FilterEventsFormatPipe,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
