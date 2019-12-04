import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { PlayersComponent } from './components/players/players.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { ClubsDetailComponent } from './components/clubs/clubs-detail/clubs-detail.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PlayersDetailComponent } from './components/players/players-detail/players-detail.component';
import { ClubsEditComponent } from './components/clubs/clubs-edit/clubs-edit.component';
import { PlayersEditComponent } from './components/players/players-edit/players-edit.component';
import { ClubsCreateComponent } from './components/clubs/clubs-create/clubs-create.component';
import { PlayersCreateComponent } from './components/players/players-create/players-create.component';
import { AboutComponent } from './components/about/about.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent,},
  {path: 'clubs', component: ClubsComponent, children: [
      {
        path: 'create',
        component: ClubsCreateComponent
      }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'club/create', component: ClubsCreateComponent },
  { path: 'player/create', component: PlayersCreateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlayersComponent,
    ClubsComponent,
    ClubsDetailComponent,
    LoginComponent,
    RegisterComponent,
    PlayersDetailComponent,
    ClubsEditComponent,
    PlayersEditComponent,
    ClubsCreateComponent,
    PlayersCreateComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [BackendService, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
